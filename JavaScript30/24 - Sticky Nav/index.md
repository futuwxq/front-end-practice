### 总结
项目实现当页面滚动到导航栏的时候，导航栏固定，并且弹出 LOST 标题；点击导航栏的其他按钮，都会跳转到浏览器最顶端，导航栏取消固定，并且要求所有页面的滚动丝滑。

>思路

+ 导航栏的固定，以及取消固定通过 css 实现 ，transtion 可以实现丝滑；页面的滚动通过 `window.scroll`方法实现
```
  window.scroll({
      top: 0,
      left: 0,
      // 缓慢的滑动 丝滑
      behavior: 'smooth'
  });
```
+ 监听页面的 scroll 事件，当 `window.scrollY > header.offsetHeight` ,页面固定，否则取消固定
```
      if (window.scrollY > header.offsetHeight) {
          nav.classList.add('fixed-nav')
      } else {
          nav.classList.remove('fixed-nav')
      }
```            
+ 点击每个 a 链接，页面滚动到最顶端
  + 首先阻止 a 链接挑战的行为
  + 利用事件委托，在父元素上绑定 click 事件
  + 判断当点击第一个元素的时候，直接返回

```
 if (e.target.matches('.logo') || e.target.text === 'LOST.') return
```
+ 当导航栏固定和取消固定的时候，文章部分会有一个放大缩小的过程。给导航栏的相邻元素添加一个 缩放 属性
```
nav.fixed-nav+div.site-wrap {
    transform: scale(1);
}
```
