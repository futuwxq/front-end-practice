// 1.鼠标经过轮播图模块 ,左右按钮显示，离开隐藏左右按钮。
// 2. 轮播图底部的小圆圈自动生成
// 3.点击小圆圈,可以播放相应图片。
// 4.点击右侧按钮一次,图片往左播放一张,以此类推
// 5.图片播放的同时，下面小圆圈模块跟随一起变化。
// 6.左侧按钮同理。
// 7.鼠标不经过轮播图 ，轮播图也会自动播放图片。
// 8.鼠标经过 ,轮播图模块， 自动播放停止。
// 9. 设置节流阀
window.addEventListener('load', function() {
    // console.log(1)
    // 1.1 获取元素
    var arrowL = document.querySelector('.arrow-l');
    var arrowR = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 1.2 左右两个按钮的出现和隐藏
    focus.addEventListener('mouseenter', function() {
        // console.log(1);
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        // 8.2. 清除计时器
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        // console.log(1);
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        // 8.3 鼠标离开foucus 开始自动播放
        var timer = setInterval(function() {
            arrowR.click();
        }, 2000)
    });
    // 2.动态生成小圆圈
    var ul = document.querySelector('.carousel');
    var lis = ul.querySelectorAll('li');
    var ol = this.document.querySelector('ol');
    for (var i = 0; i < lis.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 3.绑定小圆圈点击事件，点击之后小圆圈变成实心
        li.addEventListener('click', function() {
            // 3.1排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // console.log(this);
            // console.log(li);
            // li.className = 'current'; li是固定不变的一直是最后一个小li
            this.className = 'current';
            var index = this.getAttribute('index');
            // 5.1. 当我们点击小圆圈的时候，num值也要跟着变化，才能保证按钮和小圆圈同步轮播
            // 5.2.点击小圆圈也要同步cicle
            num = circle = index;

            // 3.2 点击小圆圈 轮播图动画 
            // 开始我在想小圆圈从左到右依次点击轮播图会轮播，但是为什么如果从右往左呢，后来发现animate俩面的target参数（第二个参数）
            // 是ul这个元素距离他的定位父元素的距离，他的父元素是纳尼的，因此target参数是正负不断变化的
            animate(ul, -index * focusWidth);
        })
    }
    // 4.1 克隆轮播图的第1张图片作为第5张照片 深克隆
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    ol.children[0].className = 'current';
    // 4. 点击轮播图的右侧按钮进行播放
    var num = 0;
    var circle = 0; // circle 控制小圆圈的播放
    // 9.设置节流阀
    var flag = true;
    arrowR.addEventListener('click', function() {
            if (flag) {
                flag = false; //9.1先关闭节流阀
                num++;
                // 当num=3的时候，处于第4张照片，点击右侧按钮
                // 直接采用无缝连接 此时轮播到第5张照片，立即跳转到第1张照片
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0; //重新计数
                }
                // 9.2 利用回调函数当动画结束后，打开节流阀
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                // 5.点击按钮同步小圆圈状态 这里会有bug 导致点击箭头按钮和小圆圈事件不同步 circle = num = index 解决 
                circle++;
                // circle = 4 ,要重新开始计数
                // if (circle == ol.children.length) {
                //     circle = 0;
                // }
                circle = circle == ol.children.length ? 0 : circle;
                circleChange();
            }


        })
        // 6. 点击轮播图的左侧按钮进行播放
    arrowL.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 当num=0处于第一张图片，点击左侧按钮，图片跳转到第5张照片，然后慢慢滚动到第4张照片
            // 采用无缝连接 
            if (num == 0) {
                num = ul.children.length - 1; //4
                ul.style.left = -num * focusWidth + 'px'; //重新计数
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 5. 点击按钮同步小圆圈状态
            circle--;
            // circle <0  ,就是在第一张照片此时需要转到第4张照片
            // 第4张片的circle是3
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }


    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    // 8.自动播放轮播图
    var timer = this.setInterval(function() {
        // 8.1手动调用点击事件
        arrowR.click();
    }, 2000)

})