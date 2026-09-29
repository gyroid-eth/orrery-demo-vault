---
name: log
description: 今のセッションの作業ログを 05_Agents/ に LOG_YYYY-MM-DDTHHmm 形式で保存する。「ログ残して」「今日の作業をまとめて」と言われた時に使用。
argument-hint: <テーマ名>
user-invocable: true
---

# /log

1. `date '+%Y-%m-%dT%H%M'` で現在時刻を取る
2. `05_Agents/LOG_<時刻> <テーマ名>.md` を作る。frontmatter は `tags: [claude]`
3. 見出しは順に `## 目標` `## 議論プロセス` `## 実装内容` `## 関連ノート` `## 次のアクション`
4. 議論プロセスには「何を試して、どこが違っていて、どう気付いたか」を必ず書く（成功だけ書かない）
5. 関連ノートは `[[ノート名]]` でリンク。今日の Daily Note（`02_DailyNotes/YYYY-MM-DD.md`）の「今日の作業ログ」にログが自動で出る
6. 作ったら Obsidian で開く。vault 名はこのフォルダの名前、`<file>` は `05_Agents/<ファイル名>` を URL エンコードしたもの
	- Mac: `open "obsidian://open?vault=<vault名>&file=<file>"`
	- Windows（WSL）: `explorer.exe "obsidian://open?vault=<vault名>&file=<file>"`（explorer.exe は成功しても終了コード 1 を返すことがある）
	- 開けなくても、ログのファイルができていれば作業は終わり。開けなかったことだけ伝える
