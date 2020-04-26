package lesson.j2ee.ex4;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/***
 * 实现对除了首页SelectBeer.jsp之外所有通过get方法访问页面请求的过滤
 * @author future
 *
 */
public class GetRequestFilter implements Filter {
	protected FilterConfig config;
	@Override
	public void destroy() {
		this.config = null;

	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpreq = (HttpServletRequest) req;
		HttpServletResponse httprep = (HttpServletResponse) resp;
		String redirectPath = httpreq.getContextPath() + config.getInitParameter("redirectPath");
		String includePage = config.getInitParameter("includePage");
		 String method = httpreq.getMethod();
		 System.out.println(method);
		 if(method != null) {
			 if(!method.equals("GET")){
				 chain.doFilter(req, resp);
				return; 
			 } else if (httpreq.getRequestURI().indexOf(includePage) != -1){
				 System.out.println("不过滤首页");
				 chain.doFilter(req, resp);
				 return;
				
			 }else {
				 System.out.println("get请求");
				 httprep.sendRedirect(redirectPath);
				 return; 
			 }
		 } else {
			 chain.doFilter(req, resp);
		 }

	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;
	}

}
