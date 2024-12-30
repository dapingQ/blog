---
layout: post
date: 2018-10-29
title: Simple python online PDF crawler
category: programming
tag:
  - python
toc: false
---

This is a script I used quite a lot to catch PDF files online, usually lecture notes or open-free texbook chapters.

<br>


<div>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Python linenumbers
from urllib import request

base = 'https://siepic.ubc.ca/sites/siepic.ubc.ca/files/workshops/'

for i in range(1,12):
	filename = 'EECE403_Lecture%s.pdf' % i
	url = base + filename
	#print(filename)
	try:
		res = request.urlopen(url).read()
		file = open(filename, 'wb')
		file.write(res)
		file.close()
		print('The PDF' + filename + 'is downloaded.')
	except:
		print("No access...")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</div>


