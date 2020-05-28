function animate(obj, target, callback) {
    clearInterval(obj.timer); //解决动画计时器bug，先清除所有的计数器
    obj.timer = setInterval(function() {
        // 步长公式：(目标值 - 现在的位置) / 10
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1px改成一个逐渐变小的变量
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}