---
layout: post
tag: 
  - python
  - data
comments: true
date: 2017-11-20
title: Notes of Python Toolkits 
mathjax: true
---

## iPython

$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$

- ?+cmd, just like help()
- %run python_cmd
- %paste & %cpaste
- shortcuts (like Emacs)

<!-- more -->
### Magic commands

we have a $1+1=2$ and end.

- %timeit 
- %reset
- %quickref / %magic
- %hist
- %debug / %pdb
- %xdel: del objects	
- %logstart

### Qt and Pylab

  ~~$ ipython qtconsole --pylab=inline # old feature~~

	$ ipython --pylab

require matplotlib and PyQt for inline images ploting

### Command History

- `Ctrl + P` forward matching
- `Ctrl + P` backward matching
- `Ctrl + P` readline

- `_iX`: input in line X
- `_X` : output in line X

### Interacting

- %cd / %pwd ...
- %dirs / %alias
- !cmd

### Bookmarks

- %bookmark markname DIRS
- %bookmark -l

### Debug

```python
    %debug
    u/d
    %pdb iX (X is variable)
```

### Tricks

- reload after import (dreload: deep reload)
- import this 


## Numpy

### Object

1. based on ndarrry
2. basicly, type in np is float64

- new: array('list')/asarray('output')
- zeros/ones(length): new a list of 0/1
- zeros/ones_like(list): new a list of 0/1 like given list
- eye/identity(n): diagonal matrix
- arange(length): new a number list

### Type

dtype: variabel type

`astype(np.newtype)` changing the type to **newtype**

### Para

- ndim: dimension of array
- shape

### Slice

chaning of slice of an array will be *broadcast* 

for copying, using `array[:].copy()`

index and slice, `array[:,:,:]`

x[1,2,...] is equivalent to x[1,2,:,:,:],
x[...,3] to x[:,:,:,:,3] and
x[4,...,5,:] to x[4,:,:,5,:]


#### Boolean index

1. array ==/!=/ value giving a boolean list with the same length, here the express `array |/& value` is used as boolean index.

2. array(boolean_list) selecting the true element and broadcasting.

`data[data<0] = 0` # changing the negative elements to 0s

#### Fancy index

a([i:],[j:],[]...)

### Function

- .reshape
- .T

- ufunc
  - a
- 2ufunc

`b = np.fromfunction(f,(5,4),dtype=int)`

### Shape

#### Stack

- np.vstack/hstack
- newaxis
- np.r_

#### Split

1. No copy
2. Swallow copy
3. Deep copy

### Linear Algebra