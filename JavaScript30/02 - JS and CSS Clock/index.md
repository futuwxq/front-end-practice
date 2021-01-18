## 知识点回顾
### JS 内置对象-- Date对象
Date() 日期对象是一个构造函数，需要实例化之后才能使用

如何获取年月日时分秒 
+ getFullYear()
+ getMonth() 0-11
+ getDate() 正常
+ getDay() 0-6
+ getHours()
+ getMinutes()
+ getSeconds()

### css3 新属性 2D转换 transform
+ translate 一般用在居中，配合绝对位移
+ rotate 
+ scale
+ transform-origin

### 伪元素 after 和 befoe
伪元素后面添加的内容默认第 inline 元素，必须设置 content 属性
```
水平垂直居中      
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
```
### 计时器