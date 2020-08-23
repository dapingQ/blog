---
layout: post
title: Dispersion of the planar waveguide
tag: 
  - waveguide
comments: true
date: 2018-06-25
---

<!-- EMF propogation in homogeneous media -->

In any propagation wave functions, the propagation factor can also be set as on the z direction. Thus we assume the electric field is given,
<!-- more -->

\begin{equation} \mathbf{E}=E(x,y)\exp{i \beta z} \end{equation}

where $A(x,y)$ is field distribution on the propogation plane and $\exp{i \beta z}$ is propogation factor.

Hence, all the components of EMF oscilate on the z direction at a wave vector $\beta$. 
Then simple equations of EMF components can be derived from the Maxwell Equations in the homgeneous media.

$$
\begin{eqnarray}
    E_x &=  \frac{i}{k_c^2}(\beta \frac{\partial E_z}{\partial x} + \omega \mu \frac{\partial H_z}{\partial y}) \\
    E_y &=  \frac{i}{k_c^2}(\beta \frac{\partial E_z}{\partial y} - \omega \mu \frac{\partial H_z}{\partial y}) \\
    H_x &=  \frac{i}{k_c^2}(\beta \frac{\partial H_z}{\partial x} - \omega \mu \frac{\partial E_z}{\partial y}) \\
    H_y &=  \frac{i}{k_c^2}(\beta \frac{\partial H_z}{\partial y} + \omega \mu \frac{\partial E_z}{\partial x}) 
\end{eqnarray}
$$
thus, 

where $ k_c^2 = n^2 k^2 - \beta ^2 $, which is defined as *cut-off wave vector*.

Here we can see, there are two independent solutions to the above equation, where $E_z$ and $H_z$ are two independent variables. In result, these two modes are named *TE* and *TM* modes. Separately, only $E_z$ or $H_z$ doesn't equal to zero.


# Boundary condition

In the no-charged and non-current surface, the boundary condition on two different media can be listed as

$$
\begin{eqnarray*}
  \mathbf{n_{21}} \cdotp (\mathbf{D_2} - \mathbf{D_1}) &= 0 \\
  \mathbf{n_{21}} \times (\mathbf{E_2} - \mathbf{E_1}) &= 0 \\
  \mathbf{n_{21}} \cdotp (\mathbf{B_2} - \mathbf{B_1}) &= 0 \\
  \mathbf{n_{21}} \times (\mathbf{H_2} - \mathbf{H_1}) &= 0 
\end{eqnarray*}
$$

Set the normal direction of the surface as the reference, 
rewrite,
<br>

$$
\begin{eqnarray}
  \varepsilon_1 E_{1, \bot} &= \varepsilon_2 E_{2, \bot} \\
  \mathbf{E}_{1, \|} &= \mathbf{E}_{2, \|} \\ 
  \mu_1 H_{1, \bot} &= \mu_2 H_{2, \bot} \\
  \mathbf{H}_{1, \|} &= \mathbf{H}_{2, \|} 
\end{eqnarray}
$$

<br>

where the $\perp, \parallel$ mean the normal and tangential components of EMF.

e.x, if we study the xz surface (y direction is the normal vector) of the TE mode, for $E_z = 0$,

$$
\begin{eqnarray}
\varepsilon_1 E_{1,y}=\varepsilon_2 E_{2,y} , E_{1,x}=E_{2,x} , E_{1,z}=E_{2,z} =0 \\
\mu_1 H_{1,y}=\mu_2 H_{2,y} , H_{1,x}=H_{2,x} , H_{1,z}=H_{2,z} \neq 0 
\end{eqnarray}
$$

Furthermore, the solution of either TE or TE modes can be transfer as 

\begin{equation}
\nabla^2_{x,y} ~A + n^2 k^2 - \beta^2 A = 0 
\end{equation}

and where n is the refractive index of material and $\beta$ is the propagation constant.


# Modes of Rectangular Waveguides

By using Marcatili model, assuming the refractive index of four corners are the same, $n_c$, *see. Marcatili, Bell Syst. Tech. J. 48, 2071 (1969)*, the rectangular waveguides can be calculated like two planar waveguides. Appromaxiation includes two simplifications,

1. Ignore boundary conditions associated with hatched regions. 
2. Assume core-cladding index differences are small on all sides.

e.x, the EMF of TE modes can be written,
$$
\begin{eqnarray}
\mathbf{E} =(E_x, E_y, 0) \\
\mathbf{H} =(H_x, H_y, H_z) \\
\mathbf{k} =(k_x, k_y, k_z)
\end{eqnarray}
$$
devided as the superposition of two EMF, like

$$
\begin{eqnarray}
\mathbf{E_1}=(E_x, 0, 0) 
\mathbf{E_2}=(0, E_y, 0) \\
\mathbf{H_1}=(0, H_{y}, H_{1z}) 
\mathbf{H_2}=(H_{x}, 0, H_{2z}) \\
\mathbf{k_1}=(0, k_{y}, k_{1z}) 
\mathbf{k_2}=(k_{x}, 0, k_{2z})
\end{eqnarray}
$$


which can satisfy the transverse field condition and energy conservation simultaneously. Hence, the solution truns into solving the planar waveguide field distribution.

In a passive field, like silicon waveguide, **there is nothing more complex than the Helmholtz equantion in the vector field,** where the eigen-solution only depends on the boundary condition.

From the Maxwell equations, all the components can be represented by z-component. Finally, the problem ends up into **only one Helmholtz equation with two groups of boundary conditions**, on xz surface and yz surface.

to be added

## TE modes eigenvalue equation

\begin{equation}
2pd=m\pi + \tan^{-1}(\kappa_1/p) + \tan^{-1}(\kappa_2/p)
\end{equation}

$d$ is half of the thickness and $p$ is the 

The latter two terms are phase shift on the boundary.

For symmetric waveguides

\begin{equation}
\kappa = p \tan(pd - m\pi/2)
\end{equation}

Define numerical $NA=\sqrt{n_{co}^2-n_{cld}^2}$, 

$v=d\sqrt{p^2+\kappa^2}=k_0 d \sqrt{n_{co}^2-n_{cld}^2}$
is constant and $u = pd$ ,

\begin{equation}
\sqrt{v^2-u^2}=u\tan(u-m\pi/2)
\end{equation}


## TM modes eigenvalue equation

\begin{equation}
2pd=m\pi + \tan^{-1}(\frac{n_c^2\kappa_1}{n_1^2p}) + \tan^{-1}(\frac{n_c^2 \kappa_2}{n_2^2p})
\end{equation}

The latter two terms are phase shift on the boundary.
