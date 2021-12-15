<!--
 * @Author: hf
 * @Date: 2021-12-15 10:46:54
 * @LastEditTime: 2021-12-15 14:43:10
 * @LastEditors: hf
-->
### <center>H5移动端ios/Android兼容性总结</center>

[1.viewport](#1viewport)   
[2.禁止复制、选中文本](#2禁止复制、选中文本)   
[3.苹果手机固定定位有bug](#3苹果手机固定定位有bug)    
[4.IOS中input键盘事件](#4ios中input键盘事件)    
[5.给不同屏幕大小的手机设置特殊样式](#5给不同屏幕大小的手机设置特殊样式)     
[6.ios设置input按钮样式会被默认样式覆盖](#6ios设置input按钮样式会被默认样式覆盖)         
[7.消除IE10里面的叉号](#7消除ie10里面的叉号)   
[8.新版本安卓的flex布局兼容问题](#8新版本安卓的flex布局兼容问题)   
[9.input-的placeholder属性会使文本位置偏上](#9-input-的placeholder属性会使文本位置偏上)   
[10.input-typenumber之后pc端出现上下箭头](#10-input-typenumber之后，pc端出现上下箭头)  
[11.实现android和ios系统手机打开相机并可选择相册功能](#11-实现android和ios系统手机打开相机并可选择相册功能)     
[12.移动端-html5-audio-autoplay-失效问题](#12-移动端-html5-audio-autoplay-失效问题)    
[13.移动端-video在部分android机播放之后浮在最上层设置z-index无效](#13-移动端-video在部分android机播放之后浮在最上层，设置z-index无效)   
[14.关于-ios-系统中中文输入法输入英文时字母之间可能会出现一个六分之一空格](#14-关于-ios-系统中，中文输入法输入英文时，字母之间可能会出现一个六分之一空格)   
[15.关于-ios-与-os-x-端字体的优化横竖屏会出现字体加粗不一致等](#15-关于-ios-与-os-x-端字体的优化横竖屏会出现字体加粗不一致等)   
[16.移动端点击300ms延迟](#16移动端点击300ms延迟)     
[17.移动端点透问题](#17移动端点透问题)   


#### 1.viewport
```
<meta charset="utf-8">
<!--主要1是强制让文档的宽度与设备宽度保持1:1，最大宽度1.0，禁止屏幕缩放。-->
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<!--这个也是iphone私有标签，允许全屏浏览。-->
<meta content="yes" name="apple-mobile-web-app-capable">
<!--iphone的私有标签，iphone顶端状态条的样式。-->
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!--禁止数字自动识别为电话号码，这个比较有用，因为一串数字在iphone上会显示成蓝色，样式加成别的颜色也是不生效的。-->
<meta content="telephone=no" name="format-detection">
<!--禁止email识别-->
<meta content="email=no" name="format-detection">

```
   - 写背景图时最好加上top left 或者0 0 不然写运动效果时容易出现跳
  
#### 2.禁止复制、选中文本
```
.el {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
   user-select: none;
}
```
#### 3.苹果手机固定定位有bug
     检查html和body是不是设置了overflow-x:hidden;
#### 4.IOS中input键盘事件
1. IOS中input键盘事件keyup、keydown、keypress支持不是很好, 用input监听键盘keyup事件，在安卓手机浏览器中是可以的，但是在ios手机浏览器中用输入法输入之后，并未立刻相应keyup事件，只有在通过删除之后才可以响应
2. 方法：可以用HTML5的onInput事件去代替keyup   
 
```
<input type="text" id="testInput">
<script type="text/javascript">
  document.getElementById('input').addEventListener('input', function(e){
    var value = e.target.value;
  });
</script>

```        
   
#### 5.给不同屏幕大小的手机设置特殊样式

```
@media only screen  and (min-device-width : 320px)  and (max-device-width : 375px){}

```
#### 6.ios设置input按钮样式会被默认样式覆盖   

```
input,textarea {
  border: 0;
  -webkit-appearance: none;
}
```
#### 7.消除IE10里面的叉号

```
input:-ms-clear{display:none;}
```
#### 8.新版本安卓的flex布局兼容问题  
- flex布局对于低版本的安卓，不支持flex-wrap:wrap属性，但是ios系统支持换行属性，这个时候如何解决呢？当然是不使用换行，用其他方式代替
  ```
.box{
    display: -webkit-box; 
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box; /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox; /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
}

  ```    

#### 9. input 的placeholder属性会使文本位置偏上

```
{
    line-height: （和input框的高度一样高）---pc端解决方法
    line-height：normal ---移动端解决方法
}
```

#### 10. input type=number之后，pc端出现上下箭头

```
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;

```

#### 11. 实现android和ios系统手机打开相机并可选择相册功能

```
<input class="js_upFile cover1" type="file" name="cover" accept="image/*" capture="camera" multiple/>

$(function () {
    //获取浏览器的userAgent,并转化为小写
    var ua = navigator.userAgent.toLowerCase();
    //判断是否是苹果手机，是则是true
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
    if (isIos) {
        $("input:file").removeAttr("capture");
    };
})

```
#### 12. 移动端 HTML5 audio autoplay 失效问题    
这个不是 BUG，由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用 JS 的触发播放，必须由用户来触发才可以播放

解决方法思路：先通过用户 touchstart 触碰，触发播放并暂停（音频开始加载，后面用 JS 再操作就没问题了）。     

解决代码：
```
document.addEventListener('touchstart',function() {
  document.getElementsByTagName('audio')[0].play();
  document.getElementsByTagName('audio')[0].pause();
});

```   

#### 13. 移动端 video在部分android机播放之后浮在最上层，设置z-index无效   

这个目前没有好的办法解决   
情景一：页面有视频，点击页面按钮显示弹出层（比如让用户输入用户信息），这时候视频会出现在弹出层上面。   
方案：点击按钮时候把video隐藏hide，关闭弹出层show，过程中视频声音还在   
情景二：页面很长，往下翻滚时，视频在播放，脱离文档流   
方案：页面滚动到某一合适位置把video隐藏hide，回滚到某一位置show，过程中视频声音还在  
有些说position可以解决，我没有试  

#### 14. 关于 iOS 系统中，中文输入法输入英文时，字母之间可能会出现一个六分之一空格

```
this.value = this.value.replace(/\u2006/g,'');
```
#### 15. 关于 iOS 与 OS X 端字体的优化(横竖屏会出现字体加粗不一致等)   
iOS 浏览器横屏时会重置字体大小，设置 text-size-adjust 为 none 可以解决 iOS 上的问题，但桌面版 Safari 的字体缩放功能会失效，因此最佳方案是将 text-size-adjust 为 100% 。   

```
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    text-size-adjust:100%;
```

#### 16.移动端点击300ms延迟
原因：浏览器兴起初期，为了判断用户是双击还是单击，就设置了一个时间段300ms，用户单击后300ms后做事件处理，如果在300ms内连续点击，就判断为双击，做双击处理事件。
所以现在用click绑定事件呢，就会有300ms延迟的问题。
300ms尚可接受，不过因为300ms产生的问题，我们必须要解决。300ms导致用户体验并不是很好，解决这个问题，我们一般在移动端用tap事件来取代click事件。

推荐两个js，一个是fastclick，一个是tap.js

#### 17.移动端点透问题 
案例如下：  
```
<div id="haorooms">点头事件测试</div>
<a href="www.baidu.net">www.baidu.com</a>
```

div是绝对定位的蒙层,并且z-index高于a。而a标签是页面中的一个链接，我们给div绑定tap事件：

```
$('#haorooms').on('tap',function(){
    $(this).hide();
});
```

我们点击蒙层时 div正常消失，但是当我们在a标签上点击蒙层时，发现a链接被触发，这就是所谓的点透事件。

原因：

touchstart 早于 touchend 早于click。 亦即click的触发是有延迟的，这个时间大概在300ms左右，也就是说我们tap触发之后蒙层隐藏， 此时 click还没有触发，300ms之后由于蒙层隐藏，我们的click触发到了下面的a链接上。

解决：

1. 尽量都使用touch事件来替换click事件。例如用touchend事件(推荐)。
2. 用fastclick，https://github.com/ftlabs/fastclick
3. 用preventDefault阻止a标签的click
4. 延迟一定的时间(300ms+)来处理事件 （不推荐）
5. 以上一般都能解决，实在不行就换成click事件。

下面介绍一下touchend事件，如下：

```
$("#haorooms").on("touchend",function(event) {
   event.preventDefault();
 });
```


原文：https://segmentfault.com/a/1190000015131445