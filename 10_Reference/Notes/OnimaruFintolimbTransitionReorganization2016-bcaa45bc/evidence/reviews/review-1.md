---
review: 1
draft_digest: 8b927492a020da85be539db63a3af15f58df6e6a17285d13d871eaf390c66b7e
verdict: changes-requested
reviewer: MintEinstein
images_opened: [a001, a002, a003, a004, a005, a007, a009, a010, a011, a012, a013, a014, a015, a016, a017, a018, a019, a020, a021, a022, a023, a024, a025, a026]
---

## Findings

| # | Where in the note | Finding | Evidence in the source | Suggested fix | Blocking |
|---|---|---|---|---|---|
| 1 | 方法 / Approach、数理モデル（note.md 38行）、Open points 171行 | 方法欄は「Heun 法」と確定しているが、提供された本文は「Huen method」。未確認の表記を方法欄で修復しており、Open points の「Heun 法の誤記か OCR、PDF 未確認」という留保と一致しない。 | paper.md 303行に Huen method。入力画像は数値解法の原文を含まず、Heun と確認できない。 | 方法欄を「数値解法名は本文で Huen method（表記未確認; Open points参照）」とするか、解法名を省く。Heun は修復候補として Open points にのみ残す。 | yes |
| 2 | 主要な結果、Hoxa13（46行）; 機構・解釈、見出し「遠位 Hox の非関与」（150行） | 「候補から外した」「遠位 Hox の非関与」は対象が広く、Hox が生物学的に関与しないと読める。ここで確認されたのは発現域の大きな重なりがないことと、このトラザメモデルではマウスの Hoxd13 と同様の領域制限作用を採用しないこと。Hox 全般の機能的非関与を実験で示してはいない。 | paper.md 117行はマウスと同様の Hoxa13 の役割を外すという推論。181行は「play no role in our catshark model」とモデルに限定し、BSW と Hox の decoupling は observations により suggested とする。Fig. 4b / a011 は発現像で、機能阻害実験ではない。 | 46行を「マウス Hoxd13 と同様の空間制御候補としての Hoxa13 は採用しなかった」に限定する。150行の見出しを「トラザメモデルでの遠位 Hox の扱い」等にし、発現域に基づく推論であることを保つ。 | yes |

## Checked without findings

- source/paper.md 全480行、draft/note.md 全文、draft/evidence/figures.json 全24行の対応を確認。受領 digest と bundle.py hash が一致し、bundle.py check は ok。
- draft/assets/ の全24画像を画像ツールで実際に開いた。全24ファイルの SHA-256 は input.json に記録された source/images の値と一致する。
- a001・a002（Fig. 1a,b）：骨格比較の赤い遠位要素、not homologous の凡例、b-i–v の時系列、弧状 Sox9 斑点列と矢頭・括弧の対応。stage 29–30、向き、100 µm は paper.md 35–45行に一致し、各画像の個別 stage を推定していない。
- a003–a005（Fig. 2a–c）：Bmp→Sox9、Wnt⊣Sox9、Sox9⊣Bmp/Wnt の模式的ネットワーク、Bmp/Wnt の自己抑制、Sox9 と Bmp4/Wnt5b の相補的な矢頭・隙間、下段の仮想切片。stage 30、同一胚の左右ひれ、左右反転は paper.md 39・67–71行に一致。
- a007・a009（Fig. 3b,d）：三角形メッシュと墨汁運命地図。図内で欠けたパネル文字はキャプション内容との照合で割り当てている。後方の成長が大きいという結果を、この2画像だけから読み取らないことも適切（paper.md 73・91行）。
- a010–a019（Fig. 4）：a010=a、a011=b、a012–a014=cの左・中央・右、a015=d、a017・a018=eのBmp・Wnt、a016=f、a019=g。OCRでの画像出現順とパネル順を取り違えていない。画像内容、paper.md 117–119・141・151–153行のキャプションと説明が一致する。
- Fig. 4c の近位低Fgf→遠位高Fgf、k4を抑えk7を強める矢印、Turing space 通過、Fig. 4d の帯から斑点への分離、Fig. 4e の Bmp/Wnt の隙間、Fig. 4f/g の遠位移動の予測と観察を確認。Dusp6 はFgf標的の発現として区別されている。
- Fig. 4g の SU5402 n=7/12、DMSO n=8/8、stage 30 は paper.md 141行に一致。周期性の消失・前方発現消失などのばらつきも省略されていない（153行）。距離を画像から精密に数値化していない。
- a020（Fig. 5a–i）：行が対照/Bmp阻害/Wnt阻害、列がシミュレーション/Sox9/Alcian Blue。e/f の mild・severe、h の小さい結節、i の大きい結節と連続要素の括弧が説明と一致。
- Fig. 5 のモデル摂動 k2 −20%、αW −50%、Sox9 の例数（DMSO 18/18、LDN 6/8、C59 10/10）と軟骨染色の例数（3/3、2/2、3/3）を paper.md 155–165行と照合。モデルのパラメータ変化率を、実験の薬剤濃度または阻害率と混同していない。
- a021–a026（Fig. 6）：a021=a、a022・a023=bのトラザメ・マウス、a024・a025=cの位置/波長の模式図、a026=c下のネットワーク。stage 30/E12、斑点列と縞の向き、近位短波長・遠位長波長、th1–th2 の説明が paper.md 185・205・207行と一致。Fgfの種間差を提案として扱っている。
- 方法の数値条件：SU5402 100 µM、LDN-193189 50 µM、C59 20 µM、DMSO 1%、早期stage 30から4日、軟骨染色の薬剤20日＋通常海水10–20日、墨汁標識stage 26–28と約30日培養を paper.md 227・233・235行に照合。
- モデル条件：2D、拡散しないSと拡散するB/W、形状の1日刻み補間、stage 29→31、時間刻み0.002、各ステップ1%のガウス乗法ノイズ、零流束境界は paper.md 115・237・303行に一致（解法名称はFinding 1の対象）。
- 主結論は定性的な再現と実験摂動との一致に基づく示唆として保たれている。成長の寄与、Fgf/Wnt協調、真骨魚での喪失/変化と収斂・平行進化の可能性も断定していない（paper.md 119・157・167–169・185–209行）。
- 限界：遠位結節のみを対象とし近位の縞形成は未解決、近位/遠位の半独立性、少ない軟骨例数、Fgf阻害の変動、実際の進化に他の過程が必要な点を paper.md 183・207行ほかと照合。
- OCRの未解決箇所：式16の k4 W / S'、式11の不等号欠落、qPCR式の崩れ、C52BL/6、Discussion の参照31と文献リストの不一致は、提供本文にそのまま存在する。候補の修復をPDFで確認済みとは書いていない（ただし解法名はFinding 1）。
- 著者5名、2016年、受理日・公開日、誌名7:11582、DOIは paper.md 5–13・471行に一致。pdf/mdpaperの行は input.json の links と一致する。

## Scope and open points

- PDF原本とSupplementary Fig. 1–8はこの査読では開いていない。補足図への言及は提供本文に記載されていることまで確認した。草稿も補足資料の未確認を明示している。
- 解法名以外のOCR修復候補は未確認のまま残す。原論文の正しさ、因果機構の一意性、進化仮説の真偽を保証する査読ではない。
- 修正後は新しいdigestを通知すること。草稿は編集していない。
