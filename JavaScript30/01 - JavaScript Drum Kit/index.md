demo1 涉及 DOM 元素的操作

+ 事件监听

transitionend 事件会在 CSS transition 结束后触发

```
两种写法
 window.addEventListener('keydown', playSound);
 document.onkeydown = function(e) {}
 ```
 + 获取键盘值 e.keyCode
 + audio 对象的使用 时间戳 播放 暂停
 + map、forEach 每一个元素都会执行，不能使用continue,break,return 等暂停，for循环，for (const element of keys) 可以
 + dom 对象 增加和移除属性 classList 
 + 模板字符串最后整个元素都是字符串，e.keyCode是一个 number 值
 
 ```
 "${e.keyCode}" 原本就有"",`audio[data-key="${e.keyCode}"]` 现在是一个字符串，里面的变量也会解析为字符串的一部分 
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 ```