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
 * 实现对页面上输出文本的大写转化
 * @author future
 *
 */
public class UpperCaseFilter implements Filter {
	protected FilterConfig config;
	@Override
	public void destroy() {
		this.config = null;

	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
	ServletResponse newResponse = resp;
	if(req instanceof HttpServletRequest) {
		newResponse = new CharResponseWrapper((HttpServletResponse)resp);
	}
	// 执行doFilter方法，注意此处响应对象已经变化
	chain.doFilter(req, newResponse);
	// 以下执行响应过滤
	if(newResponse instanceof CharResponseWrapper){
		String text = newResponse.toString(); //调用包装响应里面重写的方法获得页面的所有文本
		if(text != null){
			text = text.toUpperCase();
     //将输出的内容传给真正的输出流返回客户端
			resp.getWriter().write(text);
			}
	}
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;

	}

}
