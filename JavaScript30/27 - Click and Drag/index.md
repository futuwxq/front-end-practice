## 总结

### 元素拖移实现
拖移分为 3 步，对应着不同的事件：

设置变量 moveStart = false
1. 鼠标按下，开始移动：mousedown 
    +  moveStart = true
    + 记录鼠标的坐标 startX，常用 e.offsetX 或者 e.pageX 表示坐标点
2. 鼠标移动中：mousemove
    + 鼠标移动的距离 =  startX - 当前鼠标位置
    + 更新 startX = 当前鼠标坐标
    + 元素.scrollLeft -= 鼠标移动的距离
3. 鼠标移除目标对象 && 放开鼠标，结束移动：mouseleave && mouseup
    + moveStart = false

**scrollLeft 属性**
Element.scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离，也可以理解为 element 被视口卷曲的长度。

### CSS 属性 perspective
CSS 属性 perspective 指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。数值越大，离的越远，变形效果看起来越微小。
通常搭配  transform 的 ratate 属性一起使用
```
.items {
  perspective: 500px;
}
.item:nth-child(odd) {
    transform: scaleX(1.31) rotateY(-40deg);
}
.item:nth-child(even) {
    transform: scaleX(1.31) rotateY(40deg);
}

```