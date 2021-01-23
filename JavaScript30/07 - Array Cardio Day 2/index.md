删除数组的中间元素
+ 改变原数组 splice 方法
+ 不改变原数组 截取数组的两段，之后解构合并数组
```
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];
```
