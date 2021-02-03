 ## 总结
**迭代遍历数组方法 - map**

>遍历数组每个元素，处理之后的结果作为新数组的元素
   + map 和 foreach 的区别：forEach 方法只能返回 undefined
   + map 和 filter 的区别：filter 方法返回的是过滤之后的数组元素，对于返回数组元素的一部分（比如数组元素是对象，只返回其一个属性），map非常适合。
  
>map 方法 、  parseFloat 、parseInt

map 方法的第一个参数是 callback 函数，callback(currentValue,index,array)有 3 个参数。parseInt(string, radix) 函数有两个参数,这里的 currentValue(每个元素) 对应 string 参数；index（数组下标） 对应 radix 参数，因此在如下代码中，每个元素转化成不同进制的数字，并不是我们想要的 10 进制
```
['12', '35', '02'].map(parseInt)
//[12, NaN, 0]

// [12, 35, 2]
['12', '35', '02'].map(parseFloat)
```