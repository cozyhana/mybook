/*
 * @Author: hf
 * @Date: 2021-09-13 15:00:29
 * @LastEditTime: 2021-09-13 16:15:16
 * @LastEditors: hf
 */
{
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
}

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

{
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
}