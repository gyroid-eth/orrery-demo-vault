// addTaskQA.js -- QuickAdd User Script
// QuickAdd の Macro「タスク追加」（コマンドパレットから呼べる）から実行する。
// タスク名 → 期限 → 01_Planning の Kanban ボードを選び、未着手の列（## 未着手 か ## To Do）の末尾に
// `- [ ] タスク名 📅 YYYY-MM-DD` を足す。ノートは作らず、開いているファイルも変えない。
// コメントに Templater のタグを置かないこと（Templater が実行しようとする）。

module.exports = async (params) => {
  const { app, quickAddApi, obsidian } = params;
  const { Notice, Modal } = obsidian;
  const PLANNING = "01_Planning";

  // 1. タスク名入力
  const taskName = await quickAddApi.inputPrompt("タスク名");
  if (!taskName || !taskName.trim()) return;

  // 2. 期限ピッカー
  const dueDate = await pickDate(params);

  // 3. ボード選択
  const boards = app.vault.getFiles().filter((f) => {
    if (!f.path.startsWith(PLANNING + "/") || f.extension !== "md") return false;
    const cache = app.metadataCache.getFileCache(f);
    return cache?.frontmatter?.["kanban-plugin"] === "board";
  });

  if (boards.length === 0) {
    new Notice("❌ Kanbanボードが見つかりません");
    return;
  }

  boards.sort((a, b) => a.basename.localeCompare(b.basename));
  const board = await quickAddApi.suggester(
    boards.map((b) => b.basename),
    boards,
  );
  if (!board) return;

  // 4. タスク行を構築
  let taskLine = `- [ ] ${taskName.trim()}`;
  if (dueDate) taskLine += ` 📅 ${dueDate}`;

  // 5. ## To Do セクション末尾に挿入
  const content = await app.vault.read(board);
  const lines = content.split("\n");
  // 未着手の列: ## 未着手 か ## To Do。無ければ、アイデアと完了以外の最初の列
  let todoIdx = lines.findIndex((l) => /^## (未着手|To Do)\s*$/.test(l.trim()));
  if (todoIdx === -1)
    todoIdx = lines.findIndex((l) => /^## /.test(l) && !/アイデア|完了|Done|Complete/i.test(l));

  if (todoIdx === -1) {
    new Notice("❌ 未着手の列（## 未着手 か ## To Do）が見つかりません");
    return;
  }

  let i = todoIdx + 1;
  while (i < lines.length && lines[i].trim() === "") i++;
  while (
    i < lines.length &&
    (lines[i].startsWith("- [") || /^\t/.test(lines[i]))
  )
    i++;

  lines.splice(i, 0, taskLine);
  await app.vault.modify(board, lines.join("\n"));

  new Notice(`✅ ${board.basename} に追加: ${taskName.trim()}`);

  // 日付はローカル時刻で作る（UTC で作ると、日本では朝 9 時まで前日になる）
  function localDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  // ---------------------------------------------------------------------------
  // 期限ピッカー: Modal + <input type="date"> → モバイルはOSネイティブカレンダー
  // フォールバック: suggester で相対日付選択
  // ---------------------------------------------------------------------------
  async function pickDate(p) {
    try {
      return await new Promise((resolve) => {
        let resolved = false;
        const done = (v) => {
          if (!resolved) {
            resolved = true;
            resolve(v);
          }
        };

        const modal = new Modal(app);
        modal.titleEl.setText("📅 期限を選択");

        const ct = modal.contentEl;
        ct.style.padding = "16px";

        const input = ct.createEl("input");
        input.type = "date";
        input.value = localDate(new Date());
        Object.assign(input.style, {
          fontSize: "18px",
          padding: "12px",
          width: "100%",
          marginBottom: "16px",
        });

        const row = ct.createEl("div");
        row.style.display = "flex";
        row.style.gap = "8px";

        const okBtn = row.createEl("button", { text: "OK" });
        Object.assign(okBtn.style, {
          flex: "1",
          padding: "10px",
          fontSize: "16px",
        });
        okBtn.addEventListener("click", () => {
          done(input.value);
          modal.close();
        });

        const skipBtn = row.createEl("button", { text: "期限なし" });
        Object.assign(skipBtn.style, {
          flex: "1",
          padding: "10px",
          fontSize: "16px",
        });
        skipBtn.addEventListener("click", () => {
          done(null);
          modal.close();
        });

        modal.onClose = () => done(null);
        modal.open();
      });
    } catch (_e) {
      const labels = ["今日", "明日", "明後日", "1週間後", "期限なし", "日付入力"];
      const choice = await p.quickAddApi.suggester(labels, labels);
      if (!choice || choice === "期限なし") return null;

      const d = new Date();
      const fmt = localDate;

      if (choice === "今日") return fmt(d);
      if (choice === "明日") {
        d.setDate(d.getDate() + 1);
        return fmt(d);
      }
      if (choice === "明後日") {
        d.setDate(d.getDate() + 2);
        return fmt(d);
      }
      if (choice === "1週間後") {
        d.setDate(d.getDate() + 7);
        return fmt(d);
      }
      if (choice === "日付入力") {
        return await p.quickAddApi.inputPrompt("日付 (YYYY-MM-DD)");
      }
      return null;
    }
  }
};
