package lesson.ex1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;

public class FirstServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws IOException{
		PrintWriter out = response.getWriter();
		java.util.Date today = new java.util.Date();
		out.println("<html> " + "<body>"
				+ "<h1 align=center>My First Servlet</h1>" + "<br>"
				+ today + "</body>" + "</html>");
	}
}
