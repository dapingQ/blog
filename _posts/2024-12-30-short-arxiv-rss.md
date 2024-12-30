---
layout: post
title: To Build A Modern Latex Template for Scientific Writing
category: programming
tag: 
  - latex
date: 2019-02-05
toc: false
---

Since Arxiv does update every replacement on its RSS feed, it is quite annoying to skip those in any RSS reader.
In this post, I will show you how to filter out these replacements using a simple shell script and to update on your github page every day.
Here is the repositoy on github, [short_arxiv_rss](https://github.com/dapingQ/short_arxiv_rss).

- Fork and clone to your local client or a VPS
- Set the page option in repository setting
- Install `xmlstarlet` based on your operating system
- Edit the script and deploy as you want

**Optional**

You can all set the script to run every day by crontab
- Run `crontab -e`
- Add the following adn save.
`0 8 * * * <YOUR_REPO>/ShortArxivRSS.sh  <YOUR_REPO>/ShortArxivRSS.log 2>&1 `
