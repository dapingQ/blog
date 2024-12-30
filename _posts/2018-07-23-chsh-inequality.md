---
layout: post
title:  A short note on CHSH inequality
tag: 
  - Bell's theorem
  - CHSH inequality
categories: quantum
comments: true
date: 2018-07-23
---


# EPR paradox and Bell's theorem

In 1935, Einstein, Podolsky, and Rosen presented a paradox
against the quantum mechanics of that time. In the abstract, they wrote
<!-- more -->

> In quantum mechanics in the case of two physical quantities described
> by non-commuting operators, the knowledge of one precludes the
> knowledge of the other. Then either (1) the description of reality
> given by the wave function in quantum mechanics is not complete or (2)
> these two quantities cannot have simultaneous reality.

Here, they concluded that *the incompleteness of quantum mechanics
arises from the violation of the physics reality, in particular, to the
non-commuting operators.* A widely used alternative explanation is that,
due to the uncertainty principle, for two particles sharing a same
quantum state, they should always be exchanging some information to keep
such a violation, even separated in a far distance. Furthermore, they
concluded that the quantum mechanics should be supplemented by some
"hidden variables".

# Bell's theorem

After the EPR paper, in 1964, John Stewart Bell formulated a mathematical theorem *shown to be incompatible with the statistical prediction of quantum mechanics*, which later named as Bell' theorem. If we presuppose the hidden variables $ \lambda$, with a possibility distribution $\rho(\lambda)$, consider an ensemble of correlated pairs of particles separated from the same source in the past and moving free in opposite direction. For example, the spin one-half in the singlet.

If we have the suitable apparatus to measure the pairs at side A and side B with the adjustable parameters a and b. Due to the hidden theory, measurement results should be $A(a,\lambda)$ and $B(b,\lambda)$. For the two-level system, we set the measurement channels as +1 and -1. For example, the results in the Stern-Gerlach experiment only have two choices, spin-up and spin-down. That is to say, $A(a,\lambda)=\pm 1$ and $B(b,\lambda)=\pm 1$.

Define the correlation function,

$$
P(a,b) = \int d\lambda \rho(\lambda) A(a,\lambda) B(b,\lambda)
$$

Then Bell gave a simple inequality requiring that

$$
| P(a,b) - P(a,c) | \leq 1 + P(b,c)
$$

However, since Bell himself denied the unrealistic relation between the side A and side B and later proved the violation of above inequality is impossible and commented

> there must be a mechanism whereby the setting of the one measuring
  device can influence the reading of another instrument, however
  remote. Moreover, the signal involved must propagate instantaneously,
  so that a theory could not be Lorentz invariant.

Despite of Bell's ironical remarks on quantum mechanics, the Bell's theorem is successful to realize a decisive experimental test of the hidden variable. Here, a generalization of Bell's theorem is derived. Firstly, note the hidden variable space as $\Gamma$, thus

<div>
$$
\begin{split}
    &| P(a,b) - P(a,c)| 
    \leq \int_{\Gamma} \rho(\lambda) d\lambda | A(a,\lambda) B(b,\lambda) - A(a,\lambda) B(c,\lambda) | \\
    &= \int_{\Gamma} \rho(\lambda) d\lambda | A(a,\lambda) B(b,\lambda)|[1 - B(b,\lambda) B(c,\lambda)]
    = 1 - \int_{\Gamma} \rho(\lambda) d\lambda B(b,\lambda) B(c,\lambda)
\end{split}
$$
</div>

Therefore, we discuss the relation between the result $A(a, \lambda), B(b, \lambda)$. Suppose some $d$ and b satisfy $P(d,b)=1-\delta$ and $\delta$ is close to zero but not equal. 
And this is different from Bell's unrealistic restriction, $\delta=0$. 
Moreover, dividing the $\Gamma$ space into $\Gamma_\pm$ such that $\Gamma_\pm=[ \lambda | A(d,\lambda)=\pm B(b,\lambda)  ]$, thus the results of twos are in positive correlation or in negative correlation.

<div>
$$
\begin{split}
        \int_{\Gamma} \rho(\lambda) d\lambda B(b,\lambda) B(c,\lambda)
    &= \int_{\Gamma} \rho(\lambda) d\lambda A(d,\lambda) B(c,\lambda)
    - 2 \int_{\Gamma_{-}} \rho(\lambda) d\lambda A(d,\lambda) B(c,\lambda) \\
    &\leq P(d,c) - 2 \int_{\Gamma_{-}} \rho(\lambda) d\lambda |A(d,\lambda) B(c,\lambda)|
    = P(d,c) - \delta
    \end{split}
$$
</div>
therefore, from Eq. and Eq.

$$
|P(a,b)-P(a,c)| \leq 2-P(d,b)-P(d,c)
$$

This the original CHSH inequality, which is a little from the modern version, here we give a short derivation. Let $d\rightarrow -d$ and $\Gamma_{-}\rightarrow\Gamma_{+}$, we can get

$$
|P(a,b)-P(a,c)| \leq 2 + P(d,b) + P(d,c)
$$

From Eq. and Eq., hence 

<div>
$$
\begin{split}
    & |P(a,b)-P(a,c)| \leq 2 - |P(d,b) + P(d,c)| \\
    & |P(d,b) - P(d,c)| + |P(a,b) + P(a,c)| \leq 2 \\
    & |P(d,b) - P(d,c) + P(a,b) + P(a,c)| \leq 2
\end{split}
$$
</div>

# Experimental proposal

For any term in Eq., let $ P(a,b) $ be example,
$$
P(a,b)=w [A(a)_+,B(b)_+]+w [A(a)_-,B(b)_-]-w [A(a)_+,B(b)_-]-w [A(a)_-,B(b)_+]
$$

here, $\pm$ means the two basis of measurement apparatus and includes the four choices of parallel or perpendicular polarizers.

In conclusion, to test if the Bell's inequality can be violated, we only need to change the polarizers and count the correlation rate.

However, the detectors of all the real physics system is not perfect and uniform. Firstly, the detector efficiency is not normalized. Secondly, the efficiency is not same for different channels. To demonstrate a loop-free Bell inequality experiments, we should take the efficiency of detectors into account. Furthermore, we may evaluate the efficiency threshold for all the detectors involved in the experiments. Later proved in this paper and also widely used in related experiments,

$$
\sqrt{2} F + 1 > 2\eta/(\epsilon_M+\epsilon_m)
$$

where $\epsilon_m,\epsilon_M$ are the efficiency of the polarizers set parallel or perpendicular and $\eta$ is the detector efficiency. The function $F$ is the visibility of different angles. In the ideal case, if only $F>\sqrt{2}/2$, there is a violation of Bell's inequality.

Another problem comes with localization. If the hidden variable only affects the pairs in the past, to make the apparatus separated far away enough, usually in space-like separation, which also challenges the experimental setups.

