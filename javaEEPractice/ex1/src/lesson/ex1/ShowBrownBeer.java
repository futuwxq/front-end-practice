package lesson.ex1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 * Êä³öbrownÑÕÉ«
 * @author future
 *
 */
public class ShowBrownBeer extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws IOException{
		PrintWriter out = response.getWriter();
		out.println("<html> " + "<body>"
				+ "My selected beer color is: " + "brown" + "</body>" + "</html>");	
	}

}
