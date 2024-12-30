---
layout: post
title: To Build A Modern Latex Template for Scientific Writing
category: programming
tag: 
  - latex
date: 2019-02-05
toc: false
---

Arxiv original RSS feed is convenient. But since Arxiv does update every replacement on its RSS feed and sometimes it is quite annoying to skip those entries in any RSS reader or Zotero, if you rely not only on the website of ArXiv.
In this post, it is about how to filter out these replacements using a simple shell script and to update on your [GitHub Pages](https://pages.github.com/) every day.
Then one can register the specific RSS feed wherever you like.

Here is the repository on GitHub, [short_arxiv_rss](https://github.com/dapingQ/short_arxiv_rss).
On the readme, one can find steps like,

- Fork and clone to your local client or a VPS
- Set the page option in repository setting
- Install `xmlstarlet` based on your operating system
- Edit the script and deploy as you want

(Optional)

You can also set the script to run every day by crontab
- Run `crontab -e`
- Add the following and save.
`0 8 * * * <YOUR_REPO>/ShortArxivRSS.sh  <YOUR_REPO>/ShortArxivRSS.log 2>&1 `
