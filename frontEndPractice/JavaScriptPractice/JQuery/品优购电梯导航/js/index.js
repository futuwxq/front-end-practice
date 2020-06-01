$(function() {
    // alert(1);
    var toolTop = $(".recommend").offset().top;
    // 当页面刷新的时候也需要判断是否显示导航
    toggleTool();
    // bug 当我们每次点击导航的时候，屏幕就会scroll，就会触发导航依次高亮，
    // 因此我们需要设置回调函数，当点击事件结束之后，才会执行高亮的代码，使用节流阀
    var flag = true;

    function toggleTool() {
        // console.log(toolTop);
        // console.log($(document).scrollTop);
        // 整个文档卷曲部分没过"今日头条"，电梯导航显示 ，否则隐藏

        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();

        };
    };
    // 1. 当我们滚动到今日推荐模块,就让电梯导航显示出来
    $(window).scroll(function() {
        toggleTool();
        if (flag) {
            // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
            $(".floor .w").each(function(i, ele) {
                // 获取每层模块距离文档的头部，当页面划过这个距离，对应楼层的导航需要高亮
                var floorTop = $(ele).offset().top;
                if ($(document).scrollTop() >= floorTop) {
                    $(".fixedtool li").eq(i).stop().addClass("current").siblings().stop().removeClass("current");
                }
            })
        }

    });
    // 2. 点击电梯导航， 页面滑动到相应的楼层
    // 导航栏的个数和楼层层数是一致的，获取当前导航的index，让整个文档刚好没过index层
    $(".fixedtool li").click(function() {
        flag = false;
        var index = $(this).index();
        // var current = $(".floor w").eq(index).offset().top;选择器写错
        var current = $(".floor .w").eq(index).offset().top;
        $("body , html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 4.点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).stop().addClass("current").siblings().stop().removeClass("current");
    });
});