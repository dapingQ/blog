---
layout: post
date: 2018-07-27
title: A Quantum Computation Roadmap by the DiVincenzo's Criteria
categories: quantum_information
tag: 
  - quantum computation
  - divincenzo criteria
comments: true
---

The Divincenzo's criteria is a list of necessary request for constructing a quantum computer, which is proposed by Professor David P.DiVincenzo in 2000[^protocol]. During the last nearly two decades, various quantum candidates have being developed or put forward, meet the criteria more or less.
<!-- more -->

The DiVincenzo criteria consist of 5+2 conditions that an experimental setup must satisfy in order to successfully implement quantum algorithms.

1. A scalable physical system with well characterized qubits.
2. The ability to initialize the state of the qubits to a simple fiducial state.
3. Long relevant decoherence times.
4. A “universal” set of quantum gates.
5. A qubit-specific measurement capability.

The additional 2 conditions are for quantum network.

6. The ability to interconvert stationary and flying qubits.
7. The ability to faithfully transmit flying qubits between specified locations.

Here a summary is drawn from the roadmap in 2002[^roadmap], which gives comparison bwtween all the popular quantum computation candidates.

|candidates		| #1     		|#2     		|#3     		|#4     		|#5     		|#6     		|#7     		|
|---------    	| -------- 		| -------- 		| -------- 		| -------- 		| -------- 		| -------- 		| -------- 		|
|Trapped ions	|$\star$	|$\bullet$		|$\star$	|$\bullet$		|$\bullet$		|$\star$	|$\star$	|
|Neutral atoms	|$\star$	|$\bullet$		|$\star$	|$\star$	|$\star$	|$\star$	|$\star$	|
|Photonics		|$\bullet$		|$\star$	|$\bullet$		|$\star$	|$\star$	|$\star$	|$\bullet$		|
|Flux qubit 	|$\star$	|$\bullet$		|$\star$	|$\star$	|$\star$	|$\triangle$	|$\triangle$	|
|Cavity QED		|$\triangle$	|$\bullet$		|$\star$	|$\bullet$		|$\bullet$		|$\star$	|$\star$	|
|NMR			|$\triangle$	|$\star$	|$\star$	|$\bullet$		|$\star$	|$\triangle$	|$\triangle$	|
|Silicon		|$\star$	|$\star$	|$\star$	|$\star$	|$\star$	|$\triangle$	|$\triangle$	|

> $\triangle$: no protocol
> $\star$: theoretically possible 
> $\bullet$: realized and verified by experiments

We can see the photonic realization among all the physics system  is still possible to demonstrate a quantum computer. But as we all know, it is hard to make photon interact with other photons, i.e, it is still desirable to introduce new mechanics beyond current post-selection protocol.

[^roadmap]: Quantum Computation Roadmap, http://qist.lanl.gov/qcomp_map.shtml
[^protocol]: DiVincenzo, D. P. (2000), The Physical Implementation of Quantum Computation. Fortschr. Phys., 48: 771-783. doi:10.1002/1521-3978(200009)48:9/11<771::AID-PROP771>3.0.CO;2-E