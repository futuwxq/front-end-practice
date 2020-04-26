package ex2;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/***
 * cookie保存用户名和用户密码
 * @author future
 *
 */
public class LoginServlet extends HttpServlet {
	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 String name = request.getParameter("name");
		    String pwd = request.getParameter("pwd");
		    String flag = request.getParameter("isLogin");
		    //用户的初试名是admin，初试密码是123
		    if (!"admin".equals(name) && !"123".equals(pwd)) {
		        response.sendRedirect("fail.html");
		    } else {
		        if ("on".equals(flag)) {
		            //创建两个Cookie对象
		            Cookie nameCookie = new Cookie("username", name);
		            //设置Cookie的有效期为3天
		            nameCookie.setMaxAge(60 * 60 * 24 * 3);
		            Cookie pwdCookie = new Cookie("password", pwd);
		            pwdCookie.setMaxAge(60 * 60 * 24 * 3);
		            response.addCookie(nameCookie);
		            response.addCookie(pwdCookie);
		        }
		        response.sendRedirect("success.html");
		    }
	 }

}
