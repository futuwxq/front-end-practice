## 总结        
**H5 `video` 播放速度控制**

video 的播放速度是通过 `playbackRate` 属性确定的，在本项目主要是做一个播速控制栏。

播速控制栏由两个 div ，外层的父 div 高度代表着最大音量)， div 高度代表着现在音量的大小。

```
<div class="speed">
    <div class="speed-bar">1×</div>
</div>
```
当鼠标在 speed 元素移动的时候，speed-bar 元素的高度随之增长或减小，从而实现控制倍速。 
```
  function handleSpeed(e) {
          const speedPrenct = e.offsetY / speed.offsetHeight
          const min = 0.4;
          const max = 4;
          const height = Math.round(speedPrenct * 100) + '%'
          const playbackRate = min + (max - min) * speedPrenct
          speedBar.style.height = height
          speedBar.textContent = playbackRate.toFixed(2) + 'x'
          video.playbackRate = playbackRate
      }
```