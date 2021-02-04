总结

**利用 canvas 绘制 video 摄像头**
1. 监听 video 的 canplay 事件
```
video.addEventListener('canplay', paintToCanvas);
```
2. 绘制canvas
 使用canvas 的 `ctx.drawImage(video, 0, 0, width, height);`绘制 video
```
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight;
    canvas.width = width
    canvas.height = heigh
    let pixels = ctx.getImageData(0, 0, width, height);
    // Area:307200,Pixels:1228800 4倍关系 一个点由 rgba 四个颜色表示
    console.log(`Area:${width * height},Pixels:${pixels.data.length}`, );
    return setInterval(() => {
        // 画一个video
        ctx.drawImage(video, 0, 0, width, height);
        pixels = ctx.getImageData(0, 0, width, height);
        // 调色
        pixels = rgbSplit(pixels);
        ctx.putImageData(pixels, 0, 0);

    }, 16)

}
```
3. 调色

页面中每个点都是由 rgba 四个色素组成的，对颜色的处理就是改变每个色素的值(0-255)。例如下面增加红色，也就是增加每个点的红色值
```
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    // 红色色板 增加很多
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    // 绿色色板
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    // 蓝色色板
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}
```
**生成图片（比如截图），并且下载图片**

```
    <!-- canvas 生成的图片 -->
    const data = canvas.toDataURL('image/jpeg');
    <!-- 创建一个链接 添加 download 属性 实现下载到本地 -->
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src="${data}" alt="handsome man" />`
    <!-- 添加元素节点 -->
    strip.insertBefore(link, strip.firstChild)
```