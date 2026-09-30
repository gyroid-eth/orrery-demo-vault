---
tags: [claude]
---

## これは何

Biomatter Lab（2026-10-01）のデモ用の Obsidian vault です。ORRERY（複数の AI エージェントを一つの画面で動かし、観測するツール）と、Obsidian の記録・タスク管理を組み合わせて、次を手元で試せます。

1. ORRERY を入れ、Claude Code と Codex にしりとりをさせて通信を確かめる
2. 論文の PDF を pdf-mistral で Markdown と図にする
3. digest-paper（ORRERY の add-on）で、Claude と Codex のチームに読書ノートを作らせる
4. `/log` で作業ログを残すと、その日の Daily Note に出る。タスクは Kanban で管理する

個人情報は含みません。Mac と Windows（WSL2）の両方で使えます。

## 使い方

1. このフォルダを丸ごとダウンロードして置く（Windows は `C:\Users\<あなた>\Documents\` の下など、Windows 側のフォルダ）
2. Obsidian で「Open folder as vault」→ このフォルダを選ぶ
3. 「コミュニティプラグインを有効にしますか」と聞かれたら「信頼する」を押す
4. `00_Inbox/はじめに.md` を開き、上から順に進める

## 中身

- `00_Inbox/はじめに.md` — デモの流れ（ORRERY の install → しりとり → pdf-mistral → digest-paper → `/log` → Daily Note と Kanban）
- `01_Planning/タスク.md` — Kanban のタスク板。チェックすると完了時刻が付き、完了の列へ移る。カードはコマンドパレットの「タスク追加」（`30_Templates/Scripts/addTaskQA.js`）か、agent の `/addtodo`・`/adddone` でも足せる
- `02_DailyNotes/` — 日々の記録。テンプレートは `30_Templates/Daily Note.md`（未完了のタスク／今日完了したタスク／今日の作業ログ／今日作った・編集したノートが自動で並ぶ）
- `05_Agents/` — AI と作業したときのログ（`LOG_YYYY-MM-DDTHHmm タイトル.md`）。`/log` で作る
- `10_Reference/Papers/` — 試しに使える論文（CC BY 4.0）と、その出典
- `10_Reference/Notes/` — digest-paper が作る読書ノートの保存先
- `20_MDPapers/` — pdf-mistral が作る論文の Markdown と図
- `CLAUDE.md` / `AGENTS.md` — AI エージェントがこの vault で守るルール（Claude Code は CLAUDE.md、Codex は AGENTS.md を読む。中身は同じ）
- `LICENSE` — この vault のノート・テンプレート・スクリプトは MIT。同梱のプラグインと論文は除き、それぞれのライセンスに従う（`NOTICE.md`）
- `NOTICE.md` — 同梱プラグインと論文のライセンス

## 外部に送られるもの

- pdf-mistral は、変換する PDF を Mistral に送ります。API キーは各自が plugin の設定で入れます（この vault には入っていません）
- Claude Code・Codex・digest-paper は、読ませたノートや論文を、それぞれ設定したサービスに送ります

未公表の論文や共同研究の資料を使うときは、所属先の条件に従ってください。
