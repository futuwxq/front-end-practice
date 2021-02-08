### 总结
该项目实现浏览器阅读功能，可以选择阅读的语言，语速，音调等，也可以暂停阅读。

>SpeechSynthesisUtterance 接口

Web Speech API 的SpeechSynthesisUtterance接口表示语音**请求**，它包含语音服务应阅读的内容以及有关如何阅读的信息（例如语言，音调和音量）
SpeechSynthesisUtterance 是一个构造函数，使用的时候需要初始化一个新的实例对象
```
const msg = new SpeechSynthesisUtterance();
```

 常用属性

 + msg.pitch  获取 设置说话的音调
 + meg.rate  获取 设置说话的速度
 + meg.text  获取并设置在说出语音时将要合成的文本
 + meg.volume 获取并设置发声的音量
 +  msg.voice 语言类型

>SpeechSynthesis 接口

Web Speech API 的 SpeechSynthesis 接口是语音服务的**控制**接口,用于获取设备上关于可用的合成声音的信息，开始、暂停语音等命令

事件

SpeechSynthesis.onvoiceschanged: 返回的SpeechSynthesisVoice列表改变时触发。

方法

+ SpeechSynthesis.cancel() 移除所有语音谈话队列中的谈话。
+ SpeechSynthesis.getVoices() 返回当前设备所有可用声音的 SpeechSynthesisVoice列表。
+ SpeechSynthesis.speak() 添加一个 utterance 到语音谈话队列；它将会在其他语音谈话播放完之后播放。因此当点击 speak 按钮，只是将当前语音添加到队列中，要让语音立即播放，需要将之前的语音移除。

> 函数封装 , 添加默认参数

移除语音 和 播放语音 可以封装在同一个函数中,移除语音的时候传递参数 false
```
function handleSpeak(isNotCancle = true) {
    speechSynthesis.cancel()
    if (isNotCancle) {
        speechSynthesis.speak(msg);
    }
}
```