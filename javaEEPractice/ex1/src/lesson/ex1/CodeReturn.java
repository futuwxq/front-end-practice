package lesson.ex1;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
/**
 * 下载一个jar文件
 * @author future
 *
 */
public class CodeReturn extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws IOException, ServletException {
//		让浏览器知道这是一个JAR文件
		response.setContentType("application/jar");
		ServletContext ctx = getServletContext();
//		为资源建立一个输入流
		InputStream is = ctx.getResourceAsStream("/resources/bookCode.jar");
		int read = -1;
		byte[] bytes = new byte[1024];
		OutputStream os = response.getOutputStream();
		while ((read = is.read(bytes))!=-1) {
			os.write(bytes,0,read);
		}
		os.flush();
		os.close();

	}
}
