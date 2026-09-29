# この vault のルール（AI エージェント向け）

Codex を使う人は `AGENTS.md`（同じ内容）を参照。

- 日本語で答える
- ノートは Markdown。見出し1（#）は使わない（ファイル名がタイトル）
- 新しいノートには先頭に次を付ける:
  ```yaml
  ---
  tags: [claude]
  ---
  ```
- テンプレートは `30_Templates/` に置く
- 日々の記録は `02_DailyNotes/YYYY-MM-DD.md`
- タスクは `01_Planning/タスク.md`（Kanban）
- 論文の Markdown と図は `20_MDPapers/`（pdf-mistral の出力）。digest-paper の読書ノートは `10_Reference/Notes/` に保存する
- API キーやパスワードをノートやチャットに書かない
- ファイルを消す・フォルダの外を触る前に、必ず私に確認する

## 作業ログ

作業が一区切りしたら、`05_Agents/LOG_YYYY-MM-DDTHHmm テーマ名.md` にログを残す（`/log テーマ名` で作れる）。構造:

```markdown
---
tags:
  - claude
---

## 目標
## 議論プロセス
## 実装内容
## 関連ノート
## 次のアクション
```

- 日時は `date '+%Y-%m-%dT%H%M'` の結果を使う（自分の時計を信用しない）
- 結論を先に、経緯は後に。関連するノートは `[[リンク]]` で結ぶ
