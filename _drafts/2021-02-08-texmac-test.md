---
layout: post
title: TeXmacs
tag: [latex, Texmacs]
# comments: true
# toc: false
date: 2021-02-08
---

<p>
    &#x5047;&#x8BBE;&#x7A7A;&#x95F4;<font face="Zapf Chancery">F</font>&#xFF0C;&#x5B9A;&#x4E49;&#x4E3A;&#x51B3;&#x7B56;&#x51FD;&#x6570;&#x7684;&#x96C6;&#x5408;
</p>
<center>
    <font face="Zapf Chancery">F</font> = {<var>f</var>|<var>Y</var> =
    <var>f</var>(<var>X</var>)}
</center>
<p>
    &#x5176;&#x4E2D;&#xFF0C;<i><var>X</var><var>&isin;</var><font face="Zapf Chancery">X</font>,<var>Y</var><var>&isin;</var><font
    face="Zapf Chancery">Y</font></i>.&#x6240;&#x4EE5;&#x5B9A;&#x4E49;&#x51FD;&#x6570;&#x65CF;
</p>
<center>
    <font face="Zapf Chancery">F</font> = {<var>f</var>|<var>Y</var> =
    <var>f</var><sub><var>&theta;</var></sub>(<var>X</var>),<var>&theta;</var><var>&isin;</var><b><var>R</var></b><sup><var>n</var></sup>}
</center>
<p>
    &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x4E3A;&#x6709;&#x4E00;&#x7CFB;&#x5217;&#x51FD;&#x6570;<var>f</var>&#x6784;&#x6210;&#xFF0C;&#x5176;&#x4E2D;&#x53C2;&#x6570;<var>f</var>&#x7531;&#x53C2;&#x6570;<var>&theta;</var>&#x51B3;&#x5B9A;&#xFF0C;&#x53C2;&#x6570;&#x4E2A;&#x6570;&#x4E3A;<var>n</var>.
</p>
<p>
    &#x4E5F;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x4E3A;&#x6761;&#x4EF6;&#x6982;&#x7387;&#x7684;&#x96C6;&#x5408;
</p>
<center>
    <font face="Zapf Chancery">F</font> =
    {<var>P</var>|<var>P</var><sub><var>&theta;</var></sub>(<var>Y</var>|<var>X</var>),<var>&theta;</var><var>&isin;</var><b><var>R</var></b><sup><var>n</var></sup>}
</center>
<p>
    <var>X</var> <var>Y</var>&#x4E3A;&#x72EC;&#x7ACB;&#x53D8;&#x91CF;
</p>
<h2 id="auto-1">1<span style="margin-left: 1em"></span>Loss function<span style="margin-left: 1em"></span></h2>
<ul>
    <li>
    <p>
        0-1 loss function
    </p>
    <center>
        <var>L</var>
        (
        <var>Y</var>
        ,
        <var>f</var>
        (
        <var>X</var>
        )) = {
        <table style="display: inline-table; vertical-align: middle">
        <tbody><tr>
            <td>1,<var>Y</var><var>&ne;</var><var>f</var>(<var>X</var>)</td>
        </tr><tr>
            <td>0,<var>Y</var> = <var>f</var>(<var>X</var>)</td>
        </tr></tbody>
        </table>
        .
    </center>
    </li>
</ul>
<ul>
    <li>
    <p>
        quadratic loss function
    </p>
    <center>
        <var>L</var>(<var>Y</var>,<var>f</var>(<var>X</var>)) =
        (<var>Y</var> - <var>f</var>(<var>X</var>))<sup>2</sup>
    </center>
    </li>
</ul>
<ul>
    <li>
    <p>
        absolute loss function
    </p>
    <center>
        <var>L</var>(<var>Y</var>,<var>f</var>(<var>X</var>)) =
        |<var>Y</var> - <var>f</var>(<var>X</var>)|
    </center>
    </li>
</ul>
<ul>
    <li>
    <p>
        logarithmic loss function/log-likelihood loss function
    </p>
    <center>
        <var>L</var>(<var>Y</var>,<var>f</var>(<var>X</var>)) =  -
        logP(<var>Y</var>|<var>X</var>)
    </center>
    </li>
</ul>

<p>
    <img src="ML1-1.png" style="margin-left: -0.0248242424242424em; margin-bottom: 0em; margin-right: -0.0248242424242449em; margin-top: 0em; vertical-align: -13.1939878787879em; height: 26.3879757575758em"></img>
</p>

<style>
body {
    font-family: \5C0F\7C73\5170\4EAD,Helvetica Neue,Helvetica,Arial,PingFang SC,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif!important}
</style>