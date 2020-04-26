package ex2;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * 使用cookie输出登录信息
 */
public class Login extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		String name = request.getParameter("name");
		boolean judge = false;
		// 获取cookie
		Cookie cookies[] = request.getCookies();
		if (cookies != null) {
			for (int i = 0; i < cookies.length; i++) {
				// 找到名为name的cookie
				if (cookies[i].getName().equals("name")) {
					cookies[i].setValue(name);
					judge = false;// cookie已经赋值
				}
			}
			// 如果cookie还没有生成，就新建一个cookie
			if (judge) {
				Cookie cookie = new Cookie("name", name);
				// 设置cookie的生命周期
				cookie.setMaxAge(12 * 60 * 60);
				response.addCookie(cookie);
			}

			PrintWriter out = response.getWriter();
			out.println("<html>");
			out.println("<title>");
			out.println("用户列表");
			out.println("</title>");
			out.println("<body><h4>用户列表：</h4><hr><br><br>");
			for (int i = 0; i < cookies.length; i++) {
				if (cookies[i].getName().equals("name")) {
					out.print("用户名：" + cookies[i].getValue());
				}
			}

			out.println("</body>");
			out.println("</html>");
			out.close();

		}
	}
}
