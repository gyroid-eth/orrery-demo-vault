Extreme Mechanics Letters 77 (2025) 102337

ELSEVIER

Contents lists available at ScienceDirect

Extreme Mechanics Letters

journal homepage: www.elsevier.com/locate/eml

EXTREME MECHANICS

# Kinematic folding propagation in degree-4 origami strips

Rinki Imada a,*, Akito Adachi a, Shingo Terashima b, Eiji Iwase b,c, Tomohiro Tachi a,*

$^{a}$ Department of General Systems Studies, Graduate School of Arts and Sciences, The University of Tokyo, 3-8-1 Komaba, Meguro-ku, Tokyo, 153-8902, Japan
$^{b}$ Department of Applied Mechanics and Aerospace Engineering, School of Fundamental Science and Engineering, Waseda University, 3-4-1 Okubo, Shinjuku-ku, Tokyo, 169-8555, Japan
$^{c}$ Kagami Memorial Research Institute for Materials Science and Technology, Waseda University, 2-8-26 Nishiwaseda, Shinjuku-ku, Tokyo, 169-0051, Japan

# ARTICLE INFO

Keywords:

Origami

Kinematics

Nonuniform folding

Maxwell lattice

Discrete dynamical system

Metamaterial

# ABSTRACT

Degree-4 origami strips, one-DOF mechanisms constructed by sequentially connecting degree-4 origami vertices, have inspired origami-based engineering design. However, thorough kinematic analyses were limited to a special subset of degree-4 origami strips that exhibit uniform folding along the sequence. In this study, we show how folding propagates non uniformly, i.e., gets attenuated or amplified, in a general degree-4 origami strip. We introduce the concept of kinematic folding propagation and analyze it by studying discrete dynamical systems. Our results reveal that, despite its simple structure, the strip exhibits diverse folding propagation behaviors, strongly influenced by design parameters such as sector angles and topology of the crease patterns. We show that the propagation behavior is topologically linear when adjacent vertices are connected via opposite creases. We compute and visualize folding motions, including strips that transition from a flat-folded state to a helical shape through uniform or nonuniform (attenuated/amplified) propagation upon actuation of the boundary crease. Additionally, we demonstrate folding propagation in physical models using 3D-printed prototypes with thick panels. Furthermore, we show that topologically nonlinear propagation emerges when adjacent creases are used to connect adjacent vertices. We also discuss folding propagation in curved-crease origami that is achieved by taking a continuum limit of the strip. Our findings establish kinematic folding propagation as a core functionality enabled by nonuniform folding, thereby laying the foundation for programmable origami.

# 1. Introduction

The geometry and kinematics of origami have emerged as a powerful platform to program the mechanical functionalities of structures [1, 2]. Among the developments in origami science and engineering, 1 degree-of-freedom (DOF) origami mechanisms have gained significant attention for their engineering potential. An ideal 1-DOF origami mechanism enables global deformation by actuating a single crease, requiring minimal actuation. This makes such structures particularly appealing for applications in deployable systems [3], robotics [4], flexible electronics [5], and mechanical metamaterials [6-9]. Conventional 1-DOF origami mechanisms, however, rely on the uniform deformation of periodic crease patterns, where all unit cells undergo identical configurations. This approach is effective in creating overconstrained mechanisms such as rigid-foldable quadrilateral patterns [10-12] represented by the Miura-Ori [3] and their tubular [13], cellular [14-16], or curved-crease [17-19] variants, and is also theoretically studied in triangular crease patterns [20-22]. However, the uniformity assumption inherently limits the design space and restricts the programmability.

To overcome these limitations, the present research focuses on the principle of 1D Maxwell lattices. A 1D Maxwell lattice is a periodic one-dimensional framework defined by the balance between kinematic variables and constraints within each unit cell, attracting attention as a platform for topological mechanical metamaterials [23-25]. This balance ensures that the DOF of the entire lattice is determined solely by the DOF of a single unit cell and is independent of the number of unit cells. Furthermore, Maxwell lattices do not assume uniform deformation. Thus, 1D Maxwell lattices provide a paradigm for designing origami mechanisms capable of nonuniform deformation [26-30], expanding the programmability of origami-based systems.

Among the functionalities enabled by nonuniform folding, we focus on the kinematic folding propagation, which refers to how the actuation of a boundary crease propagates through the entire structure. In conventional uniform deformation, the actuation at the boundary crease induces identical and consistent deformation throughout the structure. In contrast, nonuniform deformation allows the actuation effect to either attenuate or amplify as it propagates. Making this property

https://doi.org/10.1016/j.eml.2025.102337

Received 19 March 2025; Received in revised form 16 April 2025; Accepted 17 April 2025

Available online 9 May 2025

2352-4316/© 2025 The Authors. Published by Elsevier Ltd. This is an open access article under the CC BY license (http://creativecommons.org/licenses/by/4.0/).

programmable has significant potential for engineering advancements. For example, it could enable mechanisms that expand or shrink a manipulator's motion by controlling the propagation speed, metamaterials with asymmetric force transmission, or global shape-shifting achieved through a sequence of kinematically ordered local deformations. To achieve programmability, it is essential to understand the range of possible propagation behaviors in specific origami structures and how these behaviors depend on design parameters. However, kinematic folding propagation has received little attention, as it can only be discussed in nonuniform deformation.

This paper explores the kinematic folding propagation in a degree-4 origami strip, a one-dimensional chain of degree-4 origami vertices each having four creases. In the rigid origami kinematics, each crease increases the kinematic variable by one, and each inner vertex imposes three constraints [31], [32], [33]. Hence, a degree-4 origami vertex has 1-DOF, and the Maxwell counting tells us a degree-4 origami strip is a 1D Maxwell lattice where we do not count one of four creases shared by an adjacent vertex. Thus, the entire strip behaves as a 1-DOF mechanism, which can, in principle, be globally actuated by manipulating a boundary crease. The 1-DOF characteristic of degree-4 origami strips is demonstrated by the kinetic artwork of John Edmark [34]. In his work, the strip begins flat-folded in a nearly straight configuration and smoothly transitions into a spiral shape when a boundary crease is manually actuated, showcasing its 1-DOF property and ability to achieve complex deformations.

Turning to previous research, kinematics of degree-4 vertices or their assembly have been extensively studied to design rigid-foldable 1-DOF origami mechanisms. For degree-4 origami strips, previous research has mainly focused on optimizing their design to achieve specific target shapes [35], [36], [37]. One important concept related to the present study is the folding speed or folding multiplier which is defined as the ratio between adjacent fold angles in a degree-4 vertex [10,[38], [39], [40]]. Although the folding multiplier has been used to judge the rigid-foldability of a crease pattern, from the perspective of the present study, it can be interpreted as a measure of kinematic folding propagation. However, the applicability of the folding multiplier is limited to a specific class of degree-4 vertices that are both flat-foldable and developable, where the folding propagation is necessarily topologically linear. A notable previous work is Ref. [26], which examined the kinematic folding propagation in a family of degree-4 origami strips derived by generalizing a single-row segment of the Miura-Ori pattern. While insightful, this study was restricted to a narrow design space. Despite their geometric simplicity, degree-4 origami strips offer a vast and underexplored design space. Specifically, by varying the sector angles of the vertices and the connectivity between vertices, it would be possible to achieve diverse propagation behaviors. Building on this background, we aim to elucidate the relationship between the design and the kinematic folding propagation. In particular, we address kinematic folding propagation at general degree-4 vertices using a dynamical system model [27], [28], [29], [30], where the folding propagation can be topologically nonlinear.

This paper focuses on periodic degree-4 origami strips and is organized into two main parts. First, we investigate the simplest case: strips composed of identical vertices connected via opposite creases. We parameterize their design and kinematics, and derive the recurrence relation, i.e. the discrete dynamical system governing folding propagation. Based on linear stability analysis, we classify the design space into four types and visualize representative folding motions for each. We also validate our analysis with 3D-printed physical models of flat-foldable strips. In the second part, we extend the study to generalized designs, exploring the effects of varying periodicity and connectivity. Additionally, we examine folding propagation in curved-crease origami by taking the continuum limit of the discrete dynamical system. Finally, we summarize our findings and outline future directions.

## Result

### Definition and parameterization

In the first part, we focus on a strip consisting of vertices with identical geometry. We begin by parameterizing the design and kinematics of such strips using sector angles and fold angles. Labeling the four creases of a vertex as *i* = 0, 1, 2, 3 (mod 4) in the counterclockwise direction, the sector angle *θ*^{*i*} ∈ (0,2*π*) is defined as the angle between the *i*th and (*i*+1)-st creases. On the other hand, the fold angle *ρ*^{*i*} ∈ [ - *π*, *π*] represents the exterior dihedral angle at the *i*th crease which takes a positive (negative) value when folded in the valley (mountain) direction (Fig. 1(A)). For convenience, we represent the sector angles as a tuple, *Θ* := (*θ*^{0},*θ*^{1},*θ*^{2},*θ*^{3}). Next, we consider a strip of multiple degree-4 vertices with identical *Θ*, indexed by *t* ∈ ℤ_{≥0}. We parameterize the kinematics of a strip using a series ((*ρ*_{*i*}^{0},*ρ*_{*i*}^{1},*ρ*_{*i*}^{2},*ρ*_{*i*}^{1}))_{0∈ℤ_{≥1}} where *ρ*_{*i*}^{i} denotes the *i*th fold angle of the *r*th vertex. To define the connectivity of the strip, we specify which of the four creases in the *r*th vertex serves as the input and output creases, shared with the (*t*-1)-st and (*t*+1)-st vertices, respectively. Here, we fix the 0-th crease as the input crease. Among the remaining creases, the 1-st and 3-rd creases are adjacent to the input, while the 2-nd crease is opposite. The choice between the adjacent crease and the opposite crease as the output crease critically influences the nature of the kinematic folding propagation, as will be discussed in the second part. In the first part, we select the 2-nd crease as the output crease (Fig. 1(B)).

Although the above parameters and the connectivity are necessary and sufficient for considering the kinematic folding propagation, we introduce additional metric parameters for the visualization. Specifically, we prescribe the edge lengths by (*l*_{*i*}^{L},*l*_{*i*}^{C},*l*_{*i*}^{R}) = (*c*^{*i*}*l*_{0}^{L},*c*^{*i*}*l*_{0}^{C},*c*^{*i*}*l*_{0}^{R}), where *l*_{*i*}^{L}, *l*_{*i*}^{C}, and *l*_{*i*}^{R} denotes the length of edges on the left, front, and right side of the *r*th vertex, respectively. From the equation, the metric is determined from *l*_{0}^{L}, *l*_{0}^{C}, *l*_{0}^{R} and *c*, where the strip has the self-similarity with a scale factor *c*.

### Recurrence relation

Given the sector angles *Θ*, we evaluate the kinematic folding propagation through the strip using the fold angles along the central polyline (*ρ*_{*i*}^{0})_{0∈ℤ_{≥1}}. Since a degree-4 origami strip is a 1-DOF mechanism, the adjacent terms, *ρ*_{*i*}^{0} and *ρ*_{*i*+1}^{0} = *ρ*_{*i*}^{2}, are related by a certain recurrence relation, which encodes the folding propagation behavior. Remarkably, for the current connectivity, the cosines of *ρ*_{*i*}^{0} and *ρ*_{*i*+1}^{0} are linearly related as follows:$$\cos\rho_{i + 1}^{0} = \cos\rho_{i}^{2} = A\cos\rho_{i}^{0} + B,$$where we assume sin *θ*^{1}sin *θ*^{2} ≠ 0 and $$A := \frac{\sin\theta^{3}\sin\theta^{0}}{\sin\theta^{1}\sin\theta^{2}} \text{and} B := \frac{\cos\theta^{1}\cos\theta^{2} - \cos\theta^{3}\cos\theta^{0}}{\sin\theta^{1}\sin\theta^{2}}.$$Eq. (1) can be derived by applying the spherical law of cosines to ∆ *P*^{0}*P*^{1}*P*^{3} and ∆ *P*^{1}*P*^{2}*P*^{2} in Fig. 1(A) [41]. The parameters *A* and *B* quantify the degree of asymmetry between the near-side sector angles (*θ*^{0},*θ*^{3}) and the far-side sector angles (*θ*^{1},*θ*^{2}). Notably, both *A* and *B* remain invariant under the swapping of *θ*^{0} and *θ*^{3}, or of *θ*^{1} and *θ*^{2}. This asymmetry leads to nonuniformity in the folding propagation, as we will demonstrate later. From Eq. (1), we can choose the sign of the output fold angle *ρ*_{*i*+1}^{0}, that is, the Mountain-Valley (MV) assignment of the corresponding crease. This reflects the fact that a degree-4 origami vertex generally has two different folding modes [40], [41], [42], [43]. To specify the folding mode of the strip, we assume that the signs of the central fold angles are uniform, which we prescribe by the parameter *σ* ∈ { - 1, + 1}. The recurrence relation between the fold angles then becomes:$$\rho_{i + 1}^{0} = \sigma\arccos\left({A\cos\rho_{i}^{0} + B} \right).$$

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-2.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-3.jpg]]
Fig. 1. (A) Degree-4 single vertex origami bounded by a unit sphere centering at the vertex  $O$ . (B) Degree-4 origami strip with the sector angles  $\Theta = (\theta^0, \theta^1, \theta^2, \theta^3)$ , and the metric given by  $l_0^1, l_0^C, l_0^R$ , and  $c$ . The right and left facets, divided by the central polyline  $(\mathbf{p}_1^C)_{t \in \mathbb{Z}_{\geq 1}}$ , each form a family of geometrically similar shapes. The stip is placed in the global Cartesian coordinate system where the vertex  $\mathbf{p}_1^C$  and the vector  $(\mathbf{p}_1^C - \mathbf{p}_2^C) / \| \mathbf{p}_1^C - \mathbf{p}_2^C\|$  are fixed at the origin and along the  $X$ -axis, respectively. The inset shows the projection of the strip onto the  $YZ$ -plane, indicating that the  $Z$ -axis bisects the fold angle.

Note that, from Eqs. (1) and (2), the folding propagation behavior is determined by the two quantities  $A$  and  $B$ . Following the previous studies on 1D Maxwell lattices [27-30], we regard Eq. (2) as a discrete dynamical system representing the configuration change over the repetition of unit cells.

# 2.3. Classification

Now, we consider the kinematic folding propagation around a uniform folded state, where  $\rho_{i}^{0}$  remains constant, such as in a fully developed or flat-folded state where  $\rho_{i}^{0} = 0$  or  $\rho_{i}^{0} = \pm \pi$  for all  $i$ . Specifically, we take a uniform folded state as a "ground state" and examine how the change of  $\rho_{i}^{0}$  propagates through the strip. In the discrete dynamical system model, we can determine whether the change of the fold angles attenuates or amplifies based on the linear stability of the fixed point representing a uniform folded state [27-30]. For a discrete dynamical system governed by a single-variable function, such as the current system, a fixed point is stable (resp. unstable) if the magnitude of the derivative at the fixed point is less than (resp. greater than) 1, indicating that deviations from the ground state decrease (resp. increase) over iterations.

The discrete dynamical system of our origami strip (2) is topologically linear. Hence, generically, the system has at most one fixed point, whose stability is determined by the magnitude of the slope  $A$ . From Eq. (1), a fixed point is given by  $B / (1 - A)$  when  $A \neq 1$ . Note that, for the fixed point to represent a valid configuration,  $B / (1 - A)$  must lie within the interval  $[-1, 1]$ . On the other hand, when  $A = 1$ , a fixed point does not exist unless  $B = 0$ , in which case the system reduces to the identity mapping. Based on the above, the design space of our origami strip, represented by the  $(A, B)$ -plane, can be classified into four distinct regions (Fig. 2(A)):

Class I:  $A = 1$  and  $B = 0$ ,

Class II:  $|A| &lt; 1$  and  $-1 \leq B / (1 - A) \leq 1$ ,

Class III:  $|A| &gt; 1$  and  $-1 \leq B / (1 - A) \leq 1$ ,

Class IV:  $A = -1$  and  $-1 \leq B / (1 - A) \leq 1$ .

The series  $(\rho_{i}^{0})_{t\in \mathbb{Z}_{\leq 1}}$  behaves differently in each class (Fig. 2(B)). For example, if the design belongs to Class II (resp. Class III), the series converges to (resp. diverges from) the fixed point, where  $|A|$  represents the speed of the attenuation (resp. amplification). On the other hand, if the design falls in Class I or IV, the deviation from the fixed point is preserved macroscopically. The difference between Class I and IV is that  $(\rho_{i}^{0})_{t\in \mathbb{Z}\geq 1}$  remains constant in Class I, whereas it exhibits a 2-periodic behavior in Class IV.

# 2.4. Design examples

To understand how folding propagation affects the folded state and folding motion, we visualize the folding behavior of strips in each class. Suppose we are given the sector angles  $\Theta$ , the metric parameters  $(l_0^1, l_0^C, l_0^R, c)$ , and the mode assignment  $\sigma$ . Then, given an initial fold angle  $\rho_1^0$ , the folded state can be uniquely calculated by computing the intersection of three spheres iteratively (see Appendix A for details). The folding motion can be visualized by continuously varying  $\rho_1^0$ .

First, we consider the singular cases, Classes I and IV. For Class I, assuming  $\Theta \in (0,\pi)^4$ ,  $A = 1$  and  $B = 0$  hold if and only if either of the following conditions is satisfied:

(I-1):  $\theta^0 = \theta^2$  and  $\theta^1 = \theta^3$ ,
(I-2):  $\theta^0 = \pi -\theta^2$  and  $\theta^1 = \pi -\theta^3$  (4)
(I-3):  $\theta^0 = \theta^1$  and  $\theta^2 = \theta^3$
(I-4):  $\theta^0 = \pi -\theta^1$  and  $\theta^2 = \pi -\theta^3$

Note that we also encounter the conditions (I-1) and (I-2) when designing 1-DOF polyhedral surfaces called Voss nets, represented by the eggbox pattern, and anti-Voss nets, represented by the Miura-Ori, respectively [10,11,44,45]. Geometrically, the condition (I-1) or (I-3) implies that the strip has two different flat-folded states. Similarly, when the condition (I-2) or (I-4) holds, the strip is developable and flat-foldable. This is because  $(A,B) = (1,0)$  is the intersection point of the two boundary lines of the region  $-1\leq B / (1 - A)\leq 1$  , each of which ensures the existence of a single flat-folded or developed state (Fig. 2(A)). Also, note that the existence of two different fixed points is sufficient for the topologically linear recurrence relation (2) to be the identity mapping. We can visualize strip examples in Class I by choosing  $\Theta$  that satisfies any of the conditions (I-1)-(I-4). As visualized in Fig. 3, if a design belongs to Class I, its folded state remains selfsimilar for any  $\rho_1^0$  . The central polyline forms a discrete version of the cylindrical helix  $(c = 1)$  or the conical helix  $(c\neq 1)$  , whose curvature and torsion change depending on  $\rho_1^0$  . Similar to Class I, the folded states in Class IV are also self-similar, but have a period of 2 (Fig. 4). Note that if  $A = -1$  and  $B = 0$  , the pattern has two different flat-folded states each represented by the pair of 2-periodic points, e.g.,  $((0, - \pi),(-\pi ,0))$  (Fig. 4(A)).

Next, we focus on Classes II and III. Unlike in Classes I and IV, folded states in Classes II and III do not exhibit self-similarity, except for the uniform folded state corresponding to a fixed point (Figs. 5 and 6). Instead, they can be intuitively understood as a "graded version" of a self-similar folded state—resembling Class I when  $A &gt; 0$  and Class IV when  $A &lt; 0$ . If the design falls in Class II (resp. Class III), the fixed point is stable (resp. unstable); hence, the deviation from the uniform folded state decreases (resp. increases) through the strip. For example,

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-4.png]]
Fig. 2. (A) Design space represented by the  $(A,B)$ -plane. The insets show the graphs of  $(\cos \rho_1^0, \cos \rho_{i+1}^0)$  in  $[-1,1] \times [-1,1]$  (Top) and  $(\rho_1^0, \rho_{i+1}^0)$  in  $[-180^\circ, 180^\circ] \times [-180^\circ, 180^\circ]$  (Bottom) for several values of  $(A,B)$ . The gray region indicates the region  $-1 \leq B/(1-A) \leq 1$ , where the graph of  $(\rho_1^0, \rho_{i+1}^0)$  is intersect with the diagonal line. In the Bottom graphs, the solid (resp. dashed) curve corresponds to a folding mode where  $\rho_1^0$  and  $\rho_{i+1}^0$  has the same (resp. different) MV assignments; hence, the solid curve represents the recurrence relation of our origami strip. (B) Graphs of  $(\cos \rho_1^0, \cos \rho_{i+1}^0)$  (Left) and  $(\rho_1^0, \rho_{i+1}^0)$  (Right) for each of the four class. In each graph, the typical cobweb plot, connecting the points  $(\cos \rho_1^0, 0), (\cos \rho_1^0, \cos \rho_2^0), (\cos \rho_2^0, \cos \rho_3^0), (\cos \rho_2^0, \cos \rho_4^0), \ldots$  or  $(\rho_1^0, 0), (\rho_1^0, \rho_2^0), (\rho_2^0, \rho_3^0), (\rho_2^0, \rho_4^0), \ldots$ , is drawn, which visualizes the different nature.

consider a flat-foldable strip in Class II, where we unfold the 0-th crease. Then, even if the 0-th crease is fully unfolded, creases farther from it remain flat-folded (Fig. 5(A)). Conversely, in a developable strip in Class III, if we fold the 0-th crease, the subsequent creases fold progressively faster. As a result, the end crease reaches a fully folded state first, preventing further folding of the 0-th crease (Fig. 6(B)). Note that as the number of vertices increases, the range of  $\rho_{1}^{0}$  becomes more constrained.

# 2.5. Demonstration

We demonstrate kinematic folding propagation using a 3D-printed strip with finite thickness. We focus on strips that satisfy the following two assumptions: (1) The sector angles satisfy  $\theta^0 +\theta^1 -\theta^2 -\theta^3 = 0$  ensuring flat-foldability. (2) All creases remain folded in the mountain direction throughout the folding motion (see, for example, Figs. 3(A) or Fig. 5(A)). Assumption (2) facilitates thickness accommodation while preserving the rigid-origami kinematics of zero-thickness strips. For strips satisfying Assumption (2), thickening can be achieved by simply extruding each facet along its normal direction (Fig. 7(A)), without introducing additional geometric constraints. In contrast, if Assumption (2) does not hold (e.g., MV assignments are nonuniform or flip during folding), established thickness accommodation methods [46], such as hinge shift [47] or tapered panels [48], must be employed. While effective, these methods often impose additional constraints on the design, such as requiring symmetry in sector angles or restricting the foldable range, which can limit the strip's classification to Class I or compromise its flat-foldability. By adhering to Assumption (2), we can design thickened strips across Classes I-III, maintaining the intended kinematics and flat-foldability.

In fabrication, each thickened panel is printed separately using a 3D printer and then assembled. Each piece is designed by subtracting some volume from the solid and replacing each crease with a rotational joint (Fig. 7(B)). Note that we must carefully determine the position and width of the joints so that the assembled strip can be flat-folded without interference. We fabricated the prototypes in Class I and III for

the demonstration (Fig. 7(C)). We observed that the strip folds up to a helical shape from a flat-folded state by manipulating an initial crease, demonstrating the 1-DOF nature (see Supplementary Movie). Furthermore, the prototypes qualitatively demonstrate the folding propagation well, including the self-blocking of the initial crease in Class III (Fig. 7(C) Bottom).

# 3. Discussion

# 3.1. Generalization

In this section, we generalize the periodic degree-4 origami strip design and highlight its benefits, such as avoiding self-intersections of facets and enabling fold angle propagation that is topologically nonlinear. In the first part, we assumed that the strip consisted of a single type of vertex and that the input and output creases were opposite. Here, we allow multiple vertex types within one period and permit adjacent creases, i.e., 1-st and 3-rd creases, to serve as output creases. Letting  $N \in \mathbb{Z}_{\geq 1}$  be the number of vertex types in one period. Then, the design is parameterized by  $(\Theta_{n} = (\theta_{n}^{0}, \theta_{n}^{1}, \theta_{n}^{2}, \theta_{n}^{3}), \sigma_{n}, k_{n})_{n \in \{0, \dots, N-1\}}$ . Here,  $\Theta_{n} \in (0, 2\pi)^{4}$  specifies the sector angles,  $\sigma_{n} \in \{-1, 1\}$  defines the MV assignment of the opposite crease, and  $k_{n} \in \{1, 2, 3\}$  indicates the index of the output crease at the  $n$ th vertex (Fig. 8(A)). For instance, the strip in the first part corresponds to the case where  $N = 1$ ,  $\sigma_{0} = \sigma$ , and  $k_{0} = 2$ .

The generalization allows us to design a flat-foldable strip without self-intersections, for example, by setting  $N = 2$ ,  $\Theta_0 = \Theta_1$ ,  $k_0 = k_1 = 2$  and assigning alternating MV values,  $\sigma_0 = -\sigma_1$  (Fig. 8(B)). The family of strips discussed in Ref. [26] falls within such 2-periodic design. Flipping MV assignments is an effective strategy to prevent self-intersections; however, folding propagation remains topologically linear as long as  $k_n = 2$ .

The propagation becomes topologically nonlinear only when the adjacent creases are used to connect adjacent vertices. Unlike the topologically linear relationship in Eq. (1) or Eq. (2), in general,

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-5.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-6.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-7.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-8.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-9.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-10.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-11.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-12.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-13.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-14.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-15.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-16.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-17.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-18.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-19.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-20.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-21.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-22.png]]
Fig. 3. Design examples of Class I. Each block illustrates the folding motion of a strip by showing folded states alongside cobweb plots for varying values of  $\rho_{i}^{0}$ . (A)  $\Theta = (95^{\circ}, 50^{\circ}, 95^{\circ}, 50^{\circ})$ ,  $(l_{0}^{\mathrm{a}}, l_{0}^{\mathrm{c}}, l_{0}^{\mathrm{d}}) = (1.5, 1.0, 1.5)$ ,  $c = 0.95$ . (B)  $\Theta = (95^{\circ}, 60^{\circ}, 85^{\circ}, 120^{\circ})$ ,  $(l_{0}^{\mathrm{a}}, l_{0}^{\mathrm{c}}, l_{0}^{\mathrm{d}}) = (1.5, 1.0, 1.5)$ ,  $c = 0.95$ . (C)  $\Theta = (90^{\circ}, 90^{\circ}, 105^{\circ}, 105^{\circ})$ ,  $(l_{0}^{\mathrm{a}}, l_{0}^{\mathrm{c}}, l_{0}^{\mathrm{d}}) = (1.5, 1.0, 1.5)$ ,  $c = 0.95$ . (D)  $\Theta = (80^{\circ}, 100^{\circ}, 110^{\circ}, 70^{\circ})$ ,  $(l_{0}^{\mathrm{a}}, l_{0}^{\mathrm{c}}, l_{0}^{\mathrm{d}}) = (1.5, 1.0, 1.5)$ ,  $c = 0.95$ .

the relationship between adjacent fold angles is topologically nonlinear [42,43]. Thus, by setting  $k_{n} = 1$  or  $k_{n} = 3$  for some  $n$ , the strip's discrete dynamical system  $\rho_{i}^{0} \mapsto \rho_{i + 1}^{0}$ , defined by the composition of the mappings  $\rho^0 \mapsto \rho^{k_n}$  for  $n \in \{0, \dots, N - 1\}$ , becomes topologically nonlinear. This nonlinearity enables, for example, the coexistence of two fixed points — one stable and one unstable — allowing for the existence of a heteroclinic solution, which converges to different fixed points in positive and negative time evolution. This heteroclinic solution corresponds to a folded state with a domain wall, bridging different uniform folded states, called solitary wave in topological mechanics [49,50]. This enables transitions such as a shift from a developed state to a flat-folded state (Fig. 8(C) Left) or from a flat-folded state to a finitely folded state (Fig. 8(C) Right) through a sequence of local deformations. Thus, the broader design space of generalized origami strips suggests the possibility of programming even nonlinear propagation.

# 3.2. Folding propagation in curved-crease origami

Suppose the origami strip analyzed in the first part has  $c = 1$ . In that case, the rigid folding of the strip is a discretized analog of the rigid-ruling folding [51-53] of the single curved-crease origami, obtained by gluing two circular patches. As we saw, the fold angle of a polygonal crease is represented by a sequence  $(\rho_{i})_{i\in \mathbb{Z}}$  satisfying a recurrence relation, i.e., a discrete dynamical system. In contrast, the fold angle of a smooth curved crease, parameterized by the arc length  $s$ , is often expressed as a function  $\rho (s)$  that satisfies a differential equation [52-55], i.e., a continuous dynamical system. Here, we derive the continuous dynamical system by taking the continuum limit of the recurrence relation for the discretized strip.

First, we reparameterize the strip design. The origami strip can be developed into two polyhedral patches by cutting along the central creases (Fig. 9(A)). In the case of  $c = 1$ , the gluing polyline of each

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-50.jpg]]
Fig. 4. Design examples of Class IV. (A)  $\Theta = (45^{\circ},225^{\circ},110^{\circ},70^{\circ})$ ,  $(l_0^{\mathrm{L}},l_0^{\mathrm{V}},l_0^{\mathrm{R}}) = (1.5,1.0,1.5)$ ,  $c = 0.95$ . (B)  $\Theta \approx (60^{\circ},145^{\circ},75^{\circ},219.8^{\circ})$ ,  $(l_0^{\mathrm{L}},l_0^{\mathrm{V}},l_0^{\mathrm{R}}) = (1.5,1.0,1.5)$ ,  $c = 0.95$ . Note that the strips have non-quadrilateral facets to avoid self-intersections.

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-51.jpg]]
Fig. 5. Design examples of Class II. (A)  $\Theta = (80^{\circ},60^{\circ},100^{\circ},40^{\circ})$ ,  $(l_0^{\mathrm{L}},l_0^{\mathrm{V}},l_0^{\mathrm{R}}) = (1.5,1.0,1.5)$ ,  $c = 0.9$ . (B)  $\Theta = (90^{\circ},110^{\circ},70^{\circ},35^{\circ})$ ,  $(l_0^{\mathrm{L}},l_0^{\mathrm{V}},l_0^{\mathrm{R}}) = (1.5,1.0,1.5)$ ,  $c = 0.95$ .

patch has constant edge lengths and turning angles, which has an inscribed circle. Let  $\kappa^{\mathrm{L}}$  and  $\kappa^{\mathrm{R}}$  denote the signed curvatures of the left and right inscribed circles, respectively, and let  $\Delta s$  be the edge length of the gluing polyline. Then, using the additional angle parameters  $\phi^{\mathrm{L}},\phi^{\mathrm{R}}\in (-\pi /2,\pi /2)$ , which measure the angles between the lateral creases and the lines connecting points on the glueing polyline to the incenter, the sector angles are parameterized as follows:

$$
\theta^ {0} = \frac {\pi}{2} + \operatorname {s g n} \left(\kappa^ {\mathrm {R}}\right) \frac {\Delta \theta^ {\mathrm {R}}}{2} + \phi^ {\mathrm {R}},
$$

$$
\theta^ {1} = \frac {\pi}{2} + \operatorname {s g n} \left(\kappa^ {\mathrm {R}}\right) \frac {\Delta \theta^ {\mathrm {R}}}{2} - \phi^ {\mathrm {R}}, \tag {5}
$$

$$
\theta^ {2} = \frac {\pi}{2} - \operatorname {s g n} \left(\kappa^ {\mathrm {L}}\right) \frac {\Delta \theta^ {\mathrm {L}}}{2} + \phi^ {\mathrm {L}},
$$

$$
\theta^ {3} = \frac {\pi}{2} - \operatorname {s g n} \left(\kappa^ {\mathrm {L}}\right) \frac {\Delta \theta^ {\mathrm {L}}}{2} - \phi^ {\mathrm {L}},
$$

where  $\Delta \theta^k \coloneqq 2\arctan (\Delta s / (2r^k))$  and  $r^k \coloneqq 1 / |\kappa^k|$  ( $k \in \{\mathrm{L}, \mathrm{R}\}$ ). Note that the strip cannot be developed without cutting unless  $\kappa^{\mathrm{L}} = \kappa^{\mathrm{R}}$ . Fixing  $(\kappa^{\mathrm{L}}, \kappa^{\mathrm{R}}, \phi^{\mathrm{L}}, \phi^{\mathrm{R}})$ , as  $\Delta s$  decreases, the gluing polylines become smoother and approach the inscribed circles. Taking the limit as  $\Delta s \to 0$ , the polyhedral patches converge to the smooth circular patches with curvatures  $\kappa^{\mathrm{L}}$  and  $\kappa^{\mathrm{R}}$ , and constant ruling angles  $\psi^{\mathrm{L}} \coloneqq \lim_{\Delta s \to 0} \theta^2 = \pi / 2 + \phi^{\mathrm{L}}$  and  $\psi^{\mathrm{R}} \coloneqq \lim_{\Delta s \to 0} \theta^1 = \pi / 2 - \phi^{\mathrm{R}}$ .

Next, we consider the folded state and the folding propagation. We observe that as  $\Delta s$  approaches 0, both the folded state and the solution of the recurrence relation converge to those of the curvedcrease origami (Fig. 9(B)). The recurrence relation for the discrete strip can be obtained by substituting Eq. (5) into Eq. (1). Remarkably, in the present discretization scheme preserving the inscribed circles,  $B / (1 - A)$

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-52.jpg]]
Fig. 6. Design examples of Class III. (A)  $\Theta = (80^{\circ}, 60^{\circ}, 70^{\circ}, 90^{\circ})$ ,  $(t_{\mathrm{b}}^{\mathrm{L}}, t_{\mathrm{b}}^{\mathrm{C}}, t_{\mathrm{b}}^{\mathrm{R}}) = (0.6, 2.0, 0.6)$ ,  $c = 0.95$ . (B)  $\Theta = (80^{\circ}, 60^{\circ}, 116.8^{\circ}, 103.2^{\circ})$ ,  $(t_{\mathrm{b}}^{\mathrm{L}}, t_{\mathrm{b}}^{\mathrm{C}}, t_{\mathrm{b}}^{\mathrm{R}}) = (0.6, 2.0, 0.6)$ ,  $c = 0.95$ .

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-53.jpg]]
Fig. 7. (A) Thickening flat-foldable strips consist of mountain creases. (B) Design of the 3D-printable piece having snapping hinges. (C) Deployment of the prototypes 3D-printed using a Bambu Lab P1S with PLA filament (Top: uniform propagation in Class I when  $\Theta = (50^{\circ},90^{\circ},50^{\circ},90^{\circ})$ , Bottom: nonuniform propagation in Class III when  $\Theta = (65^{\circ},90^{\circ},50^{\circ},105^{\circ})$ ).

is invariant under the change of  $\Delta s$ :

$$
\frac {B}{1 - A} = - \frac {\kappa^ {\mathrm {L}} \cot \psi^ {\mathrm {R}} - \kappa^ {\mathrm {R}} \cot \psi^ {\mathrm {L}}}{\kappa^ {\mathrm {L}} \cot \psi^ {\mathrm {L}} - \kappa^ {\mathrm {R}} \cot \psi^ {\mathrm {R}}}. \tag {6}
$$

Hence, if exists, a fixed point is preserved even if we decrease  $\Delta s$  (Fig. 9(B) Right). As mentioned, the configuration corresponding to the fixed point takes a helical shape when  $c = 1$ , which can be characterized by its radius and pitch. Notably, in such helical states, both the radius of the inscribed cylinder and the axial translation per unit length are also invariants under  $\Delta s$  (see Appendix B).

To derive the continuum limit, we first subtract  $\rho_{i}^{0}$  from both sides of Eq. (1), divide by  $\Delta s$ , and then let  $\Delta s \to 0$ , replacing  $\rho_{i}^{0}$  and  $\rho_{i+1}^{0}$  with  $\rho(s)$  and  $\rho(s + \Delta s)$ , respectively. Finally, we get the following linear differential equation for  $\cos \rho(s)$ :

$$
\frac {d}{d s} [ \cos \rho (s) ] = \bar {A} \cos \rho (s) + \bar {B}, \tag {7}
$$

where  $\bar{A} := \kappa^{\mathrm{L}}\cot \psi^{\mathrm{L}} - \kappa^{\mathrm{R}}\cot \psi^{\mathrm{R}}$  and  $\bar{B} := \kappa^{\mathrm{L}}\cot \psi^{\mathrm{R}} - \kappa^{\mathrm{R}}\cot \psi^{\mathrm{L}}$ . Like the discrete strip, the folding propagation around a uniform folded state is determined by the stability of the corresponding equilibrium point, where  $d / ds[\cos \rho (s)] = 0$ . If  $\bar{A}\neq 0$ , the equilibrium point is given as  $\cos \rho (s) = -\bar{B} /\bar{A} = B / (1 - A)$ , which is stable (resp, unstable) when  $\bar{A} &lt; 0$  (resp.  $\bar{A} &gt;0$ ). Also, the solution of the Eq. (7) becomes  $\cos \rho (s) = ((\bar{B} /\bar{A}) + \cos \rho (0))\exp (\bar{A} s) - (\bar{B} /\bar{A})$ . On the other hand, if  $\bar{A} = 0$  and  $\bar{B}\neq 0$ , there is no equilibrium point. The exceptional case  $\bar{A} = \bar{B} = 0$ , which is equivalent to  $|\kappa^{\mathrm{L}}| = |\kappa^{\mathrm{R}}|$  and  $|\cot \psi^{\mathrm{L}}| = |\cot \psi^{\mathrm{R}}|$ , results in a constant  $\rho (s)$  regardless of  $\rho (0)$  (Fig. 9(C)).

Unlike sector angles in polyhedral origami, the ruling angles do not need to be rigid in curved-crease origami [55,56], which means that for our case,  $\psi^{\mathrm{L}}$  and  $\psi^{\mathrm{R}}$  can vary as folding progresses (Fig. 9(C)). Moreover, the ruling angle does not need to be constant or periodic, leading to a wider range of possible folding behaviors. Investigating

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-54.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-55.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-56.png]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-57.jpg]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-58.jpg]]
![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-59.jpg]]
Fig. 8. (A) Design of the generalized periodic degree-4 origami strip. (B) Folding motions of the generalized origami strip with periodicity  $N = 2$  (Top:  $\Theta_0 = (90^\circ, 105^\circ, 90^\circ, 105^\circ)$ ,  $\Theta_1 = (80^\circ, 90^\circ, 80^\circ, 90^\circ)$ ,  $\sigma_1 = \sigma_2 = \mathrm{M}$ ,  $k_0 = k_1 = 2$ , Middle:  $\Theta_0 = (90^\circ, 90^\circ, 105^\circ, 105^\circ)$ ,  $\Theta_1 = (80^\circ, 80^\circ, 90^\circ, 90^\circ)$ ,  $\sigma_0 = \sigma_1 = \mathrm{M}$ ,  $k_0 = k_1 = 2$ , Bottom:  $\Theta_0 = \Theta_1 = (85^\circ, 80^\circ, 95^\circ, 100^\circ)$ ,  $\sigma_0 = \mathrm{M}$ ,  $\sigma_1 = \mathrm{V}$ ,  $k_0 = k_1 = 2$ ). These examples have the alternate MV assignments in lateral (Top and Middle), or central creases (Bottom), with which some self-intersections of panels observed in Fig. 3 are avoided. (C) Phase diagram and folding motion for the generalized strips exhibiting the nonlinear nature (Left:  $N = 1$ ,  $\Theta_0 = (70^\circ, 20^\circ, 110^\circ, 160^\circ)$ ,  $\sigma_0 = \mathrm{V}$ ,  $k_0 = 3$ , Right:  $N = 2$ ,  $\Theta^0 = \Theta^2 = (125^\circ, 40^\circ, 65^\circ, 150^\circ)$ ,  $\sigma_0 = \mathrm{M}$ ,  $\sigma_1 = \mathrm{V}$ ,  $k_0 = 3$ ,  $k_1 = 1$ ). Each phase diagram includes the cobweb plot corresponding to the intermediate folded state, visualizing the heteroclinic orbit. Since the Left design is developable and flat-foldable, its folding motion exhibits the gradual flattening from the developed state. On the other hand, the Right design exhibits the gradual folding to the finitely folded state from the flat-folded state.

the physical meaning of the constant ruling angle, or exploring the ruling that is "most natural" in the mechanical sense and how the folding propagates there, is an open problem. Previous studies on the mechanics of curved folding [57,58] could provide useful insights into this problem.

# 4. Conclusion

This paper investigated periodic degree-4 origami strips and how their design affects the kinematic folding propagation. Focusing on strips composed of identical vertices, we showed that using opposite creases to connect adjacent vertices results in topologically linear propagation. We derived conditions on the sector angles that determine whether the strip exhibits uniform or nonuniform (amplifying/attenuating) propagation. These theoretical results were qualitatively validated by experiments using 3D-printed physical models. We also explored generalized strip designs that preserve periodicity and revealed nonlinear behavior when adjacent creases are used to connect adjacent vertices instead of opposite creases. In this case, we observed transitions between two distinct uniform folded states via sequential local deformations. Finally, we examined folding propagation in curved-crease origami, by discretizing the geometry and taking the continuum limit of the recurrence relation.

While this study thoroughly investigated degree-4 origami strips composed of a single type of vertex connected by opposite creases, as discussed, there remains a vast, unexplored design space, even within periodic design. This unexplored space may exhibit exotic behaviors, including nonlinear propagation phenomena as demonstrated in the discussion, and exploring these possibilities is an important direction for future work. In addition, although this paper focused

exclusively on periodic designs, introducing nonperiodic strip designs could further enhance the programmability of folding propagation and the resulting folded shapes. Analyzing folding propagation in nonperiodic strips presents additional challenges, as the recurrence relations become nonautonomous. Nevertheless, we expect that stability analysis of fixed points will still provide a useful framework for understanding their behavior. Moreover, while our focus has been on folding propagation, a detailed analysis of the relationship between design parameters (sector angles and crease lengths) and the curvature and torsion of realizable folded shapes will be essential for future engineering applications. Finally, the discretization of curved-crease origami with certain invariants, and the continuum limit of associated discrete dynamical systems mentioned in this study, could be interpreted from the perspective of discrete differential geometry. We believe that this study provides a fundamental framework for programmable folding propagation in degree-4 origami strips and beyond, serving as a foundation for future engineering applications.

# CRediT authorship contribution statement

Rinki Imada: Writing - review &amp; editing, Writing - original draft, Visualization, Validation, Software, Project administration, Methodology, Investigation, Funding acquisition, Formal analysis, Conceptualization. Akito Adachi: Writing - review &amp; editing, Writing - original draft, Software, Methodology, Investigation, Formal analysis. Shingo Terashima: Writing - review &amp; editing, Validation, Project administration, Investigation, Conceptualization. Eiji Iwase: Writing - review &amp; editing, Supervision, Funding acquisition. Tomohiro Tachi: Writing - review &amp; editing, Writing - original draft, Supervision, Project administration, Methodology, Funding acquisition, Conceptualization.

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

# Declaration of competing interest

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

# Acknowledgments

R.I. acknowledges funding from JSPS KAKENHI Grant No. JP23K J0682. R.I. and T.T. acknowledge funding from JSPS KAKENHI Grant No. JP24H00822. A.A., S.T., E.I., and T.T. acknowledge funding from JSPS KAKENHI Grant No. JP22H04954.

# Appendix A. Calculation of folded states

We construct the folded state of a strip following the coordinate system defined in Fig. 1(B). Given  $\rho_1^0$ , the boundary vertices are expressed as follows:

$$
\mathbf {p} _ {0} ^ {\mathrm {L}} = I _ {0} ^ {\mathrm {L}} \mathbf {R} \left(\rho_ {1} ^ {0} / 2, \mathbf {e} _ {X}\right) \mathbf {R} \left(\theta^ {2}, \mathbf {e} _ {Z}\right) [ 1, 0, 0 ] ^ {T}, \tag {A.1}
$$

$$
\mathbf {p} _ {0} ^ {\mathrm {R}} = I _ {0} ^ {\mathrm {R}} \mathbf {R} \left(- \rho_ {1} ^ {0} / 2, \mathbf {e} _ {X}\right) \mathbf {R} \left(- \theta^ {1}, \mathbf {e} _ {Z}\right) [ 1, 0, 0 ] ^ {T},
$$

where  $\mathbf{R}(\theta, \mathbf{I})$  write for the rotation matrix around axis  $\mathbf{I}$  by angle  $\theta$ . Then, the subsequent vertices can be identified recursively. Given  $\mathbf{p}_i^{\mathrm{L}}, \mathbf{p}_i^{\mathrm{C}}, \mathbf{p}_i^{\mathrm{R}}$ , the unknown vertex  $\mathbf{p}_{i+1}^{\mathrm{C}}$  must be located at the intersection of the three spheres centering at  $\mathbf{p}_i^{\mathrm{L}}, \mathbf{p}_i^{\mathrm{C}}, \mathbf{p}_i^{\mathrm{R}}$  with the following radii:

$$
r _ {t} ^ {\mathrm {L}} := \left\| \mathbf {p} _ {t + 1} ^ {\mathrm {C}} - \mathbf {p} _ {t} ^ {\mathrm {L}} \right\| = \sqrt {\left(I _ {t} ^ {\mathrm {L}}\right) ^ {2} + \left(I _ {t + 1} ^ {\mathrm {C}}\right) ^ {2} - 2 I _ {t} ^ {\mathrm {L}} I _ {t + 1} ^ {\mathrm {C}} \cos \theta^ {2}}, \tag {A.2}
$$

$$
r _ {t} ^ {\mathrm {C}} := \left\| \mathbf {p} _ {t + 1} - \mathbf {p} _ {t} ^ {\mathrm {C}} \right\| = I _ {t + 1} ^ {\mathrm {C}}, \tag {A.2}
$$

$$
r _ {t} ^ {\mathrm {R}} := \left\| \mathbf {p} _ {t + 1} - \mathbf {p} _ {t} ^ {\mathrm {R}} \right\| = \sqrt {\left(I _ {t} ^ {\mathrm {R}}\right) ^ {2} + \left(I _ {t + 1} ^ {\mathrm {C}}\right) ^ {2} - 2 I _ {t} ^ {\mathrm {R}} I _ {t + 1} ^ {\mathrm {C}} \cos \theta^ {1}}.
$$

Thus, we can get  $\mathbf{p}_{t + 1}^{\mathrm{C}}$  using the following formula:

$$
\mathbf {p} _ {t + 1} ^ {\mathrm {C}} = \mathbf {p} _ {t} ^ {\mathrm {C}} + e _ {t} ^ {1} \mathbf {e} _ {t} ^ {1} + e _ {t} ^ {2} \mathbf {e} _ {t} ^ {2} - \sigma e _ {t} ^ {3} \mathbf {e} _ {t} ^ {3}, \quad \text {w h e r e}
$$

$$
e _ {t} ^ {1} := \frac {\left(r _ {t} ^ {\mathrm {C}}\right) ^ {2} + \left\| \mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}} \right\| ^ {2} - \left(r _ {t} ^ {\mathrm {R}}\right) ^ {2}}{2 \left\| \mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}} \right\|}, \tag {A.3}
$$

$$
\mathbf {e} _ {t} ^ {1} := \frac {\mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}}}{\| \mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}} \|},
$$

$$
e _ {t} ^ {2} := \frac {\left(r _ {t} ^ {\mathrm {C}}\right) ^ {2} - \left(r _ {t} ^ {\mathrm {L}}\right) ^ {2} + \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {1}\right) ^ {2}}{+ \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {2}\right) ^ {2} - 2 e _ {t} ^ {1} \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {2}\right)} \tag {A.3}
$$

$$
) / (2 \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {2}\right)),
$$

$$
\mathbf {e} _ {t} ^ {3} := \frac {\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) - \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {1}\right) \mathbf {e} _ {t} ^ {1}}{\sqrt {\left\| \mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}} \right\| ^ {2} - \left(\left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \cdot \mathbf {e} _ {t} ^ {1}\right) ^ {2}}},
$$

$$
e _ {t} ^ {3} := \sqrt {\left(r _ {t} ^ {\mathrm {C}}\right) ^ {2} - \left(e _ {t} ^ {1}\right) ^ {2} - \left(e _ {t} ^ {2}\right) ^ {2}},
$$

$$
\mathbf {e} _ {t} ^ {3} := \mathbf {e} _ {t} ^ {1} \times \mathbf {e} _ {t} ^ {2}.
$$

In the above formula,  $\sigma$  specifies which of the two intersecting points we take as  $\mathbf{p}_{t + 1}^{\mathrm{C}}$ . Note that Eq. (A.3) does not return real values if the three spheres have no intersection. Then, we can get the other  $(t + 1)$ -st vertices:

$$
\mathbf {p} _ {t + 1} ^ {\mathrm {L}} = \mathbf {p} _ {t + 1} ^ {\mathrm {C}} + I _ {t + 1} ^ {\mathrm {L}} \mathbf {R} (- \theta^ {3}, \mathbf {n} _ {t} ^ {\mathrm {L}}) \left(\left(\mathbf {p} _ {t} ^ {\mathrm {C}} - \mathbf {p} _ {t + 1} ^ {\mathrm {C}}\right) / I _ {t} ^ {\mathrm {C}}\right),
$$

$$
\text {w h e r e} \mathbf {n} _ {t} ^ {\mathrm {L}} := \operatorname {s g n} (\pi - \theta^ {2}) \frac {\left(\mathbf {p} _ {t + 1} ^ {\mathrm {C}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \times \left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right)}{\| \left(\mathbf {p} _ {t + 1} ^ {\mathrm {C}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \times \left(\mathbf {p} _ {t} ^ {\mathrm {L}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \|}. \tag {A.4}
$$

$$
\mathbf {p} _ {t + 1} ^ {\mathrm {R}} = \mathbf {p} _ {t + 1} ^ {\mathrm {C}} + I _ {t + 1} ^ {\mathrm {R}} \mathbf {R} (\theta^ {0}, \mathbf {n} _ {t} ^ {\mathrm {R}}) ((\mathbf {p} _ {t} ^ {\mathrm {C}} - \mathbf {p} _ {t + 1} ^ {\mathrm {C}}) / I _ {t} ^ {\mathrm {C}}),
$$

$$
\text {w h e r e} \mathbf {n} _ {t} ^ {\mathrm {R}} := \operatorname {s g n} (\pi - \theta^ {1}) \frac {\left(\mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \times \left(\mathbf {p} _ {t + 1} ^ {\mathrm {C}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right)}{\| \left(\mathbf {p} _ {t} ^ {\mathrm {R}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \times \left(\mathbf {p} _ {t + 1} ^ {\mathrm {C}} - \mathbf {p} _ {t} ^ {\mathrm {C}}\right) \|}.
$$

The whole folded state is obtained by using Eqs. (A.3) and (A.4) recursively. The folded states in Fig. 8(B) and (C) are calculated by a similar procedure.

# Appendix B. Invariants

Given parameters  $\kappa^{\mathrm{L}},\kappa^{\mathrm{R}},\phi^{\mathrm{L}},\phi^{\mathrm{R}}$  and  $\Delta s$  we consider a self-similar configuration in  $\mathbb{R}^3$  corresponding to the fixed point  $\rho^{*} := \sigma \arccos (B / (1 - A))$ . We introduce the local orthonormal frame  $\mathbf{B}_t := [\mathbf{e}_t^{\mathrm{X}},\mathbf{e}_t^{\mathrm{Y}},\mathbf{e}_t^{\mathrm{Z}}]$  at the  $t$ th vertex, following the way in Fig. 1(B). Without loss of generality, let  $\mathbf{B}_0 = \mathbf{I}$ . Let  $\mathbf{T} \in \mathrm{SO}(3)$  denote the change-of-basis matrix between the  $t$ th and  $(t + 1)$ -th frame, i.e.,  $\mathbf{B}_{t + 1} = \mathbf{B}_t\mathbf{T} = \mathbf{T}^{t + 1}$ . In order to derive  $\mathbf{T}$ , let us consider the unit vectors  $\mathbf{v}_t^i$  directing the  $t$ th vector of the  $t$ th vertex. Under the  $t$ th and  $(t + 1)$ -th bases,  $\mathbf{v}_{t + 1}^1$  and  $\mathbf{v}_{t + 1}^3$  are parameterized as follows:

$$
\mathbf {v} _ {t + 1} ^ {1} = \mathbf {B} _ {t + 1} \left[ \begin{array}{c} \cos \theta^ {1} \\ - \sin \theta^ {1} \cos \frac {\rho^ {*}}{2} \\ \sin \theta^ {1} \sin \frac {\rho^ {*}}{2} \end{array} \right] = \mathbf {B} _ {t + 1} \mathbf {x} ^ {1}, \tag {B.1}
$$

$$
\mathbf {v} _ {t + 1} ^ {3} = \mathbf {B} _ {t + 1} \left[ \begin{array}{c} \cos \theta^ {2} \\ \sin \theta^ {2} \cos \frac {\rho^ {*}}{2} \\ - \sin \theta^ {2} \sin \frac {\rho^ {*}}{2} \end{array} \right] = \mathbf {B} _ {t + 1} \mathbf {x} ^ {3}, \tag {B.1}
$$

$$
\mathbf {v} _ {t + 1} ^ {1} = \mathbf {B} _ {t} \left[ \begin{array}{c} - \cos \theta^ {0} \\ - \sin \theta^ {0} \cos \frac {\rho^ {*}}{2} \\ \sin \theta^ {0} \sin \frac {\rho^ {*}}{2} \end{array} \right] = \mathbf {B} _ {t} \mathbf {y} ^ {1},
$$

$$
\mathbf {v} _ {t + 1} ^ {3} = \mathbf {B} _ {t} \left[ \begin{array}{c} - \cos \theta^ {3} \\ \sin \theta^ {3} \cos \frac {\rho^ {*}}{2} \\ - \sin \theta^ {3} \sin \frac {\rho^ {*}}{2} \end{array} \right] = \mathbf {B} _ {t} \mathbf {y} ^ {3},
$$

where  $\mathbf{x}^i$  and  $\mathbf{y}^i$  refer to the coordinates of  $\mathbf{v}_{t + 1}^i$  relative to  $\mathbf{B}_{t + 1}$  and  $\mathbf{B}_t$ , respectively. Note that, since  $\mathbf{T}$  is a rotation matrix,  $\mathbf{T}(\mathbf{x}^1\times \mathbf{x}^3) = \mathbf{y}^1\times \mathbf{y}^3$  holds. Therefore, assuming the existence of an inverse matrix,  $\mathbf{T}$  is expressed as follows:

$$
\mathbf {T} = \left[ \mathbf {y} ^ {1}, \mathbf {y} ^ {3}, \mathbf {y} ^ {1} \times \mathbf {y} ^ {3} \right] \left[ \mathbf {x} ^ {1}, \mathbf {x} ^ {3}, \mathbf {x} ^ {1} \times \mathbf {x} ^ {3} \right] ^ {- 1}. \tag {B.2}
$$

Next, we derive the rotation angle  $\omega$  and rotation axis  $\mathbf{a} = [a_1,a_2,a_3]^T$ $(\|\mathbf{a}\| = 1)$  of  $\mathbf{T}$ , for which we used Mathematica. From the relationship  $\cos \omega = (\mathrm{Tr}(\mathbf{T}) - 1) / 2$ , we obtain the following equation:

$$
\begin{array}{l} \mathrm {c o t} ^ {2} \frac {\omega}{2} = \frac {1 + \cos \omega}{1 - \cos \omega} \\ = \frac {- 2 (\cos (2 \phi^ {\mathrm {L}}) - \cos (2 \phi^ {\mathrm {R}}))}{\Delta s ^ {2} \left((\kappa^ {\mathrm {L}}) ^ {2} \sin \phi^ {\mathrm {L}} - (\kappa^ {\mathrm {R}}) ^ {2} \sin \phi^ {\mathrm {R}}\right)}. \\ \end{array}
$$

Also, from  $a_{i}^{2} = (T_{ij} - \cos \omega) / (1 - \cos \omega)$ , we obtain the following equations:

$$
a _ {1} ^ {2} = \frac {2 \left((\kappa^ {\mathrm {L}}) ^ {2} - (\kappa^ {\mathrm {R}}) ^ {2}\right) \sin^ {2} \phi^ {\mathrm {L}} \sin^ {2} \phi^ {\mathrm {R}}}{2 (\kappa^ {\mathrm {L}}) ^ {2} \sin^ {2} (\phi^ {\mathrm {L}}) - 2 (\kappa^ {\mathrm {R}}) ^ {2} \sin^ {2} (\phi^ {\mathrm {R}})},
$$

$$
\begin{array}{l} a _ {2} ^ {2} = \left(\kappa^ {\mathrm {L}} - \kappa^ {\mathrm {R}}\right) \sin \left(\phi^ {\mathrm {L}} + \phi^ {\mathrm {R}}\right) \left(\kappa^ {\mathrm {L}} \sin \phi^ {\mathrm {L}} \cos \phi^ {\mathrm {R}} \right. \\ + \kappa^ {\mathrm {R}} \cos \phi^ {\mathrm {L}} \sin \phi^ {\mathrm {R}}) / (2 (\kappa^ {\mathrm {L}}) ^ {2} \sin^ {2} \phi^ {\mathrm {L}} \\ - 2 \left(\kappa^ {\mathrm {R}}\right) ^ {2} \sin^ {2} \phi^ {\mathrm {R}}), \tag {B.4} \\ \end{array}
$$

$$
\begin{array}{l} a _ {3} ^ {2} = \left(\left(\kappa^ {\mathrm {L}} + \kappa^ {\mathrm {R}}\right) \sin \left(\phi^ {\mathrm {L}} - \phi^ {\mathrm {R}}\right) \left(\kappa^ {\mathrm {L}} \sin \phi^ {\mathrm {L}} \cos \phi^ {\mathrm {R}} \right. \right. \\ + \kappa^ {\mathrm {R}} \cos \phi^ {\mathrm {L}} \sin \phi^ {\mathrm {R}})) / (2 (\kappa^ {\mathrm {L}}) ^ {2} \sin^ {2} \phi^ {\mathrm {L}} \\ - 2 \left(\kappa^ {\mathrm {R}}\right) ^ {2} \sin^ {2} \phi^ {\mathrm {R}}). \\ \end{array}
$$

Hence,  $\mathbf{a}$  is independent of  $\Delta s$ , from which we can prove that the radius  $r$  and "pitch"  $g$  of the discrete helix are also the invariants:

$$
\begin{array}{l} g := \mathbf {a} \cdot [ 1, 0, 0 ] ^ {T} = a _ {1}, \\ r := \frac {\Delta s}{2} \sqrt {1 - g ^ {2}} \cot \frac {\omega}{2}. \tag {B.5} \\ \end{array}
$$

The quantities  $\mathbf{a}, g, r$ , and  $\Delta s$  are sufficient to determine the shape of a discrete helix.

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

![[20_MDPapers/pdf-mistral-images/Imada et al. 2025 - Kinematic folding propagation in degree-4 origami strips_img-60.jpg]]
Fig. 9. (A) Two polyhedral patches parameterized by  $(\kappa^{\mathrm{L}},\kappa^{\mathrm{R}},\phi^{\mathrm{L}},\phi^{\mathrm{R}},\Delta s)$ , each admitting an inscribed circle with radius  $\rho^{\mathrm{L}} = |1 / \kappa^{\mathrm{L}}|$  or  $r^{\mathrm{R}} = |1 / \kappa^{\mathrm{R}}|$ . In this example,  $\kappa^{\mathrm{L}} &gt; 0$  and  $\kappa^{\mathrm{R}} &lt; 0$ . (B) Convergence of the polyhedral strip to a smooth curved-crease strip as  $\Delta s \to 0$ , with fixed  $(\kappa^{\mathrm{L}},\kappa^{\mathrm{R}},\phi^{\mathrm{L}},\phi^{\mathrm{R}},\rho_{\mathrm{i}}^{0})$  (Left:  $(\kappa^{\mathrm{L}},\kappa^{\mathrm{R}},\phi^{\mathrm{L}},\phi^{\mathrm{R}},\rho_{\mathrm{i}}^{0}) = (0.25, -0.25, 10^{\circ}, 10^{\circ}, -90^{\circ})$ , Right:  $(\kappa^{\mathrm{L}},\kappa^{\mathrm{R}},\phi^{\mathrm{L}},\phi^{\mathrm{R}},\rho_{\mathrm{i}}^{0}) = (0.55, -0.525, 30^{\circ}, 10^{\circ}, -0.005^{\circ})$ ). Each block shows the folded states (top) and the corresponding plots of the recurrence relation solution  $(i)t - (1\Delta s,\rho_{\mathrm{i}}^{0})t_{\mathrm{recL}},$  (bottom), for  $\Delta s = 2.75, 1.25,$  and 0.1. The left and right figures illustrate uniform and non-uniform folding propagation, respectively. As  $\Delta s$  decreases, the strip becomes smoother, and the plots approach the solution of the differential equation with initial condition  $\rho(0) = \rho_{\mathrm{i}}^{0}$  (dashed red curve). The fixed point of the recurrence relation (gray line) remains unchanged throughout. (C) Two one-parameter families of strips with constant fold angles (Left:  $\kappa^{\mathrm{L}} = \kappa^{\mathrm{R}}$  and  $\rho_{\mathrm{i}}^{0}$  are fixed, while  $\varphi^{\mathrm{L}} = \varphi^{\mathrm{R}}$  is varied. Right:  $\kappa^{\mathrm{L}} = -\kappa^{\mathrm{R}}$  and  $\rho_{\mathrm{i}}^{0}$  are fixed, while  $\varphi^{\mathrm{L}} = -\varphi^{\mathrm{R}}$  is varied.). Although the edge shape of the strip is not preserved, each family illustrates a folding motion where the rulings are not rigid.

# Appendix C. Supplementary data

Supplementary material related to this article can be found online at https://doi.org/10.1016/j.eml.2025.102337.

# Data availability

Data will be made available on request.

# References

[1] E. Hawkes, B. An, N.M. Benbernou, H. Tanaka, S. Kim, E.D. Demaine, D. Rus, R.J. Wood, Programmable matter by folding, Proc. Natl. Acad. Sci. 107 (28) (2010) 12441-12445, http://dx.doi.org/10.1073/pnas.0914069107.
[2] D. Misseroni, P.P. Pratapa, K. Liu, B. Kresling, Y. Chen, C. Daraio, G.H. Paulino, Origami engineering, Nat. Rev. Methods Prim. 4 (1) (2024) 40, http://dx.doi.org/10.1038/s43586-024-00313-7.
[3] K. Miura, Method of packaging and deployment of large membranes in space, Inst. Space Astronaut. Sci. Rep. 618 (1985) 1-9.
[4] D. Rus, M.T. Tolley, Design, fabrication and control of origami robots, Nat. Rev. Mater. 3 (6) (2018) 101-112, http://dx.doi.org/10.1038/s41578-018-0009-8.
[5] Z. Song, T. Ma, R. Tang, Q. Cheng, X. Wang, D. Krishnaraju, R. Panat, C.K. Chan, H. Yu, H. Jiang, Origami lithium-ion batteries, Nat. Commun. 5 (1) (2014) 3140, http://dx.doi.org/10.1038/ncomms4140.
[6] H. Yasuda, J. Yang, Reentrant origami-based metamaterials with negative Poisson's ratio and bistability, Phys. Rev. Lett. 114 (2015) 185502, http://dx.doi.org/10.1103/PhysRevLett.114.185502.
[7] P.P. Pratapa, K. Liu, G.H. Paulino, Geometric mechanics of origami patterns exhibiting Poisson's ratio switch by breaking mountain and valley assignment, Phys. Rev. Lett. 122 (15) (2019) 155501, http://dx.doi.org/10.1103/PhysRevLett.122.155501.
[8] Z. Zhai, L. Wu, H. Jiang, Mechanical metamaterials based on origami and kirigami, Appl. Phys. Rev. 8 (4) (2021) 041319, http://dx.doi.org/10.1063/5.0051088.
[9] K. Bertoldi, V. Vitelli, J. Christensen, M. Van Hecke, Flexible mechanical metamaterials, Nat. Rev. Mater. 2 (11) (2017) 1-11, http://dx.doi.org/10.1038/natrevmats.2017.66.

[10] W.K. Schief, A.I. Bobenko, T. Hoffmann, On the integrability of infinitesimal and finite deformations of polyhedral surfaces, in: A.I. Bobenko, J.M. Sullivan, P. Schröder, G.M. Ziegler (Eds.), Discrete Differential Geometry, Birkhäuser Basel, 2008, pp. 67-93, http://dx.doi.org/10.1007/978-3-7643-8621-4_4.
[11] T. Tachi, Generalization of rigid-foldable quadrilateral-mesh origami, J. Int. Assoc. Shell Spat. Struct. 50 (3) (2009) 173-179.
[12] K. Sharifmoghaddam, R. Maleczek, G. Nawratil, Generalizing rigid-foldable tubular structures of T-bedral type, Mech. Res. Commun. 132 (2023) 104151, http://dx.doi.org/10.1016/j.mechrescom.2023.104151.
[13] E.T. Filipov, T. Tachi, G.H. Paulino, Origami tubes assembled into stiff, yet reconfigurable structures and metamaterials, Proc. Natl. Acad. Sci. 112 (40) (2015) 12321-12326, http://dx.doi.org/10.1073/pnas.1509465112.
[14] M. Schenk, S.D. Guest, Geometry of Miura-folded metamaterials, Proc. Natl. Acad. Sci. 110 (9) (2013) 3276-3281, http://dx.doi.org/10.1073/pnas.1217998110.
[15] K.C. Cheung, T. Tachi, S. Calisch, K. Miura, Origami interleaved tube cellular materials, Smart Mater. Struct. 23 (9) (2014) 094012, http://dx.doi.org/10.1088/0964-1726/23/9/094012.
[16] K.T. Liu, G. Paulino, Geometric mechanics of hybrid origami assemblies combining developable and non-developable patterns, Proc. R. Soc. A 480 (2282) (2024) 20230716, http://dx.doi.org/10.1098/rspa.2023.0716.
[17] J.M. Gattas, Z. You, Miura-base rigid origami: parametrizations of curved-crease geometries, J. Mech. Des. 136 (12) (2014) 121404, http://dx.doi.org/10.1115/1.4028532.
[18] X. Zhou, S. Zang, Z. You, Origami mechanical metamaterials based on the miuraderivative fold patterns, Proc. R. Soc. A: Math. Phys. Eng. Sci. 472 (2191) (2016) 20160361, http://dx.doi.org/10.1098/rspa.2016.0361.
[19] A. Karami, A. Reddy, H. Nasur, Curved-crease origami for morphing metamaterials, Phys. Rev. Lett. 132 (10) (2024) 108201, http://dx.doi.org/10.1103/PhysRevLett.132.108201.
[20] T. Tachi, Rigid folding of periodic origami tessellations, in: K. Miura, T. Kawasaki, T. Tachi, R. Uehara, R.J. Lang, P. Wang-Iverson (Eds.), Origami $^0$ , I. Mathematics, 2015, pp. 97-108.
[21] F. Feng, P. Plucinsky, R.D. James, Helical miura origami, Phys. Rev. E 101 (3) (2020) 033002, http://dx.doi.org/10.1103/PhysRevE.101.033002.
[22] J. McInerney, B.G.g. Chen, L. Theran, C.D. Santangelo, D.Z. Rocklin, Hidden symmetries generate rigid folding mechanisms in periodic origami, Proc. Natl. Acad. Sci. 117 (48) (2020) 30252-30259, http://dx.doi.org/10.1073/pnas.2005089117.

R. Imada et al.

Extreme Mechanics Letters 77 (2025) 102337

[23] J.C. Maxwell, L. on the calculation of the equilibrium and stiffness of frames, Lond. Edinb. Dublin Philos. Mag. J. Sci. 27 (182) (1864) 294–299, http://dx.doi.org/10.1080/14786446408643668.
[24] X. Mao, T.C. Lubensky, Maxwell lattices and topological mechanics, Annu. Rev. Condens. Matter Phys. 9 (2018) 413–433, http://dx.doi.org/10.1146/annurev-conmatphys-033117-054235.
[25] T. Lubensky, C. Kane, X. Mao, A. Souslov, K. Sun, Phonons and elasticity in critically coordinated lattices, Rep. Progr. Phys. 78 (7) (2015) 073901, http://dx.doi.org/10.1088/0034-4885/78/7/073901.
[26] B.G.g. Chen, B. Liu, A.A. Evans, J. Paulose, I. Cohen, V. Vitelli, C. Santangelo, Topological mechanics of origami and kirigami, Phys. Rev. Lett. 116 (13) (2016) 135501, http://dx.doi.org/10.1103/PhysRevLett.116.135501.
[27] R. Imada, T. Tachi, Geometry and kinematics of cylindrical waterbomb tessellation, J. Mech. Robot. 14 (4) (2022) 041009, http://dx.doi.org/10.1115/1.4054478.
[28] R. Imada, T. Tachi, Undulations in tubular origami tessellations: A connection to area-preserving maps, Chaos 33 (8) (2023) 083158, http://dx.doi.org/10.1063/5.0160803.
[29] R. Imada, T.C. Hull, J.S. Ku, T. Tachi, Nonlinear kinematics of recursive origami inspired by the spidron, 2024, arXiv preprint arXiv:2403.09278.
[30] R. Imada, T. Tachi, Maxwell origami tube, Phys. Rev. Res. 7 (1) (2025) 013032, http://dx.doi.org/10.1103/PhysRevResearch.7.013032.
[31] T. Kawasaki,  $R(y) = 1$ , in: K. Miura, T. Fuse, T. Kawasaki, J. Maekawa (Eds.), Origami Science &amp; Art: Proceedings of the Second International Meeting of Origami Science and Scientific Origami, Seian University of Art and Design, Otsu, Shiga, Japan, 1997, pp. 31-40.
[32] S.M. Belcastro, T.C. Hull, Modelling the folding of paper into three dimensions using affine transformations, Linear Algebra Appl. 348 (1-3) (2002) 273-282, http://dx.doi.org/10.1016/S0024-3795(01)00608-5.
[33] T. Tachi, Geometric considerations for the design of rigid origami structures, in: Proceedings of the International Association for Shell and Spatial Structures (IASS) Symposium, 2010, pp. 771-782.
[34] J. Edmark, "Spirals", https://www.JohnEdmark.com.
[35] T. Tachi, One-DOF rigid foldable structures from space curves, in: Proceedings of the IABSE-IASS Symposium 2011, 2011, pp. 20-23.
[36] F. Wang, H. Gong, X. Chen, C. Chen, Folding to curved surfaces: A generalized design method and mechanics of origami-based cylindrical structures, Sci. Rep. 6 (1) (2016) 33312, http://dx.doi.org/10.1038/srep33312.
[37] S. Kamrava, D. Mousanezhad, S.M. Felton, A. Vaziri, Programmable origami strings, Adv. Mater. Technol. 3 (3) (2018) 1700276, http://dx.doi.org/10.1002/admt.201700276.
[38] T.A. Evans, R.J. Lang, S.P. Magleby, L.L. Howell, Rigidly foldable origami twists, in: K. Miura, T. Kawasaki, T. Tachi, R. Uehara, R.J. Lang, P. Wang-Iverson (Eds.), Origami: Proceedings of the 6th International Meeting on Origami in Science, Mathematics, and Education, I. Mathematics, American Mathematical Society, 2015, pp. 119-130.
[39] T.A. Evans, R.J. Lang, S.P. Magleby, L.L. Howell, Rigidly foldable origami gadgets and tessellations, R. Soc. Open Sci. 2 (9) (2015) 150067, http://dx.doi.org/10.1098/rsos.150067.
[40] T. Tachi, T.C. Hull, Self-foldability of rigid origami, J. Mech. Robot. 9 (2) (2017) 021008, http://dx.doi.org/10.1115/1.4035558.
[41] T.C. Hull, Origametry: Mathematical Methods in Paper Folding, Cambridge University Press, Cambridge, UK, 2020.

[42] R. Foschi, T.C. Hull, J.S. Ku, Explicit kinematic equations for degree-4 rigid origami vertices, Euclidean and non-Euclidean, Phys. Rev. E 106 (5) (2022) 055001, http://dx.doi.org/10.1103/PhysRevE.106.055001.
[43] Z. He, K. Hayakawa, M. Ohsaki, Real and complexified configuration spaces for spherical 4-bar linkages, 2023, arXiv preprint arXiv:2308.03765.
[44] I. Izmestiev, Classification of flexible Kokotsakis polyhedra with quadrangular base, Int. Math. Res. Not. IMRN 2017 (3) (2017) 715-808, http://dx.doi.org/10.1093/imrn/rnw055.
[45] M. Kilian, G. Nawratil, M. Raffaelli, A. Rasoulzadeh, K. Sharifmoghaddam, Interactive design of discrete voss nets and simulation of their rigid foldings, Comput. Aided Geom. Design 111 (2024) 102346, http://dx.doi.org/10.1016/j.caged.2024.102346.
[46] R.J. Lang, K.A. Tolman, E.B. Crampton, S.P. Magleby, L.L. Howell, A review of thickness-accommodation techniques in origami-inspired engineering, Appl. Mech. Rev. 70 (1) (2018) 010805, http://dx.doi.org/10.1115/1.4039314.
[47] Y. Chen, R. Peng, Z. You, Origami of thick panels, Science 349 (6246) (2015) 396-400, http://dx.doi.org/10.1126/science.aab2870.
[48] T. Tachi, Rigid-foldable thick origami, in: P. Wang-Iverson, R.J. Lang, M. Yim (Eds.), Origami: Proceedings of the 5th International Meeting on Origami in Science, Mathematics, and Education, CRC Press, 2011, pp. 253-264, http://dx.doi.org/10.1201/b10971.
[49] B.G.g. Chen, N. Upadhyaya, V. Vitelli, Nonlinear conduction via solitons in a topological mechanical insulator, Proc. Natl. Acad. Sci. 111 (36) (2014) 13004-13009.
[50] J.Z. Kim, Z. Lu, A.S. Blevins, D.S. Bassett, Nonlinear dynamics and chaos in conformational changes of mechanical metamaterials, Phys. Rev. X 12 (1) (2022) 011042, http://dx.doi.org/10.1103/PhysRevX.12.011042.
[51] J.P. Duncan, J.L. Duncan, Folded developables, Proc. R. Soc. A 383 (1784) (1982) 191-205, http://dx.doi.org/10.1098/rspa.1982.0126.
[52] E.D. Demaine, M.L. Demaine, D.A. Huffman, D. Koschiz, T. Tachi, Characterization of curved creases and rulings: Design and analysis of lens tessellations, in: K. Miura, T. Kawasaki, T. Tachi, R. Uehara, R.J. Lang, P. Wang-Iverson (Eds.), Origami: Proceedings of the 6th International Meeting on Origami in Science, Mathematics, and Education, I. Mathematics, 2015, pp. 97-108.
[53] E.D. Demaine, M.L. Demaine, D.A. Huffman, D. Koschitz, T. Tachi, Conic crease patterns with reflecting rule lines, in: R.J. Lang, M. Bolitho, Z. You (Eds.), Origami: Proceedings of the 7th International Meeting on Origami in Science, Mathematics, and Education, vol. 2, Tarquin, St Albans, UK, 2018, pp. 573-589.
[54] D. Fuchs, S. Tabachnikov, More on paperfolding, Am. Math. Mon. 106 (1) (1999) 27-35, http://dx.doi.org/10.1080/00029890.1999.12005003.
[55] K. Mundilova, Gluing and Creasing Paper along Curves: Computational Methods for Analysis and Design (Ph.D. thesis), Massachusetts Institute of Technology, 2024.
[56] Y. Watanabe, J. Mitani, Modelling the folding motions of a curved fold, in: R.J. Lang, M. Bolitho, Z. You (Eds.), Origami: Proceedings of the 7th International Meeting on Origami in Science, Mathematics, and Education, vol. 4, Tarquin, St Albans, UK, 2018, pp. 1135-1150.
[57] M.A. Dias, L.H. Dudte, L. Mahadevan, C.D. Santangelo, Geometric mechanics of curved crease origami, Phys. Rev. Lett. 109 (11) (2012) 114301, http://dx.doi.org/10.1103/PhysRevLett.109.114301.
[58] F. Feng, K. Dradrach, M. Zmyslony, M. Barnes, J.S. Biggins, Geometry, mechanics and actuation of intrinsically curved folds, Soft Matter 20 (9) (2024) 2132-2140, http://dx.doi.org/10.1039/d3sm01584.
