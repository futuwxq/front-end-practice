## LocalStorage 本地存储

+ submit 默认行为
点击按钮后发现 submit 事件触发后的结果是， Console 中闪现 hello 后刷新整个页面，这是 submit 的默认行为，在当前的场景中不适用，所以我们需要先去除此事件的默认行为。
```
 e.preventDefault();
 ```
 + localStorage 基本使用
localStorage为HTML5的本地存储API，用于存储前端的数据，关闭应用程序（浏览器）后数据不会丢失，只有手动清除才会清除数据，但是 localStorage只能存储字符串

+ json 方法
```
const items = JSON.parse(localStorage.getItem('items')) || [];
```

+ 事件委托
事件绑定在父元素，通过冒泡传递给子元素，通过 e.target 可以知道被点击的子元素
```
        itemsList.addEventListener('click', (e) =>{
          // 点击的不是 input 元素 就返回
         if (!e.target.matches('input')) return
            const el = e.target
        })

```