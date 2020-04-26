package lesson.j2ee.ex4;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
/**
 * 统计选择light啤酒人数
 * @author future
 *
 */
public class BeerRequestFilter implements Filter {
	private static int lCount = 0;
	FilterConfig config = null;
	@Override
	public void destroy() {
	this.config = null;

	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpReq = (HttpServletRequest) req;
		String color = httpReq.getParameter("color");
		if (color != null) {
			if("light".equals(color)){
				lCount++;
				System.out.println("BeerRequestFilter:light Beer " + lCount);
				chain.doFilter(req, resp);
			}else {
				System.out.println("BeerRequestFilter:Nobody selects the light Beer!");
				chain.doFilter(req, resp);
			}
			
		}else {
			chain.doFilter(req, resp);
			System.out.println("BeerRequestFilter:Welcome to the beer world!");
		}
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;
	}

}
