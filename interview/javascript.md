<!--
 * @Author: hf
 * @Date: 2021-09-13 14:51:25
 * @LastEditTime: 2022-01-06 14:35:23
 * @LastEditors: hf
-->
[1.手写callapply和bind-函数](#1-手写callapply和bind-函数)     
[2.事件委托是什么？](#2-事件委托是什么？)    
[5.common.js和ES6 中模块引入的区别？](#5-commonjs和es6-中模块引入的区别？)   
[6.JS有几种方法判断变量的类型？](#6-js有几种方法判断变量的类型？) 

### 1. 手写call,apply和bind 函数
 call 函数：
```
     Function.prototype.mycall = function (context) {
        // 判断调用对象
        if (typeof this !== 'function') {
            console.log('type error');
        }

        // 获取参数
        let args = [...arguments].slice(1), result = null;

        // 判断context是否传入，如果未传入则设置为window
        context = context || window;
    
        // 将调用函数设为对象的方法
        context.fn = this;

        // 调用函数
        result = context.fn(...args);

        // 将属性删除
        delete context.fn;

        return result;
    }
```

 apply 函数：
```
{
    Function.prototype.myApply = function (context) {
        // 判断调用的对象是否为函数
        if (typeof this !== 'function') {
            throw new TypeError('error');
        }

        let result = null;

        // 判断context是否存在，如果未传入则为window
        context = context || window;

        // 将函数设为对象的方法
        context.fn = this;

        // 调用方法
        if (arguments[1]) {
            result = context.fn(...arguments[1]);
        } else {
            result = context.fn();
        }

        // 将属性删除
        delete context.fn;

        return result;
    }
}
```
bind 函数：
```
 Function.prototype.myBind = function (context) {
        // 判断调用对象是否为函数
        if (typeof this !== 'function') {
            throw new TypeError('error');
        }

        // 获取参数
        var args = [...arguments].slice(1),
            fn = this;
        
        return function Fn () {
            
            // 根据调用方式，传入不同绑定值
            return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
        } 
    }
```

### 2. 事件委托是什么？

> 事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。
> 使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗，并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独得为他添加一个监听事件，他所发生的事件会交给父元素中的监听函数来处理。

### 3. javascript代码中的“use strict"是什么意思？使用他的区别是什么？
> use strict 指的是严格运行模式，在这种模式对js 的使用添加了一些限制。比如说禁止this指向全局对象，还有禁止使用with 语句等。设立严格模式的目的，主要是为了消除代码使用中的一些不安全的使用方式，也是为了消除js 语法本身的一些不合理的地方，以此来鉴赏一些运行时的怪异的行为。同时使用严格运行模式也能够提高编译的效率，从而提高代码的运行速度。我认为严格模式代表了js一种更合理、更安全、更严谨的发展方向。
> 相关知识点：
> use strict 是一种ECMAscript添加的（严格）运行模式，这种模式使得JavaScript在更严格的条件下运行。
> 设立“严格模式”的目的，主要有以下几个：
>   - 消除javascript语法的一些不合理、不严谨之处，减少一些怪异行为；
>   - 消除代码运行的一些不安全之处，保证代码运行的安全；
>   - 提交编译器效率，增加运行速度；
>   - 为未来新版本的JavaScript做好铺垫
> 区别
>   - 禁止使用with语句
>   - 禁止this关键字指向全局对象
>   - 对象不能有重名的属性

### 4. 手写async await

### 5. common.js和ES6 中模块引入的区别？
> 答： CommonJS是一种模块规范，最初被用于NodeJs,成为NodeJs的模块规范。运行在浏览器的javaScript由于也缺少类似的规范，在es6出来之前，前端也实现了一套相同的模块规范（例如：AMD),用来对前端模块进行管理。自ES6起，引入了一套新的ES6 Module规范，在语言标准的层面上实现了模块功能，而且实现的相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对ES6 Module兼容还不太好，我们平时在Webpack中使用的export 和 import, 会经过Babel转换为CommonJS规范。在使用上的差别主要有：
> - commonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
> - commonJS模块是运行时加载，ES6模块是编译时输出接口。
> - CommonJS是单个值导出，ES6 Module 可以导出多个。
> - commonJS是动态语法，可以写在判断里，ES6 Module是静态语法，只能写在顶层。
> - commonJS的this是指向当前模块，ES6 Module的this是undefined。

### 6. JS有几种方法判断变量的类型？   
    0. 数据类型
       1. 6个简单的数据类型（原始类型）
          1. String
          2. Number
          3. Boolean
          4. Undefined
          5. Null
          6. Symbol
       2. 一个复杂的数据类型 Object
    1. 使用 typeof 操作符 检测
       1. 对原始值很有用，但对引用值没什么用
       2. typeof 是操作符不是函数，因此没有参数
          eg. typeof 1 // number 
    2. 使用 instanceof 检测
       1. 检测具体类型的对象
          eg. colors instanceof Array // 变量是Array吗？
    3. 使用constructor检测
    4.  Object.prototype.toString.call(val).slice(8, -1).toLowerCase();  

        const typeCheck = (val) => {
            let type = Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
            return type;
        };




