window.addEventListener('load', function() {
    // console.log(1)
    // 1. 获取元素
    var arrowL = document.querySelector('.arrow-l');
    var arrowR = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2.左右两个按钮的出现和隐藏
    focus.addEventListener('mouseenter', function() {
        // console.log(1);
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function() {
        // console.log(1);
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
    });
    // 3.动态生成小圆圈
    var ul = document.querySelector('.carousel');
    var lis = ul.querySelectorAll('li');
    var ol = this.document.querySelector('ol');
    for (var i = 0; i < lis.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 4.邦定小圆圈点击事件，点击之后小圆圈变成实心
        li.addEventListener('click', function() {
            // 排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // console.log(this);
            // console.log(li);
            // li.className = 'current'; li是固定不变的一直是最后一个小li
            this.className = 'current';
            var index = this.getAttribute('index');

            // 5.点击小圆圈 轮播图动画 
            // 开始我在想从左到右依次点击轮播图会轮播，但是为什么如果从右往左呢，后来发现animate俩面的target参数（第二个参数）
            // 是ul这个元素距离他的定位父元素的距离，他的父元素是纳尼的，因此target参数是正负不断变化的
            animate(ul, -index * focusWidth);
        })
    }
    // 7 克隆轮播图的第一张图片 深克隆
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    ol.children[0].className = 'current';
    // 6. 点击轮播图的右侧按钮进行播放
    var num = 0;
    var circle = 0; // circle 控制小圆圈的播放
    arrowR.addEventListener('click', function() {
        // alert('1');
        num++;
        // 当num=3的时候直接采用无缝连接 此时轮播到第4张照片，需要立即返回到第一张照片
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0; //重新计数
        }
        animate(ul, -num * focusWidth);
        // 点击按钮同步小圆圈状态
        circle++;
        // circle = 4 ,要重新开始计数
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';

    })

    // arrowL.addEventListener('click', function() {
    //     // alert('1');

    //     animate(ul, -numL * focusWidth);
    //     num++;
    // })

})