<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="SimpleTag" prefix="mytag"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Select a color for beers</title>
</head>
<body>
	<%@ include file="Header_ins.jsp"%>
	<h1 align="center">Beer Selection Page</h1>
	<form method="post" action="BeerList.jsp">
		This application has been visited
		<mytag:simple1/>
		times.
		<p>There are kinds of beer for choose.
		<p>
		<mytag:simple2/>
		<center>
			<input type="SUBMIT" value="Submit">
		</center>
	</form>
</body>
</html>