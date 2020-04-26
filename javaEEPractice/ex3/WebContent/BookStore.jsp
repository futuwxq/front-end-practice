<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1 align="center">A Book Store</h1>
	<hr>
	<h4>Choose following information</h4>
	<form method="post" action="ShowCart.jsp">
		<table >
			<tr>
				<td >
					<input type="checkbox" name="item" value="Thinking in Java">
				</td>
				<td>Item1: Thinking in Java</td>
			</tr>
			<tr>
				<td >
					<input type="checkbox" name="item" value="Head first servlets and JSP">
				</td>
				<td >Item2: Head first servlets and JSP</td>
			</tr>
			<tr>
				<td>
					<input type="checkbox" name="item" value="Enterprise JavaBeans 3.0">
				</td>
				<td>Item3: Enterprise JavaBeans 3.0</td>
			</tr>
		</table>
		<hr>
		<p>
			<input type="submit" name="btn_submit" value="Buy Now">
		</p>
	</form>
</body>
</html>