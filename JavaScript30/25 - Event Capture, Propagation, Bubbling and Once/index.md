## 事件捕获和事件冒泡
EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

>`target.addEventListener(type, listener, options);`

option 参数

+ capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。当不设置这个选项是，事件流默认为事件冒泡，即事件 从该 EventTarget 自底向上  DOM 最顶层的节点。

+ Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。

>` e.stopPropagation()` 和 `capture: true`

` e.stopPropagation()`是阻止事件传递，当上面两个属性结合起来，监听函数里面的 this 该 EventTarget 的最顶层 DOM 元素，而不是EventTarget 。

>`e.target`  和 `this(e.currentTarget)`

 + e.target,指的是触发事件的元素 唯一确定的
 + this ，指的是绑定事件的元素 ，可以是e.target,也可以是他的父级DOM 元素