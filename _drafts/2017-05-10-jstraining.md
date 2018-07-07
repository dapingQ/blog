---
layout: post
tag:
  - javascript
title: JStraining 
comments: true
date: 2017-05-10
---

## React 

### JSX 语法 与 组件

```
// 类名必须大写首字母，以免引起混淆
class Mytitle extends React.Component {
  render () {
    return ... ;
  }
};
 
ReactDOM.render(
  <span>Hello World!</span>,
  document.getElementById('example')
);
```
- `ReactDOM.render()`方法接受两个参数
  - 虚拟DOM节点
  - 真实DOM节点(用`getElementByID`获取)

### 组件参数、状态
- `this.props`代表外部传入组件的参数，比如`this.props.color`
- `this.state`代表组件的状态
  - 通过 `constructor`构造函数，可以存放初始状态
  - `handleChange`监听函数可以改变组件状态，`onChange`指定

### 生命周期

