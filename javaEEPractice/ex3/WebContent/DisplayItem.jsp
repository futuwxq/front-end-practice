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
	<c:set var="sessionList" scope="session" value="${sessionList}, ${param.color}"></c:set>
	<h1 align="center">The beer corlor that you selected is ${param.color}.</h1>
	<b>
		<a href="SelectedBeerColor.jsp">(View the selected beer colors).</a>
	</b>
	<p>
		<b>Choose following information:</b>
	</p>
	<form method="post" action="ShoppingCart.do">
		<table width="500" border="0" cellspacing="0" cellpadding="0">
			<c:forEach var="color" items="${sessionList}" varStatus="colorLoopCount">
				<tr>
					<td width="69">
						<input type="checkbox" name="item" value='The  ${color} beer of China'>
					</td>
					<td width="431">Item ${colorLoopCount.count}: The ${color} beer of China</td>
				</tr>
			</c:forEach>
		</table>
		<hr>
		<p>
		<center>
			<input type="submit" name="btn_submit" value="Buy Now">
		</center>
	</form>


</body>
</html>