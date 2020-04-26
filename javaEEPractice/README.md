# JavaEE Practice

这个文件夹主要包括学习javaEE时候实验项目。

**开发环境**

1)   PC机最低配置：2G Hz以上CPU；1G以上内存；1G自由硬盘空间；

2)   JDK1.8以上；

3)   Eclipse Ganymede；

4)   Tomcat 8。

**实验内容介绍**

**实验一**：初次使用servlet

1)   开发一个只有一个Servlet的Java EE Web应用，在页面上打印当前时间；

​        运行FirstServlet.java

2)   开发一个简单的啤酒选择应用；

​       运行select.html  ，select2.html 是对啤酒选择加入判断逻辑。

3)   开发一个下载文件的Java EE Web应用；

​		运行CodeReturn.java

4)   使用Servlet上下文。

​	   运行TestInitParams.java

**实验二：session 和cookies的用法**

1)   开发一个简单的购物车

运行bookstore.html

2)   开发一个简单的用户登录提示系统

运行UserLogin.html

3)   设定Session生命周期

对购物车应用进行修改，设定session寿命为3分钟

运行UserLogin.html

4)   开发一个Session监听器

监听session属性的添加和更新

运行bookstore.html，

5)   用Cookie存储密码，并能实现自动登录

通过jsp 和 cookies实现的，设置默认用户名是admin ，用户密码是123，运行login.html。

实验三：JSTIL 和 tag 处理器

1）一个简单的啤酒选择应用中使用tag技术

运行SelectBeer.jsp

2) 应用JSTL语法

BeerList.jsp 和 DisplayItem.jsp

3）使用SimpleTag重新开发啤酒选择应用

运行SelectBeer.jsp

4）使用标签技术显示书店商品内容

运行BookStore.jsp

**实验四：过滤器的开发**

开发一个简单的啤酒选择的JSP页面，要求统计用户登录该页面的次数，并利用JSP语法申明一个变量，用于显示可供选择的啤酒的颜色种类数；

+ BeerRequestFilter： 实现对选择light颜色啤酒人数的统计；

+ URLRequestFilter：该过滤器只允许访问在过滤器初始化参数中配置的页面类型；

+ UpperCaseFilter： 实现对页面上输出文本的大写转化；
+ URLRequestFilter：实现对除了首页SelectBeer.jsp之外所有通过get方法访问页面请求的过滤，当通过get方法访问页面时，自动跳转回首页SelectBeer.jsp。
+ IncludeResponseFilter：实现对动态Include的页面顶端加一条文字“This is an included section!”。

此外该练习还包括一个项目 ——**图书馆管理系统**

**功能描述**

详见 图书馆管理系统项目开发说明书

**开发环境**

同上

**项目结构简介**

简单介绍项目模块结构目录树，对用户可以修改的文件做重点说明。