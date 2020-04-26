package ex2;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
/*
 * 购物车处理
 */
public class ShoppingCart extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		//取得Session，如果Session不存在，为本次会话创建对象
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(3*60);//设置session的有效时间
		Integer itemCount = (Integer)session.getAttribute("itemCount");
		if (itemCount == null)
			itemCount = new Integer(0);	
		//创建输出流，取一个响应客户端的流对象
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		String[] itemsSelected;//被选择的选项
		String itemName;
		//接收传来的参数
		itemsSelected = request.getParameterValues("item");
		if(itemsSelected != null){
			for(int i = 0 ; i <itemsSelected.length;i++){
				itemName = itemsSelected[i];
				itemCount = new Integer(itemCount.intValue() + 1 );
				//更新session
				//购买的每条记录
				session.setAttribute("item"+itemCount, itemName);
				//购买的总次数
				session.setAttribute("itemCount", itemCount);
			}
			
			out.println("<html>");
			out.println("<title>");
			out.println("item list");
			out.println("</title>");
			out.println("<body><h4>Session List:</h4><hr><br><br>");
			for(int i = 1 ;i <= itemCount.intValue(); i ++){
				out.println("item" + i);
				out.println(session.getAttribute("item" + i ) + "<hr>");
			}
			out.println("</body>");
			out.println("</html>");
			out.close();
		}
//		session.invalidate();	//销毁session
	}
}
