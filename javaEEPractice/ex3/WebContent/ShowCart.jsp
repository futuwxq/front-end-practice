<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:set var="sessionList" scope="session" value="${paramValues.item}"></c:set>
<h4>Session List:</h4><hr><br><br>
<c:forEach var="item" items="${sessionList}" varStatus="itemLoopCount">
Item ${itemLoopCount.count} : ${item}
<hr> 
</c:forEach>
</body>
</html>