<!--
 * @Author: hf
 * @Date: 2022-02-25 11:03:37
 * @LastEditTime: 2022-04-01 13:39:19
 * @LastEditors: hf
-->
### 1. 调用setState之后发生了什么？
>1. 在代码中调用setState函数之后，React会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程。
>2. 经过调和过程，React会以相对高效的方式根据新的状态构建React元素树并且着手重新渲染整个UI界面。
>3. 在React得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重新渲染。
>4. 在差异计算算法中，React 能够相对精确的知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

### 2. react 中如何对state中的数据进行修改？setState为什么是异步的？
>1. 修改数据通过this.setState(参数1，参数2)
>2. this.setState是一个异步函数  
    -  参数1：需要修改的数据是一个对象    
    -  参数2：是一个回调函数，可以用来验证数据是否修改成功，同时可以获取到数据更新后的DOM结构等同于componentDidMount。
>3. this.setState中的第一个参数除了可以写成一个对象以外，还可以写成一个函数，函数中第一个值为prevState,第二个值为preProps,this.setState((prevState,prop)=>({})) 

### 3. 触发多次setState,那么render会执行几次？
>1. 多次执行setState会合并为一次render,因为setState并不会立即改变state的值，而是将其放到一个任务队列里，最终将多个setState合并，一次性更新页面。
>2. 所以我们可以在代码里多次调用setState，每次只需要关注当前修改的字段即可。


#### 4.为什么建议传递setState的参数是一个callback而不是一个对象？
> 1. 因为this.props和this.state的更新可能是异步的，不能依赖他们的值去计算下一个state.

#### 5.为什么setState是一个异步？
> 1. 当批量执行state的时候可以让Dom渲染的更快，也就是说多个setState在执行的过程中还需要被合并。   

#### 6.setState到底是异步还是同步?
>答：有时是异步的，有时是同步的。
>1. setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout中都是同步的
>2. setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数setState(partialState,callback)中的callback拿到更新后的结果。
>3. setState的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。