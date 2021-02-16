## 计时器的实现
1.  定义一个 1000 ms 执行一次的定时器 setInterval。
2. 计时器按钮监听点击事件，因为每个按钮都可以触发定时器，所以在事件的开始需要清楚上一次的定时器，因此定时器是一个全局变量
3. 实现计时函数，实时显示计时还剩多少？格式化 (结束时间戳 - 当前时间戳 )

```
let countdown = null
function timer(seconds) {
    // 清除上一个计时器
    clearInterval(countdown)
    const now = Date.now()
    // 计算结束时间的时间戳
    const end = now + seconds * 1000

    countdown = setInterval(() => {
        // 计时
        const times = Math.round((end - Date.now()) / 1000)
        // 检查计时器是否超时
        if (times < 0) {
            clearInterval(countdown)
            return
        }
        displayTimeLeft(times)
    }, 1000)
}
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const sec = seconds % 60
    timerDisplay.textContent = `${minutes}:${sec < 10 ? 0 : ''}${sec}`
}

```

## 格式化时间戳
已知某个时刻的时间戳 ms ，可以将其转化为标准时间之后格式化 年月日 时分秒

```
const end = new Date(timestamp)
  const hour = end.getHours()
  const adjustedHour = hour < 10 ? '0' + hour : hour
  const minutes = end.getMinutes()
  const adjustedMinutes = minutes < 10 ? '0' + minutes : minutes
  const seconds = end.getSeconds()
  const adjustedseconds = seconds < 10 ? '0' + seconds : seconds
  endTimer.textContent = `Be Back At ${adjustedHour} : ${adjustedMinutes} : ${adjustedseconds}`
```
也可以使用 `toLocaleTimeString` 方式直接格式化
```
 endTimer.textContent = new Date(end).toLocaleTimeString("en-US", {
    hour12: false
     });
```

## form 表单
属性

+ name 返回 from 内部 name 匹配的表单元素

方法

 + reset 方法可以重置一个表单内的所有表单控件的值到初始状态.