目前这个项目只是模仿了天猫前端部分，后端还未补充。

此项目使用Ajax技术，所有页面的header和footer部分都是通过load加载。Chrome浏览器不支持Ajax跨域问题，显示不全，详细解决参考[js加载文件跨域报错](https://blog.csdn.net/KateCateCake/article/details/79045211)。

我使用的是 goole浏览器 + vscode 来编写这个项目，所以我是借助vscode里的Live Server插件，编辑完代码之后，点击有下角的GoLive 即可。

最近时逢4.4号疫情哀悼日，各网站网页颜色是灰调，借鉴大神的帖子，我在index页面应用可这一技术。

核心原理，使用css3的滤镜效果即可。filter grayscale 将整个界面变为黑白灰色调，

    获取此刻时间，这个时间是动态的
    var nowTime = new Date().getTime(); 

    <!-- 设置页面灰调的结束日期 -->
    var overTime = new Date('2020/04/05 12:00:00').getTime(); 

    if(nowTime < overTime){
    <!-- html设置灰色滤镜 -->
        $("html").css({
            '-webkit-filter':'grayscale(100%)',
            '-moz-filter':'grayscale(100%)',
            '-ms-filter':'grayscale(100%)',
            '-o-filter':'grayscale(100%)',
            'filter':'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)',     //ie滤镜
             '_filter':'none'  //ie6等低版本浏览器不需要加滤镜
        });