---
tags: [claude]
title: "The fin-to-limb transition as the re-organization of a Turing pattern"
authors: "Koh Onimaru, Luciano Marcon, Marco Musy, Mikiko Tanaka, James Sharpe"
year: 2016
doi: "10.1038/ncomms11582"
source: "20_MDPapers/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern.md"
language: ja
review_status: checked
source_check: ocr-and-images
writer: GrayBose
reviewer: MintEinstein
run_id: The-fin-to-limb-transition-as-the-re-org-bcaa45bc-20260930T103709
publish: false
---

- mdpaper: [[20_MDPapers/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern]]
- pdf: [[10_Reference/Papers/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern.pdf]]

> [!summary] 結論 / Bottom line
> トラザメ（*Scyliorhinus canicula*）胸びれの遠位の結節状要素は、マウス指の縞とは違い、Sox9 の「一列の斑点」として現れる。著者らは、マウス指形成で提案された Bmp–Sox9–Wnt（BSW）チューリングネットワークに Fgf 勾配による空間的変調を加えたモデルで、この斑点パターンと Bmp・Wnt 阻害の表現型を定性的に再現できることを示し、ひれ・四肢の遠位骨格の多様性は「深く保存されたチューリング機構の空間的再編成」から生じた可能性を**示唆**している。直接の因果証明ではなく、モデル予測と阻害実験の一致に基づく主張であり、近位の縞状要素の形成機構は未解決。

## 書誌 / Bibliography

- 著者 / Authors: Koh Onimaru, Luciano Marcon, Marco Musy, Mikiko Tanaka, James Sharpe
- 掲載 / Venue, year: *Nature Communications* 7:11582 (2016)。受理 2016-04-11、公開 2016-05-23
- DOI: 10.1038/ncomms11582
- pdf: [[10_Reference/Papers/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern.pdf]]
- mdpaper: [[20_MDPapers/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern]]

## 研究課題 / Question

- マウスの指の配置は BMP・SOX9・WNT からなるチューリング機構（BSW モデル、ref. 12）で決まると提案されている。この機構はマウス以外にも一般的なのか。
- 遺伝子のレパートリーはほぼ保存されているのに、ひれと四肢の遠位骨格の配置が大きく違うのはなぜか。チューリング系はパラメータのわずかな変化で斑点⇄縞を切り替えうるので、BSW モデルの変化でこの違いを説明できるかを問う。
- 材料にトラザメを選んだ理由（Introduction）: ひれの骨格要素が個別の凝集で作られ四肢の凝集に似ていること、ゲノムが真骨魚より派生的でないこと。

## 方法 / Approach

- **発現解析**: whole-mount in situ ハイブリダイゼーション＋光学投影断層撮影（OPT）で Sox9 の時系列（stage 29–30; Fig. 1b）と、Bmp4・Wnt5b・Hoxa13・Dusp6 などの発現を 3 次元で観察。
- **成長モデル**: stage 25/26–32 のひれ芽の輪郭から 1 日刻みで形を補間し、形ごとに三角形メッシュを作る 2D 成長モデル（Fig. 3; Methods）。成長マップは、墨汁（Indian ink）による実際の運命地図（stage 26–28 で標識し約 30 日培養）と仮想運命地図を比べて制約した。
- **数理モデル**: BSW モデル（式 1–3; S は拡散しない、B と W は拡散する）。遠位端から拡散する Fgf 勾配 F が k4 を抑え k7 を強める形で変調（式 16–19）。線形安定性解析でチューリング空間を求め（式 15; Fig. 4c）、成長メッシュ上で stage 29→31 を数値計算（解法は本文で「Huen method」と表記、正しい名称は未確認で Open points 参照; 時間刻み 0.002、各ステップ 1% のガウス乗法ノイズ、零流束境界）。
- **摂動実験**: 胚を殻から出して人工海水中で薬剤処理（DMSO 1%）。Fgf 受容体阻害 SU5402（100 µM）、Bmp 阻害 LDN-193189（50 µM）、Wnt 分泌（porcupine）阻害 C59（20 µM）。発現解析は早期 stage 30 から 4 日処理。軟骨染色（Alcian Blue）は薬剤 20 日＋通常海水 10–20 日。阻害効率は標的遺伝子の qPCR・in situ で確認（Supplementary Fig. 5c, 6a–c; 本ノートでは未確認）。

## 主要な結果 / Main results

- **Sox9 は遠位に一列の斑点として現れる**（Fig. 1b）。基部要素と後方遠位から始まり、弧状の列が後方では最初つながっていて、やがて斑点に分かれる。この斑点は最終骨格の遠位結節要素の第 2 列に対応する（本文; 詳細は Supplementary Fig. 1）。マウスの縞状 Sox9 とは対照的。
- **Bmp・Wnt は Sox9 と逆位相**（Fig. 2b,c）。Bmp4 と Wnt5b の発現には Sox9 斑点に対応する「隙間」の列がある（stage 30, 同一胚の左右ひれ）。Lef1 も浅い相補パターン（Supplementary Fig. 2c）。一方、マウスで最も逆位相の強い Bmp2 はトラザメではひれ縁にだけ発現（Supplementary Fig. 2a）。
- **Fgf 変調なしの BSW モデルでは実際のパターンにならない**: Wnt 産生が Bmp 産生より大幅に高いと斑点ができるが、成長モデル上では一様な斑点が散らばるだけで実物に似ない（Supplementary Fig. 5a; 本ノートでは未確認）。
- **マウスの Hoxd13 のような空間制御役として Hoxa13 は採用しなかった**: Hoxa13 の発現域は遠位 Sox9 と有意に重ならない（Fig. 4b, stage 30）。これは発現像に基づく推論で、Hox の機能阻害実験ではない。
- **Fgf 勾配で変調した BSW モデルは弧状の斑点列を再現**（Fig. 4d）。実データと共通の特徴が 2 つ: (a) 前後端（より近位）から始まり遠位へ伸びる、(b) 最初つながった領域が斑点に分かれる。シミュレートした Fgf 勾配は Fgf 標的遺伝子 Dusp6 の発現域と「おおまかに」似る（Fig. 4c）。
- **成長の寄与（示唆）**: 静止したひれ形状では、成長ありより斑点への分離が遅い（Supplementary Fig. 5b）。著者は「成長が確実な斑点分離に寄与しうる」と述べるにとどめる。
- **Fgf 阻害 → Sox9 列が遠位へずれる**（モデル予測 Fig. 4f、実験 Fig. 4g）。SU5402 で遠位 Sox9 とひれ縁の距離が縮む（SU5402 n = 7/12、DMSO 対照 n = 8/8; stage 30）。ただし周期性の消失や前方の発現消失などばらつきがある（本文; Supplementary Fig. 5d）。
- **Bmp 阻害**: モデルで k2 を 20% 下げると、最遠位の斑点ができず、できた斑点も小さい（Fig. 5b）。LDN-193189 で Sox9 斑点の一部または全部が消失（Fig. 5e; n = 6/8）、軟骨染色で後方の結節要素が失われ残りが小さい（Fig. 5h; n = 2/2）。対照 DMSO は Sox9 n = 18/18、AB n = 3/3。長期処理では AER 様構造とひれ芽幅の拡大が「時に」見られた（Supplementary Fig. 6d）。
- **Wnt 阻害**: モデルで αW を 50% 下げると斑点が部分的に融合し、できた斑点は大きい（Fig. 5c）。C59 で Sox9 が遠位縁に平行な連続領域へ部分的または完全に融合（Fig. 5f; n = 10/10）、軟骨も連続または大きな凝集（Fig. 5i; n = 3/3）。

## 主要な図 / Main figures

### Fig. 1 — トラザメ胸びれにおける Sox9 の時系列

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-0.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-1.png|700]]

- 何を示すか: (a) トラザメ、化石ひれ（*Sauripterus*, *Panderichthys*）、マウス前肢の骨格模式図。赤が遠位要素で、図中の凡例は「Distal elements (not homologous)」。系統樹の線付き。(b) 上段は Sox9 の OPT 像 5 枚（i–v, 時間順）、下段は各時点の Sox9 が将来の骨格のどこに当たるかを赤で示した模式図。
- パネルと主張の対応: b-ii の括弧が後方遠位の初期発現、b-iii の白矢頭が弧状の斑点列、b-iv・v の矢頭が後方で斑点へ分かれた部分。
- 本文・キャプションの該当箇所: Results「The first periodic expression of Sox9 is a distal row of spots」; Fig. 1 キャプション（stage 29–30、背側から、前が上・遠位が右、スケール 100 µm）。各パネルの個別の stage は図にもキャプションにも書かれていない。

### Fig. 2 — Bmp・Wnt は Sox9 と逆位相

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-2.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-3.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-4.png|700]]

- 何を示すか: (a) マウス指形成の BSW ネットワーク（Bmp→Sox9 促進、Sox9⊣Bmp、Wnt⊣Sox9、Sox9⊣Wnt、Bmp と Wnt の自己抑制）と、Bmp（緑）・Sox9（赤）・Wnt（水色）の分布模式図。(b) Sox9 と Bmp4、(c) Sox9 と Wnt5b の OPT 像。上段が全体、中段が拡大（矢頭が Sox9 斑点と対応する Bmp4/Wnt5b の隙間）、下段が垂直な仮想切片。
- パネルと主張の対応: b・c の中段の矢頭列が「逆位相（相補的）」の根拠。b 下段は Sox9 斑点と Bmp4 の隙間がどちらも芽の中央にあること（マウスと同じ）を示す。
- 本文・キャプションの該当箇所: Results「Out-of-phase patterns of Bmp and Wnt expression with Sox9」; Fig. 2 キャプション（stage 30、同一胚の左右ひれ、Sox9 像は左右反転）。

### Fig. 3 — ひれ成長モデルの構築（一部パネル）

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-6.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-8.png|700]]

- 何を示すか: (b) 成長モデルの各時点のひれ形状を細かい三角形メッシュで離散化した図（右に拡大図）。(d) 墨汁による実際の運命地図の写真 2 枚（左は破線でひれ輪郭、右は楕円で標識組織の広がりを囲む）。
- パネルと主張の対応: (d) の実測と仮想運命地図（Fig. 3c、本ノートでは未掲載）を比べて成長マップを決めた。前後軸の非対称成長（後方がより拡大）は Supplementary Fig. 4b–e が根拠で、この 2 枚からは読み取れない。
- 本文・キャプションの該当箇所: Results「A dynamical model of S. canicula fin development」; Fig. 3 キャプション; Methods「Fate map analysis」「In silico modelling」。図番号とパネルはキャプションの記述と画像内容の一致で判断した（画像内にパネル文字はない）。

### Fig. 4 — Fgf で変調したチューリングモデルが Sox9 斑点を再現

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-9.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-10.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-11.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-12.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-13.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-14.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-16.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-17.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-15.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-18.png|700]]

- 何を示すか:
  - (a) パラメータ付きネットワーク（k2: Bmp→Sox9、k3: Wnt⊣Sox9、k4: Sox9⊣Bmp、k7: Sox9⊣Wnt、k5・k9: 自己項）。
  - (b) Hoxa13 と Sox9（黄色の括弧は Sox9 のひれ縁からの距離）。
  - (c) 近位（青）→遠位（赤）に高いシミュレーション Fgf 勾配、Dusp6 発現、k4–k7 平面のチューリング空間（青）と Fgf 勾配に沿った P→D の矢印。
  - (d) 成長モデル上の Sox9 の時系列（赤＝高濃度）。つながった帯が斑点列へ分かれていく。
  - (e) 最終時刻の Bmp・Wnt シミュレーション（遠位で強く、斑点の位置に隙間）と実際の Bmp4・Wnt5b（黒矢頭が隙間）。
  - (f) Fgf 信号の強さと位置の模式図。th1 と th2 の間でチューリングパターンができ、Fgf を抑えるとその領域が遠位へずれる。
  - (g) 仮想切片の Sox9（白）/PI（緑）。対照では括弧（遠位 Sox9 とひれ縁の距離）が長く、Fgf 阻害では短い。
- パネルと主張の対応: (c) 右がモデルの「近位→遠位でチューリング空間を通過する」仕組み、(d) が斑点列の再現、(e) が Bmp/Wnt 予測と実データの一致、(f) が Fgf 阻害の予測、(g) がその検証。
- 本文・キャプションの該当箇所: Results「In silico modelling of the spot-type Sox9 expressions」と Fgf 阻害の段落; Fig. 4 キャプション（g: DMSO n = 8/8、SU5402 n = 7/12、stage 30）。PDF 上のパネル文字は a015（d）の左上の切れ端以外は画像に写っていないため、各画像のパネル割り当てはキャプション内容との一致で判断した。

### Fig. 5 — モデルが in vivo の摂動表現型を予測する

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-19.png|700]]

- 何を示すか: 行が対照 / Bmp 阻害 / Wnt 阻害、列が in silico（a–c）、in vivo Sox9（d–f）、Alcian Blue 軟骨染色（g–i）。e と f は「Mild」「Severe」の 2 例を並べる。
- パネルと主張の対応: b（k2 −20%）で斑点が減り小さい ↔ e で Sox9 斑点の消失 ↔ h で後方要素の消失と小さな結節（矢頭）。c（αW −50%）で斑点が融合 ↔ f で連続した Sox9 ↔ i で連続した要素（括弧）と大きな結節（矢頭）。
- 本文・キャプションの該当箇所: Results「Experimental tests for in silico model predictions」; Fig. 5 キャプション（n 数は上の「主要な結果」を参照）。

### Fig. 6 — ひれと四肢の比較（Fgf の役割の違い）

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-20.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-21.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-22.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-23.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-24.png|700]]

![[20_MDPapers/pdf-mistral-images/Onimaru et al. 2016 - The fin-to-limb transition as the re-organization of a Turing pattern_img-25.png|700]]

- 何を示すか: (a) トラザメ胸びれ（stage 30）とマウス指（E12）の Sox9。(b) Sox9（黒）と近遠位の位置情報（赤→青の勾配）の模式図。トラザメは縁に平行な斑点列、マウスは縁に垂直な縞で、遠位側の波長が大きい（括弧）。(c) 位置信号（PS）と位置のグラフ。トラザメでは th1–th2 の間だけで斑点ができ、マウスでは勾配全体で縞ができて Fgf レベルが局所の波長を変える（近位は短波長、遠位は長波長）。
- パネルと主張の対応: 「Fgf の役割が、トラザメでは斑点列の位置決め、マウスでは縞の向きと波長の制御」という提案（Discussion）の図解。モデルの提案であり、直接の実験証拠ではない。
- 本文・キャプションの該当箇所: Discussion 第 5 段落; Fig. 6 キャプション。

## 機構・解釈 / Mechanism and interpretation

- **中核のモデル**: 拡散しない Sox9 と、拡散する Bmp・Wnt の 3 成分チューリング系。トラザメでは Fgf 勾配が近位→遠位で系を「チューリング空間の中へ通し、また外へ出す」ため、ひれ縁から一定距離の帯だけでパターンができ、弧状の斑点列になる（Fig. 4c,f）。
- **保存性の主張**: 分子の細部は違う（トラザメでは Bmp4、マウスでは BMP2 が有力な Bmp リガンド）が、Bmp・Wnt・Sox9・Fgf の基本的な相互作用は両種で同じで、Bmp/Wnt 阻害への反応もマウスと似る。著者はこれを、サメから哺乳類までの骨格パターン形成にまたがる「deep homology」の新しい例と位置づける。
- **トラザメモデルでの遠位 Hox の扱い**: マウスモデルでは Hoxd13 がチューリング不安定の領域を限るが、トラザメでは Hoxa13 の発現域が Sox9 と有意に重ならないため、トラザメのモデルには遠位 Hox を入れていない（本文は「play no role in our catshark model」とモデルに限定）。BSW ネットワークと Hox の切り離し（decoupling）は、発現の観察と先行研究から「示唆される」とされるにとどまる。四肢では Hox 制御と解剖学的モジュールが強く結びつくが、ひれではその結びつきが緩いという既存データと整合する、と議論。
- **斑点→縞の切り替え（モデル上）**: Supplementary Fig. 7 によれば、少なくとも 2 つのパラメータで Fgf の役割を「斑点の位置決め」から「縞の整列」に変えられる。① Wnt と Bmp の産生項の比（斑点⇄縞。Fig. 5 の Wnt 阻害でも示される）、② Wnt による Sox9 抑制 k3（下げるとチューリング空間が遠位へずれる）。生物学的には FGF と WNT が協調して Sox9 を抑えることが知られており、その協調がトラザメの遠位間葉でより強い可能性を著者は「推測」として挙げている。
- **真骨魚**: ゼブラフィッシュでは sox9a/b が一様で周期パターンがなく、bmp2a は sox9 と重なる。軟骨円盤に穴が開いて放射骨ができる。最も節約的な説明は「真骨魚の系統で BSW ネットワークが失われた（または大きく変わった）」ことだとするが、収斂・平行進化も理論上は否定しない。
- **相同性への含意**: 比較的小さな調節変化が骨格配置を大きく変えうるので、ひれと四肢の遠位要素の相同関係を決めるのは難しい、と結論する（Fig. 1a の凡例も「not homologous」）。

## 限界 / Limitations

- 対象は遠位の結節状要素だけ。近位の縞状要素の形成機構は未解決（著者明記）。Wnt 阻害で遠位 Sox9 が連続になっても縞状要素はできる（太く数が少ない）ため、近位要素は遠位のパターンに完全には依存しないと考えられ、未知の分子制御がありうる。
- モデルは発現量を抽象変数で表した線形相互作用の 2D モデルで、再現は「定性的」（本文の表現）。パラメータは実測値ではない。
- Fgf 阻害の結果はばらつきがあり（SU5402 で 12 例中 7 例）、周期性の消失や前方の発現消失も起きた。
- 軟骨染色の例数は少ない（各条件 n = 2–3）。
- 著者は、実際のひれ→四肢の変化には形状変化、前後パターニングの変化、actinotrichia タンパク質の喪失、Hox 制御など、もっと複雑な過程が関わったはずで、単純な BSW モデルが捉えるのは一部の定性的特徴だと断っている。
- 薬剤処理 2 日後の解析では有意な差が見られなかった（Methods; Supplementary Fig. 6e）。

## 未解決の点と確認範囲 / Open points and what was checked

- **補足資料は未確認**: Supplementary Fig. 1–8（後期の Sox9、Bmp2/Lef1 などの発現、成長マップの非対称性、Supplementary Fig. 5a の Fgf なしの模擬、静止モデルとの比較、qPCR による阻害効率、Supplementary Fig. 7 の斑点⇄縞の切り替え）は入力に含まれず、本文の記述をそのまま引用しただけ。
- **OCR の損傷が疑われる箇所**（修復せずに記録）:
  - Methods の式 (16) が `k_4 W` と `S'` になっている。式 (1) は `k_3 W` と `S^3` で、式 (16) のパラメータ一覧には k3 = 3 があるので、`k_3 W`・`S^3` の誤読の可能性が高いが、PDF で未確認。
  - 式 (11) のチューリング不安定性条件で、`Re σ(k² = 0)` の後の不等号（< 0 と思われる）が抜けている。
  - qPCR の平均発現量の式（式 (4) の後）が崩れている（`4CT` など）。
  - 「Huen method」（Heun 法の誤記か OCR の可能性。方法欄では原文の表記のまま記載）、マウス系統「C52BL/6」（C57BL/6 の誤りの可能性）。PDF で未確認。
  - Discussion で Hox の 2 つのゲノム領域に付いた引用番号「3,31」の 31 は、文献リストでは porcupine 阻害剤の文献に当たり、整合しない。原文か OCR のどちらの問題かは未確認。
- 本文の「Bmp 阻害薬で処理した胚を 1 か月以上培養」と、Methods の「薬剤 20 日＋通常海水 10–20 日」は両立するが、数字としては Methods の方が具体的。
- レビュー: MintEinstein が本文と図 a001, a002, a003, a004, a005, a007, a009, a010–a026 に照らして確認（`review_status` 参照）。
