---
tags: [claude]
lit-level: 3
title: "Fabric soft pneumatic actuators with programmable Turing pattern textures"
authors: "Masato Tanaka, Yuyang Song, Tsuyoshi Nomura"
year: 2024
doi: "10.1038/s41598-024-69450-z"
url: "https://doi.org/10.1038/s41598-024-69450-z"
journal: "Scientific Reports 14:19175"
language: ja
source: "20_MDPapers/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures.md"
publish: false
---

- mdpaper: [[20_MDPapers/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures]]

> [!summary] このノートの結論
> 膨らむと曲がる・ねじれる布製の空気圧アクチュエータ（FSPA）を、材料配向の最適化と異方的な反応拡散方程式で自動設計し、布で作った論文である。設計手順は前報 Tanaka et al. 2023 と同じで、新しいのは製作法だ。硬い布 Dyneema を切り抜いて TPU に熱圧着する方法と、Kevlar 糸を刺繍する方法の2つを試した。C 字曲げ・S 字曲げ・ねじれの3形状で、試作品と有限要素解析の圧力応答がよく一致したと報告している。

## Abstract

This paper presents a novel computational design and fabrication method for fabric-based soft pneumatic actuators (FSPAs) that use Turing patterns, inspired by Alan Turing's morphogenesis theory. These inflatable structures can adapt their shapes with simple pressure changes and are applicable in areas like soft robotics, airbags, and temporary shelters. Traditionally, the design of such structures relies on isotropic materials and the designer's expertise, often requiring a trial-and-error approach. The present study introduces a method to automate this process using advanced numerical optimization to design and manufacture fabric-based inflatable structures with programmable shape-morphing capabilities. Initially, an optimized distribution of the material orientation field on the surface membrane is achieved through gradient-based orientation optimization. This involves a comprehensive physical deployment simulation using the nonlinear shell finite element method, which is integrated into the inner loop of the optimization algorithm. This continuous adjustment of material orientations enhances the design objectives. These material orientation fields are transformed into discretized texture patterns that replicate the same anisotropic deformations. Anisotropic reaction-diffusion equations, using diffusion coefficients determined by local orientations from the optimization step, are then utilized to create space-filling Turing pattern textures. Furthermore, the fabrication methods of these optimized Turing pattern textures are explored using fabrics through heat bonding and embroidery. The performance of the fabricated FSPAs is evaluated through three different deformation shapes: C-shaped bending, S-shaped bending, and twisting.

## 要点まとめ

- **問い**: 特別な材料を使わず、膜の表面の模様だけで、空気を入れたときの複雑な変形を作れるか。前報は灰色階調 DLP 光造形（g-DLP）で作ったが、作れる大きさが造形機で限られた。本論文はそれを布で作る
- **設計の流れ**: 平らな2枚重ねの膜（上面と下面、縁の節点を共有）を膨らませる。その膜の材料配向を要素ごとの設計変数とし、目標の変形に近づくよう勾配法で最適化する。そのあと配向場を白黒のチューリングパターン（Turing pattern）に置き換える
- **配向の最適化**: 横等方性（transversely isotropic）の材料モデルを使い、配向テンソル $\mathbf{a}$ の6成分を設計変数にする。角度で表すと三角関数の周期性で数値が不安定になるので、テンソルで表し、トレースを1以下に緩めた制約を置く。膨張は幾何学的非線形のシェル有限要素法（Total Lagrangian、内圧は面に垂直な追従力、フル Newton–Raphson）で解き、感度解析と MMA（移動漸近線法）で更新する。この有限要素解析は自作コードで、最適化ループの内側にある
- **材料定数の仮定**: 硬い材料と柔らかい材料のポアソン比を 0.49、体積分率を 0.5 ずつとした
- **パターン生成**: 2つの仮想物質 U（硬い部分）・V（柔らかい部分）の異方的な反応拡散方程式を、平衡に達するまで解く（COMSOL Multiphysics）。拡散テンソルの $\tilde{\mathbf{u}}\otimes\tilde{\mathbf{u}}$ を最適化で得た配向テンソル $\mathbf{a}(\mathbf{x})$ で置き換えるので、縞は局所の配向に沿って伸びる。パラメータ値は本文にすべて載っている（「手法の詳細」節）
- **製作法1・熱圧着**: Dyneema（8 GPa、0.25 mm）をレーザーで切り抜き、TPU フィルム（10 MPa、0.3 mm）に 132 °C・275.8 kPa・1 分で熱圧着する。折り線で二つ折りにし、縁をインパルスシーラーで 93 °C・30 秒封止する。模様は折り線に対して対称に配置してあり、折ると上下面の模様が重なる
- **製作法2・刺繍**: スパンデックス（主成分はポリウレタン、約 10 MPa、0.2 mm）に Kevlar 糸（K-tech 75 Tex、フィラメント径 12 μm、約 70 GPa）をタタミ縫い（Tatami fill stitch）で刺す。刺繍機は ZSK Sprint 系で、裏打ちを3層にし、糸がほつれやすいので速度を落とした。縁はミシンで縫い、内側に空気袋（bladder）を入れる
- **3つの目標変形**: C 字曲げは両端の2節点間の距離を最小化する。S 字曲げは3節点を使い、両端から3分の1の位置の2点の外向き変形を最大化し、端辺中央の1点の変形を最小化する。ねじれは一端を固定し、他端の2節点を逆向きに面外へ動かしつつ中心線に寄せる。C・S 字曲げでは上下面の最適配向が同じになり、ねじれでは上下面で異なる
- **検証**: Abaqus の有限要素解析と2種の試作品を、C 字曲げは両端間の直線距離 $r$、S 字曲げは第1変曲点の曲げ角 $\theta$、ねじれはねじれ角 $\theta$ で、内圧に対して比べた。本文はいずれも「よく一致した」と述べる
- **古典的な縞設計との比較**: 同じ材料で、C 字曲げには横縞、ねじれには斜め縞の手設計と比べた。C 字曲げではチューリング設計のほうが両端間の距離が短く、目的をよく達成した。ねじれでは古典設計のほうがやや大きくねじれたが、見た目はほぼ同じで、差は実験や製作の誤差かもしれない（might）と著者は書く。結論は「同等かそれ以上」で、S 字曲げのような直感的でない形を自動で導ける点を利点に挙げる
- **限界（著者の記述）**: 勾配法の結果は局所最適である。白黒のチューリングパターンは連続した配向場の近似で、布の粗い解像度に合わせて作っているので、「最良」の性能は保証できない。著者は、作りやすさ・軽さ・見た目を優先したと書く
- **本文に無いもの**: 目標形状との誤差の定量値、繰り返し加圧や耐久性の試験、C・S 字曲げ・ねじれ以外の形状、大きな試作品の実演は示されていない。布で作る動機は大型化だが、大型化そのものは提案にとどまる（"proposes a scalable method"）

## 手法の詳細

AI 層（圧縮記法）。値はすべて MDPaper 本文から。

- 最適化問題: min $J(\mathbf{u})$ over $a_{ij}(\mathbf{x})$ s.t. $a_{ij}\in[\delta_{ij}-1,1]$、$g_1=a_{11}+a_{22}+a_{33}-1\le0$、$g_2=a_{ij}^2-a_{ii}a_{jj}=0$（(i,j)=(1,2),(1,3),(2,3)）。$g_2$ が第2・第3不変量＝0 を満たす＝一軸配向。設計変数は FE の節点に置く
- 回転した弾性テンソル: $C^t_{ijkl}=B_1a_{ij}a_{kl}+B_2(a_{ij}\delta_{kl}+a_{kl}\delta_{ij})+B_3(\ldots)+B_4\delta_{ij}\delta_{kl}+B_5(\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk})$。$B_i$ は硬・軟材料のヤング率から決まる（式は前報 Supplementary S2）。MDPaper の $C^t$ 行列（Voigt 表記）は OCR が崩れていて読めない
- 反応拡散: $\partial U/\partial t=\nabla\cdot(\mathbf{D}_u\nabla U)+R_u$、$R_u=a_uU+b_uV+c_u-d_uU$（V も同形）。$\mathbf{D}_u=(L_u-W_u)\tilde{\mathbf{u}}\otimes\tilde{\mathbf{u}}+W_u\mathbf{I}$、$L_u=l_u^2W_u$、$W_u=(w_uw)^2$
- パラメータ: $l_u=l_v=1$、$w_u^2=0.02$、$w_v^2=0.5$、$w=0.12$、$a_u=0.08$、$b_u=0.08$、$c_u=0.04$、$d_u=0.03$、$a_v=0.1$、$b_v=0$、$c_v=-0.15$、$d_v=0.08$。$l$＝異方性の大きさ、$w_u,w_v$＝チャネルピッチ、$w$＝横方向の拡散の大きさ
- 反応拡散の出典は Dede, Zhou, Nomura 2020（微小流路の Turing dehomogenization、ref 39）。配向最適化の詳細は Nomura 2019・Zhou 2022（ref 35, 36）
- 熱圧着の試作品の加圧: 本文は一方向弁＋Dewalt DCC020IB 充電式インフレータと書くが、Fig. 1 のキャプションはシリンジノズル＋圧力ディスペンサと書く
- 著者分担: M.T.＝シェル FE と配向最適化のプログラム・数値計算。Y.S.＝試作・実験・Abaqus 解析。T.N.＝配向最適化とチューリングパターン生成

### 原文の中の食い違い

- **刺繍版の縁の閉じ方**: Methods は「ミシンで縫い、空気袋を入れる」と書き、Results は「両方法とも弁を付けたあとヒートシーラーで封止」と書く
- **刺繍の母材**: Introduction は「Polyurethane polymer」、Materials と Table 2 は「spandex（主成分ポリウレタン）」。同じものの言い換えと見られる
- **ねじれ比較の圧力**: 本文は「41 と 55 kPa で古典設計がやや大きくねじれた」と書くが、Fig. 8 に印字された圧力は 34・48・62 kPa である。41・55 kPa は Fig. 7（C 字曲げ、27・41・55 kPa）の値で、本文の誤記の可能性がある
- **古典設計の呼び方**: 本文は「横縞」「斜め縞」、Fig. 7・8 のキャプションは「checkered pattern with reinforcement strips」
- **Table 2**: MDPaper には表本体が抜けている。PDF では、母材 Spandex 10 MPa・厚さ 0.2 mm、補強 K-tech thread 70 GPa・フィラメント径 12 μm

## 図版解説

> [!figure] **Fig. 1** (img-0, img-4, img-5): 熱圧着による製作と加圧前後
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-0.jpg|700]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-4.jpg|350]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-5.jpg|350]]
> - img-0 は (a) の最適化した模様。白い TPU フィルムの上に、オレンジ色の Dyneema を切り抜いた模様が載っている。青い破線が折り線で、模様は折り線に対して上下対称
> - 模様は中央に楕円の輪が並び、そこから折り線に垂直な枝が櫛のように伸びる
> - img-4・img-5 は (e) 加圧前と (f) 加圧後。手で押さえたチューブが、加圧後は C 字に曲がっている。背景はカッティングマット
> - 原図の (b) レーザー加工機、(c) ヒートプレス、(d) インパルスシーラーの写真（img-1〜3）は装置写真なので省いた

> [!figure] **Fig. 2** (img-6, img-7, img-8): 刺繍による製作と加圧装置
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-6.jpg|700]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-7.jpg|350]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-8.jpg|350]]
> - (a) スパンデックスの上に、金色の Kevlar 糸でチューリングパターンを刺繍した布。拡大図はタタミ縫いの目。青い破線が折り線
> - (b) チューブの構造。刺繍した布を折り線（オレンジの破線）で折り、縫い線で閉じ、内側に赤い空気袋を入れる。黄色の線が硬いチューリングの線
> - (c) 加圧装置。延長パイプと空気の入口を持つ台に、チューブの下端を固定する。右の写真は加圧して立ち上がった刺繍チューブ

> [!figure] **Fig. 3** (img-9〜20, img-22, img-25): 3形状の設計から試作まで
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-9.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-10.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-11.png|230]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-12.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-13.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-14.png|230]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-15.jpg|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-16.jpg|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-17.jpg|230]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-18.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-19.png|230]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-20.png|230]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-22.jpg|350]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-25.jpg|350]]
> - 列は左から C 字曲げ・S 字曲げ・ねじれ。行は上から (a)〜(d)、最下段は (e)(f) の例
> - (a) img-9〜11: メッシュと目的関数。赤い点が目的関数に使う節点。図中に 300 mm と 40 mm の寸法が印字されている。ねじれは一端を固定（Clamped）する
> - (b) img-12〜14: 最適化後の変形形状。C 字の弓なり、中心線をはさんで上下に振れる S 字、一端がねじれた帯
> - (c) img-15〜17: 最適化した配向場（赤い短い線）。青い破線が折り線。C 字曲げでは中央部で折り線に垂直な配向がそろう
> - (d) img-18〜20: 反応拡散で作った白黒のチューリングパターン。黒が硬い材料、白が柔らかい材料。C 字曲げは折り線に垂直な縞と中央の輪、S 字曲げは向きの異なる縞の区画、ねじれは斜めに流れる迷路状の模様になる
> - (e) img-22: 熱圧着の S 字曲げ試作品（オレンジが Dyneema）。(f) img-25: 刺繍の S 字曲げ試作品（金色が Kevlar 糸）。3形状すべての試作品は img-21〜26 にある

> [!figure] **Fig. 4** (img-27〜30): C 字曲げの検証
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-27.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-28.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-29.jpg|150]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-30.png|500]]
> - (a) 有限要素解析の変形図（虹色のコンター）。黒い線が両端間の直線距離 $r$。(b) 熱圧着、(c) 刺繍の試作品を加圧した写真
> - (d) $r$ と内圧の関係。黒が解析、赤が熱圧着、青が刺繍。3者とも圧力が上がると $r$ が短くなる（よく曲がる）
> - 図を見ると、熱圧着は解析より $r$ が短く、刺繍は解析よりわずかに長い。本文はこれを「近い相関」とまとめ、差の原因は論じていない

> [!figure] **Fig. 5** (img-31〜34): S 字曲げの検証
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-31.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-32.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-33.jpg|150]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-34.png|500]]
> - (a) 解析の変形図。第1変曲点での曲げ角 $\theta$ を黒い線で示す。(b) 熱圧着、(c) 刺繍の試作品
> - (d) $\theta$ と内圧の関係。3者とも圧力が上がると $\theta$ が小さくなる（強く曲がる）。最も高い圧力では、解析が試作品より大きく曲がっている

> [!figure] **Fig. 6** (img-35〜38): ねじれの検証
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-35.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-36.jpg|150]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-37.jpg|150]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-38.png|500]]
> - (a) 解析の上面図。鉛直の破線と端の稜線のなす角がねじれ角 $\theta$。(b) 熱圧着、(c) 刺繍の試作品を上から見た写真
> - (d) $\theta$ と内圧の関係。3者とも圧力とともにねじれ角が増え、3本の線は近い

> [!figure] **Fig. 7** (img-39, img-40, img-41, img-44): C 字曲げでの古典設計との比較
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-39.jpg|120]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-40.png|450]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-41.jpg|250]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-44.jpg|250]]
> - (a) img-39: 古典設計。チューブの長手に垂直な Dyneema の横縞が等間隔に並ぶ
> - (b) img-40: 両端間距離 $r$ と内圧の関係。黒が古典設計、赤がチューリング設計。3つの圧力すべてでチューリング設計の $r$ が短い
> - (c) img-41: チューリング設計、(d) img-44: 古典設計を、方眼の前で 27 kPa で膨らませた写真（原図は 27・41・55 kPa の3段、img-41〜46）。黒い線が両端を結ぶ直線で、緑の点が追跡用の目印

> [!figure] **Fig. 8** (img-47, img-48, img-49, img-52): ねじれでの古典設計との比較
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-47.jpg|120]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-48.png|450]]
> ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-49.jpg|250]] ![[20_MDPapers/pdf-mistral-images/Tanaka et al. 2024 - Fabric soft pneumatic actuators with programmable turing pattern textures_img-52.jpg|250]]
> - (a) img-47: 古典設計。斜めの Dyneema の縞が並ぶ
> - (b) img-48: ねじれ角と内圧の関係。黒が古典設計、赤がチューリング設計。最も低い圧力ではほぼ同じで、それより高い2つの圧力では古典設計がやや大きい
> - (c) img-49: チューリング設計（丸い斑点状の模様）、(d) img-52: 古典設計（斜め縞・緑の目印つき）を、端面側から見た 34 kPa の写真（原図は 34・48・62 kPa の3段、img-49〜54）。2本の黒い線のなす角がねじれ角
> - この図に印字された圧力と、本文の「41 と 55 kPa」は一致しない（「原文の中の食い違い」）

## 関連論文

- Tanaka et al. 2023 — 直接の前報。同じ配向最適化とチューリングパターン化を g-DLP 光造形で実装した。本論文は造形サイズの制約を動機に、布の熱圧着と刺繍へ移した（本文 ref 32）
- Montes Maestre et al. 2023 — 縞模様を微分可能に逆設計する。同論文の Fig. 12 は布に硬い縞を載せたアクチュエータで、本論文の刺繍と比べられる。なお本論文が「別の手法」として言及する ToRoS（Maestre et al. 2023、ref 30、ロボットスキンのトポロジー最適化）はこれとは別の論文である
- Panetta et al. 2021 — 2枚の膜を溶着した平行チューブで目標曲面を作る逆設計。溶着線で面内収縮を作る点が、硬い補強で伸びを拘束する本論文と対照的
- Ren et al. 2024 — 2枚の膜の溶着線で面内収縮を作るインフレータブルを周期均質化で逆設計する並行研究。互いに引用はしていないが、両者とも ToRoS（Maestre et al. 2023）を参照する
- Zinatullin et al. 2025 — 布の空気圧アクチュエータに伸びない補強を縫い込み、曲げ・ねじれを作る点が同じ。本論文は有限要素法を内側に持つ最適化で配向を決め、同論文は単位セルごとの応答を手で割り当てる
- Kamijo and Tachi 2024 — プログラム可能な布（textile）の曲率設計。布で形を作る別経路
- Wang and Chortos 2024 — 形状変形デバイスの性能指標の提案。本論文は目標形状との誤差を定量化しておらず、その評価の枠組みとして参照できる
- Aharoni et al. 2018 — 液晶エラストマー膜の配向場から任意曲面を作る逆設計。本論文が「特別な材料」の例として挙げる系（ref 17）
- Nojoomi et al. 2021 — 平面のハイドロゲルの膨潤分布で3次元形状を作る。本論文が挙げるハイドロゲル系の例（ref 16）
- Klein et al. 2007・Kim et al. 2012・Efrati et al. 2009 — 非ユークリッド計量で膜を形作る系。本論文の ref 13〜15
- Dudte et al. 2016・Choi et al. 2019 — 折り紙・切り紙のテセレーションで曲率を設計する。本論文の ref 22・24
- Fofonjka and Milinkovitch 2021 — トカゲの鱗の模様を成長領域の反応拡散で説明する。本論文が自然界のチューリングパターンの例として引く（ref 26）
- Maini and Woolley 2019 — 生物の模様形成のチューリングモデルの総説。反応拡散の背景


## Notes

- 考察（原文に無い）: 布で作る場合、硬い部分と柔らかい部分の界面が弱点になりうる。熱圧着では Dyneema と TPU の接着、刺繍では Kevlar 糸とスパンデックスの縫い目。本論文は界面の破壊や耐久性を試験していない
- 考察（原文に無い）: 刺繍版では、糸の太さ・重ね数・縫い密度が補強部の実効的な剛性を決めるので、設計変数が増える。本論文の解析は硬い材料を一様なヤング率で扱っている
- 著者は、硬い材料と柔らかい材料の剛性差は大きいほど動きが大きいと書き、熱圧着できる組合せで剛性差の大きいものを探すのが難しかったと述べる。刺繍では、針の太さ・剛性・母材との相性を考えて Kevlar を選んだ
- 今後の課題として、空気以外の駆動力（形状記憶など）を同じチューリング設計と組み合わせることを挙げている
