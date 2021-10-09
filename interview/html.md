<!--
 * @Author: hf
 * @Date: 2021-09-13 10:11:22
 * @LastEditTime: 2021-09-15 15:00:35
 * @LastEditors: hf
-->
### 1.怎么缓存8M的数据，并且在关闭浏览器后还能缓存？  
### 2.css怎么优化动画？ 
### 3.类似qiankun的沙盒机制怎么处理css的命令空间污染和js的作用域污染？
### 4.超过千万条的数据怎么处理最快？后端返回10000条数据，前端怎么渲染到页面上？
答:  [链接](https://mp.weixin.qq.com/s/joXY-I88v5nO4x1kPYDV2Q)
```
const total = 10000,
  // 每次处理数据
  each = 20,
  // 需要处理次数
  needTimes = Math.ceil(total / each),
  // 父容器
  content = document.querySelector('.content')
  // 当前处理次数
  let currentTime = 0
  // 处理元素插入
  function add() {
    console.log(3);
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < each; i++) {
      const li = document.createElement('li')
      li.innerText = Math.floor(i+currentTime*each)
      fragment.appendChild(li)
    }
    content.appendChild(fragment)
    currentTime++;
    if (currentTime < needTimes) {
      window.requestAnimationFrame(add)
    }
  }
  window.requestAnimationFrame(add)
  
```
### 5.如何设计一个在线生成图表可视化方案的架构？
### 6.浏览器是怎么解析CSS选择器的？
### 7.浏览器缓存
### 8.浏览器是如何渲染页面的？
### 9.判断一个给定的字符串是否是同构的？