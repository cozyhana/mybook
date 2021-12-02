<!--
 * @Author: hf
 * @Date: 2021-12-02 15:43:11
 * @LastEditTime: 2021-12-02 15:55:06
 * @LastEditors: hf
-->
### JS有几种方法实现数组去重？
#### 1. 对象函数   
```
function arrayNoRepeat(arr){
    var res = [];
    var res1 = [];
    var json = {};
    for(var i = 0; i < arr.length; i++){
        if(!json[a[i]]){
            res.push(a[i]);
            json[a[i]] = 1;
        }else{
                res1.push(a[i]);
            }
    }
    return res +'---'+ res1;
}
```
#### 2. 遍历数组法  
它是最简单的数组去重方法（indexOf方法）   
实现思路：新建一个数组，遍历去要重的数组，当值不在新数组的时候（indexOf为-1）就加入该新数组中；  

```
function unique(arr){
    var temp=[];
    for (var i = 0,len=arr.length; i < len; i++) {
        if(temp.indexOf(arr[i]) === -1){
        temp.push(arr[i]);
        }
    }
    return temp;
}
```
    
#### 3. 数组下标判断法
调用indexOf方法，性能和方法1差不多   
实现思路：如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，那么表示第 i 项是重复的，忽略掉。否则存入结果数组。

```
function unique(arr){
    var temp=[];
    for (var i = 0,len=arr.length; i < len; i++) {
        if(arr.indexOf(arr[i])==i){
        temp.push(arr[i]);
        }
    }
    return temp;
}
```

#### 4. 排序后相邻去除法
实现思路：给传入的数组排序，排序后相同的值会相邻，然后遍历排序后数组时，新数组只加入不与前一值重复的值。

```
function unique(arr){
    arr.sort();
    var temp=[arr[0]];
    for (var i = 1,len=arr.length; i < len; i++) {
        if(arr[i]!=temp[temp.length-1]){
        temp.push(arr[i]);
        }
    }
    return temp;
}
```

#### 5. 元素对比法 
实现思路：用数组的第一项元素和后面的元素做对比，如果相同则在数组中把后面相同的元素给删掉.

```
function removeDuplicatedItem(arr) {
    let newArr = Array.from(arr);// 复制一份数组
    for(var i = 0; i < newArr.length-1; i++){
        for(var j = i+1; j < newArr.length; j++){
            if(newArr[i]==newArr[j]){
            newArr.splice(j,1);// 将重复元素删掉
            j--;// 删掉重复元素后下一位元素向前移动一位所以j--
        }
        }
    }
    return newArr;
}
```

#### 6. 使用数组中的filter方法
实现思路：如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，那么表示第 i 项是重复的，忽略掉。否则存入结果数组。

```
function unique(arr){
    let temp = [];
    temp = arr.filter(function(element,index,self){
        return self.indexOf(element) === index;
    });
    return temp;
}
```
#### 7. Set去重法 
基本思路：ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
```
function unique(arr){
    var x = new Set(arr);
    return [...x];
}
```
或
```
function unique(arr){
    return [...new Set(arr)];
}
```
#### 8. 使用Array.from方法 
```
function unique(arr){
    return Array.from(new Set(arr));
}
```

2-8 转载 https://www.cnblogs.com/abc-x/p/13371053.html?ivk_sa=1024320u