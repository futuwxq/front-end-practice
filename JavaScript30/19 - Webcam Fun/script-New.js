// 摄像头窗口
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
// 相片廊
const strip = document.querySelector('.strip');
// 相机的咔嚓声音
const snap = document.querySelector('.snap');

// 获取摄像头权限
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream
            video.play()
        })
        .catch(err => {
            console.error(`OH NO!!!`, err);
        });
}
// 处理 rgb
function rgbSplit(pixels) {
    // 每个点的 rgba 4 个数据
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}
// 绘制canvas 
function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight;
    canvas.width = width
    canvas.height = height

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

// 拍照按钮点击事件
function takePhoto() {
    // 播放 video
    snap.currentTime = 0;
    snap.play();
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src="${data}" alt="handsome man" />`
    strip.insertBefore(link, strip.firstChild)
}
getVideo()
video.addEventListener('canplay', paintToCanvas)