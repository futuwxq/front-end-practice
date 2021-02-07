### 总结
>项目实现的效果:

当鼠标移动到 a 元素时，左上角一个白块飞到当前元素，成为当前元素的白色背景。

>实现的思路：

添加一个 背景为 白色的 span 元素(index = -1)，开始元素不设置 高度 和 宽度 并且定位在文档的左上角（0，0），当鼠标移动到 a 元素之后，计算元素的宽高作为 span 元素的宽高，计算出元素距离左上角的 top 和 left，让 span 元素移动。

这里需要求出 **a 元素** 距离 document 左上角的 top 和 left，因此无法使用 pageX(获得鼠标停留的 **点** 和文档的距离)。offsetTop 是和定位的父级元素(找不到就是距离body)的距离，如果 a 元素有定位的父级，offsetTop 就不是和 文档左上角的距离。
>实现

但是，`Element.getBoundingClientRect()` 可以很好的解决问题。

Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。

```
  const linkCoords = this.getBoundingClientRect()

  const coords = {
      height: linkCoords.height,
      width: linkCoords.width,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
  }

  span.style.width = `${coords.width}px`;
  span.style.height = `${coords.height}px`;
  // translate 是基于元素的左上角 移动，
  span.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

```
>translate 偏移 和 position 偏移的区别
+ position是css2的属性，transform是css3的属性,在ie8及以下的浏览器是不支持2d transform的。
+ transform属性可以使用硬件加速，这就使得当元素变换或者动画时，translate()性能表现要优于position的。
+ position最小单位就是1px,translate能小于1px过渡，因此动画效果更为平滑。