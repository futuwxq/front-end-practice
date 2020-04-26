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

/**
 * URL地址过滤处理，只允许访问在过滤器初始化参数中配置的页面类型
 * 
 * @author future
 *
 */
public class URLRequestFilter implements Filter {
	private FilterConfig config = null;

	@Override
	public void destroy() {
		this.config = null;

	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;

	}

	public static boolean isContains(String container, String[] regx) {
		boolean result = false;

		for (int i = 0; i < regx.length; i++) {
			if (container.indexOf(regx[i]) != -1) {
				return true;
			}
		}
		return result;
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpreq = (HttpServletRequest) req;
		HttpServletResponse httprep = (HttpServletResponse) resp;
		String redirectPath = httpreq.getContextPath() + config.getInitParameter("redirectPath");
		String disableFilter = config.getInitParameter("disableFilter");
		String includeStrings = config.getInitParameter("includeStrings");
		String[] includeList = includeStrings.split(";");
		// System.out.println(includeStrings);
		if (disableFilter.toUpperCase().equals("Y")) {
			System.out.println("disableFilter : Y");
			chain.doFilter(req, resp);
			return;
		}
		if (disableFilter.toUpperCase().equals("N")) {
			System.out.println("disableFilter : N");
			if (URLRequestFilter.isContains(httpreq.getRequestURI(), includeList)) {// 对指定过滤参数之外后缀进行过滤
				chain.doFilter(req, resp);
				return;
			} else {
				System.out.println("includeStrings no");
				httprep.sendRedirect(redirectPath);
				return;
			}

		} else {

			System.out.println("disableFilter : others");
			chain.doFilter(req, resp);
		}
	}

}
