---
layout: post
title: To Build A Modern Latex Template for Scientific Writing
tag: 
  - latex
date: 2019-02-05
toc: false
---

# Features
- `xelatex` complier
- magic commands
- biber engien for UTF-8 support, usually to handle the software generated `.bib` file

# Recommended packages

- `tikz` & `pgfplots` for organized pics
- `physics` for physics formular, vectors, tensor etc.
- `mhchem` for chemical formular and equations

# To use Overleaf or not

[Overleaf](https://www.overleaf.com/) is so popular that even no one uses the office compiler right one. Despite that the full installation like Texlive costs at least 3GB, it always takes some time when you need to use common TeX editor like texstudio. So the best for a Tex beginner is doubtless Overleaf.
But the drawbacks of overleaf are also oblivious. 
Its file system doesn't allow to export anyfile automatically. For example, exporting tikz image to `.svg` or `.svg` to `.pdf`. 

<div>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Python linenumbers

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
\usepackage{lipsum}

% --------------------------------------------------------
% Tex !
\begin{document}
\lispsum
\lispsum
\end{document}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
</div>

<!-- You can download from [here]({{ site.url }}/assets/files/tex_temp/tex_temp.tex ). -->

