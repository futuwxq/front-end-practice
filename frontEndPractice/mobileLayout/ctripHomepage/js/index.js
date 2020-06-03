window.addEventListener('load', function() {
    // alert(1);

    var goBack = document.querySelector('.goBack');
    var local_nav = document.querySelector('.local-nav');

    // 1. 当页面滚动到刚好淹没nav_entry，返回模块出现
    window.addEventListener('scroll', function() {
        // console.log(window.pageYOffset);
        if (window.pageYOffset >= local_nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    // 2. 当返回被点击之后，返回到顶部，浏览器页面的返回顶部使用window.scroll
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})