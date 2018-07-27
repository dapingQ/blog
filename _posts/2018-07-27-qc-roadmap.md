---
layout: post
date: 2018-07-27
title: A Quantum Computation Roadmap by the DiVincenzo's Criteria
tag: 
  - quantum computation
comments: true
---

The Divincenzo's criteria is a list of necessary request for constructing a quantum computer which is proposed by Professor David P.DiVincenzo in 2000. During the last nearly two decades, various quantum candidates have being developed or put forward, meet the criteria more or less.

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
|Trapped ions	|$\blacksquare$	|$\bullet$		|$\blacksquare$	|$\bullet$		|$\bullet$		|$\blacksquare$	|$\blacksquare$	|
|Neutral atoms	|$\blacksquare$	|$\bullet$		|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|
|Photonics		|$\bullet$		|$\blacksquare$	|$\bullet$		|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\bullet$		|
|Flux qubit 	|$\blacksquare$	|$\bullet$		|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\triangle$	|$\triangle$	|
|Cavity QED		|$\triangle$	|$\bullet$		|$\blacksquare$	|$\bullet$		|$\bullet$		|$\blacksquare$	|$\blacksquare$	|
|NMR			|$\triangle$	|$\blacksquare$	|$\blacksquare$	|$\bullet$		|$\blacksquare$	|$\triangle$	|$\triangle$	|
|Silicon		|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\blacksquare$	|$\triangle$	|$\triangle$	|


> $\triangle$: no protocol
> $\blacksquare$: theoretically possible 
> $\bullet$: realized and verified by experiments

We can see the photonical realization is still possible to demonstrate a quantum computer. But as we all know, it is hard to make photon interact with other photons, i.e, it is still desirable to introduce new mechanics beyond current post-selection protocol.

[^roadmap]: Quantum Computation Roadmap, http://qist.lanl.gov/qcomp_map.shtml