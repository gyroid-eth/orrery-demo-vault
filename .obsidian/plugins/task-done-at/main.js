const { Plugin, Modal, Setting } = require('obsidian');

class DueDateModal extends Modal {
  constructor(app, editor, textarea) {
    super(app);
    this.editor = editor;
    this.textarea = textarea;

    if (editor) {
      // 通常の MarkdownView: カーソル位置と行内容を保存
      this.savedLine = editor.getCursor().line;
      this.savedLineContent = editor.getLine(editor.getCursor().line);
    } else if (textarea) {
      // Kanban / textarea: カーソル位置から行を特定
      const value = textarea.value;
      const selStart = textarea.selectionStart ?? value.length;
      const textBefore = value.substring(0, selStart);
      const lineStart = textBefore.lastIndexOf('\n') + 1;
      const lineEndRaw = value.indexOf('\n', selStart);
      this.savedLineStart = lineStart;
      this.savedLineEnd = lineEndRaw === -1 ? value.length : lineEndRaw;
      this.savedLineContent = value.substring(this.savedLineStart, this.savedLineEnd);
    }
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass('due-date-modal');
    contentEl.createEl('h3', { text: '期日を設定' });

    const today = new Date();
    const formatDate = (d) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };
    const addDays = (d, n) => new Date(d.getTime() + n * 86400000);

    // クイックボタン
    const quickDates = [
      { label: '今日', date: today },
      { label: '明日', date: addDays(today, 1) },
      { label: '3日後', date: addDays(today, 3) },
      { label: '来週', date: addDays(today, 7) },
    ];

    const btnRow = contentEl.createDiv({ cls: 'due-date-quick-btns' });
    for (const { label, date } of quickDates) {
      const btn = btnRow.createEl('button', { text: `${label} (${formatDate(date)})` });
      btn.addEventListener('click', () => {
        this.insertDueDate(formatDate(date));
        this.close();
      });
    }

    // 日付テキスト入力
    const inputRow = contentEl.createDiv({ cls: 'due-date-input-row' });
    const input = inputRow.createEl('input', { type: 'date', value: formatDate(today) });
    input.style.marginRight = '8px';
    const confirmBtn = inputRow.createEl('button', { text: '確定' });
    confirmBtn.addEventListener('click', () => {
      if (input.value) {
        this.insertDueDate(input.value);
        this.close();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value) {
        this.insertDueDate(input.value);
        this.close();
      }
    });

    // 削除ボタン（due date を除去）
    const removeBtn = contentEl.createEl('button', { text: '期日を削除', cls: 'due-date-remove-btn' });
    removeBtn.style.marginTop = '8px';
    removeBtn.addEventListener('click', () => {
      this.removeDueDate();
      this.close();
    });

    setTimeout(() => input.focus(), 50);
  }

  insertDueDate(dateStr) {
    const line = this.savedLineContent;
    let newLine;
    if (/📅\s*\d{4}-\d{2}-\d{2}/u.test(line)) {
      newLine = line.replace(/📅\s*\d{4}-\d{2}-\d{2}/u, `📅 ${dateStr}`);
    } else {
      newLine = line.trimEnd() + ` 📅 ${dateStr}`;
    }
    this._applyLine(newLine);
  }

  removeDueDate() {
    const line = this.savedLineContent;
    const newLine = line.replace(/\s*📅\s*\d{4}-\d{2}-\d{2}/u, '').trimEnd();
    this._applyLine(newLine);
  }

  _applyLine(newLine) {
    if (this.editor) {
      // 通常の MarkdownView
      this.editor.setLine(this.savedLine, newLine);
    } else if (this.textarea) {
      // Kanban / textarea: React の state 更新をトリガーするため nativeValueSetter を使う
      const value = this.textarea.value;
      const newValue =
        value.substring(0, this.savedLineStart) + newLine + value.substring(this.savedLineEnd);
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype, 'value'
      ).set;
      nativeSetter.call(this.textarea, newValue);
      this.textarea.dispatchEvent(new Event('input', { bubbles: true }));
      this.textarea.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}

// Kanban の「完了レーン」とみなす見出し名のパターン。
// Archive 系レーンは意図的な退避先なので完了レーンとはみなさない。
const DONE_LANE_RE = /complete|done|済み|解決済|導入済/i;
const ARCHIVE_LANE_RE = /archive|アーカイブ/i;

class TaskDoneAtPlugin extends Plugin {
  async onload() {
    this.isUpdating = false;
    // ファイルの変更前の内容をキャッシュ（「今チェックされた」行を特定するため）
    this.previousContents = new Map();

    // 期日設定コマンド（Kanban含む全ビューで動作）
    this.addCommand({
      id: 'set-due-date',
      name: 'Due date',
      hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'd' }],
      callback: () => {
        // ホットキー処理は同期的なので、この時点で document.activeElement が
        // Kanban の textarea を指している場合がある
        const activeEl = document.activeElement;
        if (activeEl instanceof HTMLTextAreaElement) {
          new DueDateModal(this.app, null, activeEl).open();
          return;
        }

        const view = this.app.workspace.activeLeaf?.view;
        const editor = view?.activeEditor?.editor ?? view?.editor;
        if (!editor) {
          new (require('obsidian').Notice)('エディタが見つかりません');
          return;
        }
        new DueDateModal(this.app, editor, null).open();
      },
    });

    // 起動時に Kanban ボードの内容をキャッシュ（起動後1回目のチェックが無視されるのを防ぐ・講演用パッチ）
    this.app.workspace.onLayoutReady(async () => {
      for (const f of this.app.vault.getMarkdownFiles()) {
        const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
        if (fm && fm['kanban-plugin'] === 'board') {
          this.previousContents.set(f.path, await this.app.vault.read(f));
        }
      }
    });
    this.registerEvent(
      this.app.vault.on('modify', (file) => {
        if (file.extension === 'md' && !this.isUpdating) {
          this.syncTaskDoneAt(file);
        }
      })
    );
  }

  getTodayDate() {
    const now = new Date();
    const y = now.getFullYear(), m = String(now.getMonth() + 1).padStart(2, '0'), d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`; // local date (was UTC via toISOString)
  }

  getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // frontmatter に kanban-plugin: board があれば Kanban ボード
  isKanbanBoard(file, content) {
    const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
    if (fm && fm['kanban-plugin'] === 'board') return true;
    // metadataCache が未更新でも動くようフロントマターを直接見る
    const m = content.match(/^---\n([\s\S]*?)\n---/);
    return !!(m && /^kanban-plugin:\s*board\s*$/m.test(m[1]));
  }

  // body（kanban:settings より前）の見出しから完了レーンの行 index を返す。無ければ -1。
  findDoneLaneIndex(lines, bodyEnd) {
    let doneIdx = -1;
    for (let i = 0; i < bodyEnd; i++) {
      if (lines[i].startsWith('## ')) {
        const name = lines[i].slice(3).trim();
        if (DONE_LANE_RE.test(name) && !ARCHIVE_LANE_RE.test(name)) doneIdx = i;
      }
    }
    return doneIdx;
  }

  // 直前に [x] 化したカードを、同ボードの完了レーン先頭へ移動する。
  // newLines を直接書き換え、移動が発生したら true を返す。
  relocateCompletedCards(newLines, justCompleted) {
    if (!justCompleted.length) return false;

    let bodyEnd = newLines.findIndex((l) => l.trim().startsWith('%% kanban:settings'));
    if (bodyEnd === -1) bodyEnd = newLines.length;

    const doneIdx = this.findDoneLaneIndex(newLines, bodyEnd);
    if (doneIdx === -1) return false; // 完了レーンが無いボードは移動しない

    // 完了レーンの span [doneStart, doneNext)
    let doneNext = bodyEnd;
    for (let i = doneIdx + 1; i < bodyEnd; i++) {
      if (newLines[i].startsWith('## ')) { doneNext = i; break; }
    }

    // ある行がどのレーンに属するか（直近の見出し index）
    const laneOf = (li) => {
      let cur = -1;
      for (let i = 0; i < bodyEnd; i++) {
        if (i > li) break;
        if (newLines[i].startsWith('## ')) cur = i;
      }
      return cur;
    };

    const isCard = (s) => /^- \[[ xX]\] /.test(s);
    const delete_ = new Set();
    const blocks = []; // 移動するカードブロック（出現順）

    for (const ci of [...new Set(justCompleted)].sort((a, b) => a - b)) {
      if (ci >= bodyEnd) continue;
      if (!/^- \[[xX]\] /.test(newLines[ci])) continue;
      if (ci >= doneIdx && ci < doneNext) continue; // 既に完了レーン内
      if (laneOf(ci) === doneIdx) continue;
      // ブロック末尾 = 後続のインデント継続行（空行 or 次カード/見出しで停止）
      let e = ci + 1;
      while (
        e < bodyEnd &&
        newLines[e] !== '' &&
        (newLines[e][0] === ' ' || newLines[e][0] === '\t') &&
        !isCard(newLines[e])
      ) {
        e++;
      }
      const blk = [];
      for (let x = ci; x < e; x++) { delete_.add(x); blk.push(newLines[x]); }
      blocks.push(blk);
    }

    if (!blocks.length) return false;

    // 削除対象を除いて再構築（移動行は順序保持）
    const rebuilt = [];
    for (let i = 0; i < newLines.length; i++) {
      if (!delete_.has(i)) rebuilt.push(newLines[i]);
    }

    // 再構築後の完了レーン見出しを再特定
    let rb_bodyEnd = rebuilt.findIndex((l) => l.trim().startsWith('%% kanban:settings'));
    if (rb_bodyEnd === -1) rb_bodyEnd = rebuilt.length;
    const h = this.findDoneLaneIndex(rebuilt, rb_bodyEnd);
    if (h === -1) return false;

    // 見出し直後に空行1つ、その下に移動カード（新しいものが上）
    let insertPos;
    if (rebuilt[h + 1] === '') {
      insertPos = h + 2;
    } else {
      rebuilt.splice(h + 1, 0, '');
      insertPos = h + 2;
    }
    const moved = [];
    for (const blk of blocks) moved.push(...blk);
    rebuilt.splice(insertPos, 0, ...moved);

    newLines.length = 0;
    newLines.push(...rebuilt);
    return true;
  }

  async syncTaskDoneAt(file) {
    const content = await this.app.vault.read(file);
    const prevContent = this.previousContents.get(file.path);
    const today = this.getTodayDate();
    const lines = content.split('\n');
    let modified = false;
    const kanban = this.isKanbanBoard(file, content);
    // 今回の modify で新規に [x] 化したトップレベルカードの行 index
    const justCompleted = [];

    // 前の内容から [ ] / [x] タスクの本文テキストをキャッシュ
    // → 今回の modify で [ ] → [x] になった行だけを「新規完了」と判定する
    const prevUnchecked = new Set();
    const prevCheckedWithoutDoneAt = new Set();
    if (prevContent) {
      for (const prevLine of prevContent.split('\n')) {
        if (prevLine.match(/^\s*- \[ \]/)) {
          const key = prevLine.replace(/^\s*- \[ \]\s*/, '').trim();
          prevUnchecked.add(key);
        } else if (prevLine.match(/^\s*- \[x\]/) && !prevLine.includes('[done-at::')) {
          // 前から [x] だが done-at がない行（既存の完了タスク）
          const key = prevLine.replace(/^\s*- \[x\]\s*/, '').trim();
          prevCheckedWithoutDoneAt.add(key);
        }
      }
    }

    const newLines = lines.map((line, idx) => {

      // === 完了タスク（[x]）の処理 ===
      if (line.match(/^\s*- \[x\]/)) {
        const checkmarkMatch = line.match(/✅\s*(\d{4}-\d{2}-\d{2})/u);
        const hasDoneAt = line.includes('[done-at::');
        const isTopCard = /^- \[[xX]\]/.test(line);

        if (checkmarkMatch) {
          // Tasks plugin が追加した ✅ を削除
          let cleaned = line.replace(/\s*✅\s*\d{4}-\d{2}-\d{2}/u, '').replace(/  +/g, ' ').trimEnd();
          // 今日完了 & done-at なし → 完了日 + done-at を追加
          if (checkmarkMatch[1] === today && !hasDoneAt) {
            const dateTime = this.getCurrentDateTime();
            cleaned = `${cleaned} ${today} [done-at:: ${dateTime}]`;
            if (kanban && isTopCard) justCompleted.push(idx); // 新規完了 → 移動対象
          }
          modified = true;
          return cleaned;
        }

        // ✅ なし & done-at なし の場合
        if (!hasDoneAt) {
          // キャッシュがない（プラグイン読み込み直後）はスキップ
          // → 既存の [x] タスクを誤って処理しないための安全弁
          if (!prevContent) return line;

          const lineContent = line.replace(/^\s*- \[x\]\s*/, '').trim();

          // 判定1: 前の状態で [ ] だった → 新規完了（チェックボックスクリック）
          // 判定2: 前の状態で [x] done-at なしでもなかった → 新規完了（Kanbanドラッグ）
          // Kanbanはカード移動時にファイル全体を書き換えるため、prevUnchecked の
          // テキストマッチが失敗する。「前から [x] だった行」に含まれなければ新規と判定。
          const wasUnchecked = prevUnchecked.has(lineContent);
          const wasAlreadyChecked = prevCheckedWithoutDoneAt.has(lineContent);
          if (!wasUnchecked && wasAlreadyChecked) return line;

          const dateTime = this.getCurrentDateTime();
          modified = true;
          // 完了レーンへ自動移動するのは「チェックボックスをクリックして
          // [ ]→[x] になった」場合のみ（Kanban内の手動ドラッグ配置とは競合させない）
          if (kanban && isTopCard && wasUnchecked) justCompleted.push(idx);
          return `${line.trimEnd()} ${today} [done-at:: ${dateTime}]`;
        }

        return line;
      }

      // === 未完了タスク（[ ]）の処理 ===
      if (line.match(/^\s*- \[ \]/)) {
        const hasDoneAt = line.includes('[done-at::');
        const hasCheckmark = /✅/u.test(line);

        if (hasDoneAt || hasCheckmark) {
          let cleaned = line;
          // done-at フィールドを削除
          cleaned = cleaned.replace(/\s*\[done-at::[^\]]+\]/, '');
          // ✅ date を削除
          cleaned = cleaned.replace(/\s*✅\s*\d{4}-\d{2}-\d{2}/gu, '');
          // 末尾の完了日を削除（📅 の後の due date は残す）
          cleaned = cleaned.replace(/(?<!📅)\s+\d{4}-\d{2}-\d{2}\s*$/u, '');
          cleaned = cleaned.replace(/  +/g, ' ').trimEnd();
          modified = true;
          return cleaned;
        }

        return line;
      }

      return line;
    });

    // === Kanban: 新規完了カードを完了レーンへ自動移動 ===
    if (kanban && justCompleted.length) {
      if (this.relocateCompletedCards(newLines, justCompleted)) modified = true;
    }

    if (modified) {
      this.isUpdating = true;
      const newContent = newLines.join('\n');
      await this.app.vault.modify(file, newContent);
      // 変更後の内容でキャッシュを更新
      this.previousContents.set(file.path, newContent);
      setTimeout(() => { this.isUpdating = false; }, 100);
      // 講演用パッチ: 開いている Daily Note の Dataview を即時更新
      setTimeout(() => { try { this.app.commands.executeCommandById('dataview:dataview-force-refresh-views'); } catch (e) {} }, 400);
    } else {
      // 変更なしでもキャッシュを更新（次の比較のために最新状態を保持）
      this.previousContents.set(file.path, content);
    }
  }
}

module.exports = TaskDoneAtPlugin;
