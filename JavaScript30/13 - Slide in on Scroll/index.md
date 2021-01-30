#### 小结
 **scroll 事件 和 元素的位置**
  + window.scrollY ：文档从顶部开始滚动过的像素值
  + window.innerHeight：浏览器窗口的视口（viewport）高度
  + 元素偏移量 offset 系列
 在 scroll 事件下，页面滑动过程中有两个临界点

  元素出现：滑到元素顶部距离 `window.scrollY + window.innerHeight` 

  元素隐藏：滑过页面 `element.offsetTop(确保距离body的偏移) + element.offsetHeight`

  因此元素在窗口的条件
  ```
  window.scrollY + window.innerHeight > element.offsetTop
  window.scrollY < element.offsetTop(确保距离body的偏移) + element.offsetHeight
  ```
**debounce 防抖** 

