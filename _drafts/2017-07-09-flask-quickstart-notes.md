---
layout: post
tag: 
  - python
  - flask
title: Tips of Flask Quickstart 
comments: true
date: 2017-07-09 
---


*from [http://flask.pocoo.org/docs/0.12/quickstart/#](http://flask.pocoo.org/docs/0.12/quickstart/#)*

## 路由

- 必须使用 装饰器 (decorator) 指定路由
`@app.route('/url')`
- 在第二行定义处理函数
``` 
def hello():
      return "hello, wolrd"
```
- 定义变量类型（<converter:variable_name>） 
`.route('/user/<int:user_id>')`
converter 包含共有 string int float path any uuid 6 种
- URL与重定向
  - 比较 `/project` 与 `/project/`
- 生成 URL
  - 调用flask.url_for()方法
  - `route()` matches urls and `url_for()` can generates (builds )urls
  - 方便调用
  - unicode 友好
- HTTP 方法
  - `route('/index', methods=['GET', 'POST', ...])`
  - 几种方法`methods=['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS']`

## 静态文件
- 位置 `\static`
- 生成链接使用`url_for()`，可以直接在模板中插入
  `url_for('static', filename='style.css')`

## 模板
使用[Jinja2](http://jinja.pocoo.org/)，传入后端处理数据，渲染模板
``` python
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
```
 *前后端分离时，不需要渲染，直接把数据传给前端？*

模板可以处理`request session g`对象或者`fet_flash_messages()`函数

## 处理请求

### Context Locals本地上下文
```
from flask import request

with app.test_request_context('/hello', method='POST'):
    # now you can do something with the request until the
    # end of the with block, such as basic assertions:
    assert request.path == '/hello'
    assert request.method == 'POST'
```

### 请求对象
- `request`通过路由的`method=['PUT','POST']`属性处理数据
- 用`request.args.get('key', '')`获取请求值` (?key=value)`

### 文件上传
- 设置HTML中的属性`enctype="multipart/form-data"`
- `request.files`属性
- `save()`方法保存至本地
`f.save('/var/www/uploads/uploaded_file.txt')`
- `f.filename`属性
- Werkzeug.utils 中 `secure_filename`
`f.save('/var/www/uploads/' + secure_filename(f.filename))`

### Cookies  
- `reuqest.cookies.get(key)`获取本地 Cookies
- 设置存储 Cookies
```
@app.route('/')
def index():
    resp = make_response(render_template(...))
    resp.set_cookie('username', 'the username')
    return resp
```

## 重定向
```
from flask import abort, redirect, url_for

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login')
def login():
    abort(401)
    '''实际上以下部分并未执行'''
    this_is_never_executed()
```
- `redirect()`重定向，参数为所指定路由
- `abort()`中止访问，返回 错误码
- `errorhandler()` 处理 HTTP 错误，一般渲染 404 错误页面，`render_templates()` 第二个参数可以设置为对应的状态码
```
@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404
```
## 进程
> In addition to the request object there is also a second object called [session
](http://flask.pocoo.org/docs/0.12/api/#flask.session) which allows you to store information specific to a user from one request to the next.

- 需要设置`secret_key`，除非匹配，否则只能访问Cookies，不能修改
- `session['username']`
  - 利用 `session[] = request.form()' 鉴权，确认登录状态


###　插件