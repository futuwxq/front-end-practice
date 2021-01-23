知识点总结
+ canvas 
HTML5 `<canvas> `元素用于图形的绘制
```
 const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
            // 画笔颜色
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 100;
```
+ mouse 事件
  + mousedown
  + mousemove
  + mouseup
  + mouseleave
+ 变量的赋值
```
[x, y] = [e.offsetX, e.offsetY]
 等价于
x = e.offsetX
<!-- y = e.offsetY -->
```
+ 颜色 hsl
HSV 表达彩色图像的方式由三个部分组成：Hue（色调、色相），Saturation（饱和度、色彩纯净度），Value（明度）
HLS 也有三个分量，hue（色相）、saturation（饱和度）、lightness（亮度）
Hue 用角度度量，取值范围为0～360°，表示色彩信息，即所处的光谱颜色的位置，Hue=0 表示红色，Hue=120 表示绿色，Hue=240 表示蓝色