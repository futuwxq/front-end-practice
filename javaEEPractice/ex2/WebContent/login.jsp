<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户登录</title>
<%
    String username = "";
    String password = "";
    String isLogin = "";
    //获取当前站点的所有Cookie
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
    for (int i = 0; i < cookies.length; i++) {//对cookies中的数据进行遍历，找到用户名、密码的数据
        if ("username".equals(cookies[i].getName())) {
            username = cookies[i].getValue();
        } else if ("password".equals(cookies[i].getName())) {
            password = cookies[i].getValue();
        }
    }
    }
%>
</head>
<body>
    <form action="login.do" method="post">
        姓名:<input type="text" name="name" value="<%=username%>" /><br/>
        密码:<input type="password" name="pwd" value="<%=password%>" /><br/>
        <input type="checkbox"  name="isLogin">自动登录<br/> 
        <input type="submit" value="登录" />
    </form>
</body>
</html>