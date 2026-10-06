---
tags: [claude]
---

## これは何

ORRERY のデモ用の Obsidian vault です（英語版: [orrery-demo-vault-en](https://github.com/gyroid-eth/orrery-demo-vault-en)）。ORRERY（複数の AI エージェントを一つの画面で動かし、観測するツール）と、Obsidian の記録・タスク管理を組み合わせて、次を手元で試せます。

1. ORRERY を入れ、Claude Code と Codex にしりとりをさせて通信を確かめる
2. 論文の PDF を pdf-mistral で Markdown と図にする（やり方の案内。同封の変換済みを使ってもよい）
3. digest-paper（ORRERY の add-on）で、Claude と Codex のチームに読書ノートを作らせる
4. `/log` で作業ログを残すと、その日の Daily Note に出る。タスクは Kanban で管理する

個人情報は含みません。Mac と Windows（WSL2）の両方で使えます。

## 使い方

次の順に進めます。Windows 11 では、ORRERY は WSL2 の Ubuntu の中で、Obsidian は Windows 側で動きます。各段にどちらかを書いています。

1. **Obsidian を入れる**: [0. Obsidian（一緒に使う場合）](https://github.com/gyroid-eth/orrery/blob/master/docs/install.md#0-obsidian一緒に使う場合)（すでに入っていれば飛ばす）
2. **ORRERY を入れる**: [Mac](https://github.com/gyroid-eth/orrery/blob/master/docs/install.md#mac) か [Windows 11](https://github.com/gyroid-eth/orrery/blob/master/docs/install.md#windows-11) を、その節の最後まで（Claude Code か Codex も入る）。節の末尾に「Obsidian と一緒に使う」への案内が出ますが、そちらには進まず、この README の 3 に戻ります（3 は、この vault のための同じ手順です）
3. **研究セットを入れる**: 1 行です（Windows は Ubuntu の窓で）。digest-paper を入れ、**この vault を Documents に置き**、これ以降に起動する agent の作業 folder にします（[Obsidian と一緒に使う](https://github.com/gyroid-eth/orrery/blob/master/docs/install.md#obsidian-と一緒に使う)）。

   ```bash
   curl -fsSL https://raw.githubusercontent.com/gyroid-eth/orrery/master/scripts/research-set.sh | bash
   ```

   Codex を使う人は、このあとに [Codex の plugin を入れる](https://github.com/gyroid-eth/orrery/blob/master/docs/install.md#codex-の-plugin-を入れるcodex-を使う人)を行います。

4. **Obsidian で vault を開く**: 「Open folder as vault」→ Documents にできた vault（Mac は `~/Documents/orrery-demo-vault`、Windows は Windows 側の「ドキュメント」。3 の最後に Windows の形で表示されます）。「コミュニティプラグインを有効にしますか」と聞かれたら「Trust author and enable plugins」を押す
5. vault の **`00_Inbox/はじめに.md`** を開き、上から順に進める

**研究セットを使わないとき**: このフォルダを丸ごとダウンロードして置き（Windows は `C:\Users\<あなた>\Documents\` の下など、Windows 側のフォルダ）、4 に進みます。この場合、agent は vault で起動したときだけ vault の中で動きます（「はじめに」の 2 を見てください）。

自分の既存の vault に中身を移して使うと、同梱の plugin と設定は入りません（タスクのノートが Kanban にならない、など）。この vault をそのまま開くのが一番確実です。移すときの手順（コミュニティプラグインに無い Task Done At・PDF Mistral (Hi-Res) のコピーと、Templater・Daily notes の設定）は `00_Inbox/はじめに.md` の 0 にあります。

## 中身

- `00_Inbox/はじめに.md` — デモの流れ（ORRERY の install → しりとり → pdf-mistral → digest-paper → `/log` → Daily Note と Kanban）
- `01_Planning/タスク.md` — Kanban のタスク板。チェックすると完了時刻が付き、完了の列へ移る。カードはコマンドパレットの「タスク追加」（`30_Templates/Scripts/addTaskQA.js`）か、agent の `/addtodo`・`/adddone` でも足せる
- `02_DailyNotes/` — 日々の記録。テンプレートは `30_Templates/Daily Note.md`（未完了のタスク／今日完了したタスク／今日の作業ログ／今日作った・編集したノートが自動で並ぶ）
- `05_Agents/` — AI と作業したときのログ（`LOG_YYYY-MM-DDTHHmm タイトル.md`）。`/log` で作る
- `10_Reference/Papers/` — 試しに使える論文（CC BY 4.0）と、その出典・ライセンスの表（同封の変換済みの論文も載せている）
- `10_Reference/Notes/` — digest-paper が作る読書ノートの保存先。見本として Onimaru et al. 2016 のノートが、読書ノートの例として Tanaka et al. 2024 のノート（`=tanakaFabricSoftPneumatic2024=.md`）が入っている
- `20_MDPapers/` — pdf-mistral が作る論文の Markdown と図。変換済みの 6 本（Onimaru et al. 2016・Tanaka et al. 2024・Inoue and Kondo 2016・Imada et al. 2025・Nojoomi et al. 2018・Seelinger et al. 2024。CC BY 4.0）を同封している
- `CLAUDE.md` / `AGENTS.md` — AI エージェントがこの vault で守るルール（Claude Code は CLAUDE.md、Codex は AGENTS.md を読む。中身は同じ）
- `LICENSE` — この vault のノート・テンプレート・スクリプトは MIT。同梱のプラグインと論文は除き、それぞれのライセンスに従う（`NOTICE.md`）
- `NOTICE.md` — 同梱プラグインと論文のライセンス

## 外部に送られるもの

- pdf-mistral は、変換する PDF を Mistral に送ります。API キーは各自が plugin の設定で入れます（この vault には入っていません）
- Claude Code・Codex・digest-paper は、読ませたノートや論文を、それぞれ設定したサービスに送ります

未公表の論文や共同研究の資料を使うときは、所属先の条件に従ってください。
