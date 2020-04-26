<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:choose>
		<c:when test="${param.color eq 'amber' }">
			<jsp:forward page="ShowAmberBeer.jsp" />
		</c:when>
		<c:when test="${param.color eq 'brown' }">
			<jsp:forward page="ShowBrownBeer.jsp" />
		</c:when>
		<c:when test="${param.color eq 'dark' }">
			<jsp:forward page="ShowDarkBeer.jsp" />
		</c:when>
		<c:otherwise>
			<jsp:include page="Header_show.jsp">
				<jsp:param name="subTitle" value="Welcome to the Light Beer World!" />
			</jsp:include>
		</c:otherwise>
	</c:choose>
	<c:import url="DisplayItem.jsp" />
</body>
</html>