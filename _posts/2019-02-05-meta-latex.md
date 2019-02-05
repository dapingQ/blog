---
layout: post
title: A Latex Meta
tag: [latex]
comments: true
date: 2019-02-05
---


```
\documentclass[a4paper,10pt]{report}
% --------------------------------------------------------
% essential
\usepackage{tikz,pgfplots}
\usepackage{xcolor,graphicx}
\usepackage{subcaption}
% --------------------------------------------------------
% fullpage, change the margin
\usepackage{fullpage} % note the compatability with fancyhdr
% \usepackage{geometry}
	% \geometry{
	% a4paper,
	% margin=2in}
% --------------------------------------------------------
% for physics and others
\usepackage{physics}
\usepackage[version=4]{mhchem} % chemical formula, \ce{H2O}
\usepackage{siunitx} % SI units
% --------------------------------------------------------
% optional 
\usepackage{sectsty} % change section style
	\sectionfont{\noindent\textsc}
\usepackage{esint} % special integral
% \usepackage{fancyhdr} % header and footer
% 	\pagestyle{fancy}
% 	\fancyhf{}
% 	\lhead{ \fancyplain{}{Author Name} }
% 	\rhead{ \fancyplain{}{\today} }
% 	\rfoot{ \fancyplain{}{\thepage} }
\usepackage{paralist}
\usepackage{booktabs}
% --------------------------------------------------------
% font
% \usepackage{fontspec}
% \setmainfont{Calibri}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
% \usepackage{tgbonum}
% --------------------------------------------------------
% Tex !
\begin{document}
Alles Gute.
\end{document}

```
