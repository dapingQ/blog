---
layout: post
title: To Build A Modern Latex Template for Scientific Writing
categories: programming
tag: 
  - latex
date: 2019-02-05
toc: false
---


# Modern features

- `xelatex` complier
- magic commands
- biber engien for UTF-8 support, usually to handle the software generated `.bib` file

# Recommended packages

- `tikz` & `pgfplots` for programmable pics
- `physics` for physics formular, vectors, tensor etc.
- `mhchem` for chemical formular and equations
- `siunitx` for SI units

# To use Overleaf or not

[Overleaf](https://www.overleaf.com/) is so popular that even no one now uses the offline compiler. 
Despite that the full installation like `TeXlive` costs at least several GB, it always takes you some effort to customize common TeX editors like texstudio. So the best for a Tex beginner is doubtless Overleaf.
But the drawbacks of overleaf are also oblivious. 
Its file system doesn't allow you to export any file automatically.
For example, exporting tikz image to `.svg` or `.svg` to `.pdf` while using `svg` package.

You can download my template [here]({{ site.url }}{{ site.baseurl }}/assets/files/tex_temp/tex_temp.tex ).

