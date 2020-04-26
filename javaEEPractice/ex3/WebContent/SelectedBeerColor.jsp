<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="SimpleTag" prefix="mytag"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<!-- 显示所选的商品 -->
<body>
<c:set var="sessionList" scope="session" value="${sessionList}"></c:set>
	<h4>Session List:</h4>
	<hr>
	<br>
	<mytag:simple3 sessionLists="${sessionList}">
		light ${lightCount}
		<hr>
		brown ${brownCount}
		<hr>
		amber ${amberCount}
		<hr>
		dark ${darkCount}
		<hr>
	</mytag:simple3>

</body>
</html>