## 总结
该项目实现的鼠标移动到 nav 的标题处，标题下面会显示出相应的内容。鼠标移除 标题，下面的内容会消失。

> 思路

+ 监听标题的 mouse 事件，当 `mouseenter` 的时候，标题部分`dispaly:block`,当 `mouseleave`的时候，`dispaly:none`。
+ dispaly 属性的改变 通过 add 和 remove 类实现
>实现

**1. 封装背景模块**

  const dropdownCoords = dropdown.getBoundingClientRect()
每个内容都有一个白色的背景，而且在标题的移动中，可以感受到背景的移动。所以封装一个背景模块。背景的尺寸和相对位移和 内容的是一致的，使用`getBoundingClientRect()`获取元素内容。
```
  const dropdown = this.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()
  const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
  }

   background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`)
        
```

**2. 动画顺序的处理 setTimeout**

比如在这个项目中，鼠标移动到标题处，背景的显示和内容的显示几乎是同时出现的。而且还有以下需求：

+ 背景的尺寸和位移需要获取 `dropdown` 元素的信息
+ `dropdown` 元素在 `display none` 情况下无法获取自身信息

所以动画的顺序是: `dropdown` 元素在 `display block`,但是不显示(`opicaty:0`) -> 计算背景的信息，显示背景 -> 显示`dropdown` 元素

代码如果不加处理，按照上面顺序编写，明显内容部分先于背景出现。因此给内容出现是指一个计时器
```
 setTimeout(() => this.classList.add('trigger-enter-active'), 150)
```
**setTimeout 状态管理** 

然后频繁移动鼠标在这几个标题间，会发现页面某一时刻会显示多个内容。猜测因为计时器的原因，比如鼠标移入某个 title ，计时器开始计时显示元素，但是在 150 ms 内 鼠标已经移除上一个 title ，移入下一个 title，并触发内容的显示。所以，需要在计时器中进行判断鼠标是否已经移除该元素。
```
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```

