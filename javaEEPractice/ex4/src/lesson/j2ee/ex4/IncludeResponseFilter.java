package lesson.j2ee.ex4;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
/**
 * 对动态Include的页面顶端加一条文字“This is an included section!”
 * @author future
 *
 */
public class IncludeResponseFilter implements Filter {
	protected FilterConfig config;
	@Override
	public void destroy() {
		this.config = null;

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		CoverResponse cr = new CoverResponse((HttpServletResponse)response);
		chain.doFilter(request, cr);
		String content = cr.getContent();
		content = "This is an included section!"+ "<br>" + content;
		response.getWriter().print(content);

	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;

	}

}
