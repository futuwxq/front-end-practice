## 总结
### 数据驱动 Proxy 实现老鼠的显示和隐藏

使用 proxy 代理对象，当对象数据发生改变的时候，可以进行一些操作。比如在这个项目中，老鼠的出现和隐藏可以通过一个 boolean 变量控制。

1. 初始化每个老鼠坑的状态是 隐藏，并存储在 state 中
```
  // 每个洞的初始状态为 false
  const status = moles.reduce((prev, current, index) => {
          prev[index] = false
          return prev
      }, {})
```

2.  molesProxy 代理  status 老鼠洞的状态

+ 在 get 方法中获取老鼠洞状态
+ 在 set 方法中改变老鼠洞状态
  + 在 status 为 true 时候，监听 click 事件，老鼠显示
  + 在 status 为 false 时候，移除监听事件，老鼠隐藏

```
 const molesProxy = new Proxy(status, {
            get(target, key) {
                return target[key]
            },
            // 当值发生改变的时候，触发事件
            set(target, key, value) {
                // 防止同时触发 多个元素的点击事件
                moles[key].removeEventListener('click', handleClick)
                target[key] = value
                    // value 为 true ，老鼠出现，监听点击事件
                if (value) {
                    moles[key].addEventListener('click', handleClick)
                    moles[key].classList.add('up')
                } else {
                    // value 为 false ，老鼠隐藏，移除点击事件
                    // moles[key].removeEventListener('click', handleClick)
                    moles[key].classList.remove('up')
                }

            }

        })
```

### 老鼠随机出现的实现

+ 老鼠洞的状态存储在一个数组中，用随机数 index 可以随机取到一个老鼠洞
+ 设置一个计时器，控制老鼠的显示和隐藏，在计时器内开始下一个老鼠的随机出现。
```
    const getRandomMole = function() {
        // 0-5 随机数 index
        const mole = Math.floor(Math.random() * moles.length)
            // 500 - 1000 每个老鼠出现的时间
        const time = Math.random() * (1000 - 200) + 200
            // 如果随机老鼠已经出现 重新获取随机老鼠 后续就不执行了
        if (molesProxy[mole]) return getRandomMole()
            // 当前随机数代表的老鼠出现
        molesProxy[mole] = true
        setTimeout(() => {
            // 如果游戏还没有结束 继续获取下一个随机老鼠
            if (!timeup) getRandomMole()
            molesProxy[mole] = false
        }, time)
    }
```
