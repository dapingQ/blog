---
layout: post
date: 2017-11-20
title: Memos on Python Scientific Computing 
tag: 
  - python
categories: programming
---

A cheating sheet on Scipy, etc.

# iPython

- ?+cmd = help(), help command
- %run _python_cmd_, run command externally
- %paste & %cpaste, block paste
- %timeit
- %reset
- %quickref / %magic, find all the magic cmd
- %hist, show cmd history
- %debug / %pdb, debug the code
- %xdel, del objects
- %logstart

## Qt and Pylab
~~$ ipython qtconsole --pylab=inline # old feature~~
$ ipython --pylab
requires `matplotlib` and `PyQt` for inline ploting

## shortcuts of command history

- `Ctrl + P` forward matching
- `Ctrl + P` backward matching
- `Ctrl + P` readline
- `_iX`: input in line X
- `_X` : output in line X

## Interacting

- %cd / %pwd ...
- %dirs / %alias
- !cmd

## Bookmarks

- %bookmark markname DIRS
- %bookmark -l

## Debug

`````````````````````````````````````
    %debug
    u/d
    %pdb iX (X is variable)
`````````````````````````````````````

## Tricks

- reload after import (dreload: deep reload)
- import this 


# Numpy

## Object

1. based on ndarrry
2. basicly, type in np is float64

- new: array('list')/asarray('output')
- zeros/ones(length): new a list of 0/1
- zeros/ones_like(list): new a list of 0/1 like given list
- eye/identity(n): diagonal matrix
- arange(length): new a number list

## Type

dtype: variabel type

`astype(np.newtype)` changing the type to **newtype**

## Para

- ndim: dimension of array
- shape

## Slice

chaning of slice of an array will be *broadcast* 

for copying, using `array[:].copy()`

index and slice, `array[:,:,:]`

x[1,2,...] is equivalent to x[1,2,:,:,:],
x[...,3] to x[:,:,:,:,3] and
x[4,...,5,:] to x[4,:,:,5,:]


## Boolean index

1. array ==/!=/ value giving a boolean list with the same length, here the express `array |/& value` is used as boolean index.

2. array(boolean_list) selecting the true element and broadcasting.

`data[data<0] = 0` # changing the negative elements to 0s

## Fancy index

a([i:],[j:],[]...)

## Function

- .reshape
- .T

- ufunc
  - a
- 2ufunc

`b = np.fromfunction(f,(5,4),dtype=int)`

## Shape

## Stack

- np.vstack/hstack
- newaxis
- np.r_

## Split

1. No copy
2. Swallow copy
3. Deep copy

TBD