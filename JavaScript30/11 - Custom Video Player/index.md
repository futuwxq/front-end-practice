知识点总结
#### 1 video 的属性和原生事件
+ paused
+ currentTime
+ duration
+ timeupdate 事件
#### 2 textContent 和  innerHTML 的区别
“innerText”,“textContent”:获取的是该标签和该标签下子标签中的文本内容
“innerHTML”:获取的是该标签的所有内容，包括其子标签
#### 
3  三元运算符 []取值
```
    const method = video.paused ? 'play' : 'pause'
    video[method]()

// 上面的写法更加灵活
    if(xx){
      00
    }else if(##){
      11
    }
```
#### 4  && || 判断式
```
progress.addEventListener('mousemove', e => mousedown && handleProgressBar(e))
```
#### 5 founction 的独立功能
点击音频，音频会切换状态，图标会变化切分为两个 founction：
+ 切换音频状态
+ 判断音频状态 切换图标