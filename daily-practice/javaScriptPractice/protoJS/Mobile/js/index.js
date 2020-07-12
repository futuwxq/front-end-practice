window.addEventListener('load', function() {

    // 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var focusW = focus.offsetWidth;
    // 1. 利用计时器播放轮播图
    var index = 0; //控制轮播图移动
    var timer = setInterval(function() {
        index++;
        var moveW = -index * focusW;
        // console.log(moveW);
        ul.style.transition = 'all .3s';
        // 利用transform的translateX属性进行移动
        // ul.style.transform = 'translateX(' + moveW + ' px)'; //多加了一个空格就不行了
        ul.style.transform = 'translateX(' + moveW + 'px)';
    }, 2000);
    // 2. 监听过度完成
    ul.addEventListener('transitionend', function() {
        // 2.1 index = 3 说明此时处于，轮播图处于第四张图片 ，此时需要快速转到都一张图片 ，然后开始移动到第二张
        if (index >= 3) {
            index = 0;
            // console.log(index);
            ul.style.transition = 'none';
            // 利用最新的索引号计算新的滚动距离
            var moveW = -index * focusW;
            ul.style.transform = 'translateX(' + moveW + 'px)';
        } else if (index < 0) { // 2.2 index < 0 说明第1张照片有向左滑动的时间，已经滑动到第-1 张图片，需要迅速切换到第3张照片
            index = 2
            ul.style.transition = 'none';
            var moveW = -index * focusW;
            ul.style.transform = 'translateX(' + moveW + 'px)';
        }
        // 3.小圆圈跟随轮播图变化 要写在每张图片过度完成之后
        var ol = focus.children[1];
        // 删除当前小圆点的current属性
        ol.querySelector('.current').classList.remove('current');
        // 利用index给即将播放的下一张照片加上current属性
        ol.children[index].classList.add('current');
    });
    // 4. 手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    // 获取手指按下时的x轴位置
    ul.addEventListener('touchstart', function(e) {
        // 4.1 手指拖动的时候要暂停自动播放
        clearInterval(timer);
        startX = e.targetTouches[0].pageX;
    });
    // 6 优化用户触摸屏幕但是没有移动事件
    var flag = false;
    ul.addEventListener('touchmove', function(e) {
        // 盒子移动的距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子 盒子原来的位置 + 移动的距离
        var moveW = -index * focusW + moveX;
        ul.style.transition = 'none'; //手指拖动的时候不需要动画下效果
        ul.style.transform = 'translateX(' + moveW + 'px)';
        flag = true; //6.1 已经移动过
        e.preventDefault(); // 6.3阻止滚动屏幕的行为
    });
    // 5. 当手指移动到50px后会自动播放到上一张或下一张
    ul.addEventListener('touchend', function() {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--; //手指向右移动 切换到前面的一张
                } else {
                    index++; //手指向左滑动 切换到后面的一张
                }
                // 获取最新的index之后， 重新计算需要切换的距离
                var moveW = -index * focusW;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + moveW + 'px)';
            } else { // 5.1 当手指滑动距离小于50px 轮播图会回弹，也就是回到移动之前的图片
                var moveW = -index * focusW;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + moveW + 'px)';
            }
            flag = false; //6.2 重新检测是否移动
        }

        // 4.2 手指从屏幕松开 恢复自动播放
        clearInterval(timer); //先清除定时器，避免定时器叠加
        timer = setInterval(function() {
            index++;
            var moveW = -index * focusW;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + moveW + 'px)';
        }, 2000);

    });

})