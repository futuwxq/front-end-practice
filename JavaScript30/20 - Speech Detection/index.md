## 总结
项目使用 Goole 浏览器内置 Web speech API,对使用者的语音进行识别(Google 算法)，最后将识别的语音显示在该页面。
+ 监听 SpeechRecognition 的 onresult 事件，在事件event中获取结果
+ 正则对识别之后的文本进行处理
+ 判断result的 idFinal属性，创建元素 p ，拼接到 html 中
+ 监听 end 事件，当  SpeechRecognition服务中断 ，重新请求摄像头权限