package lesson.j2ee.ex4;

import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

/**
 *  使用java.io.CharArrayWriter类对输出的文本结果进行包装
 *  
 * @author future
 *
 */
public class CharResponseWrapper extends HttpServletResponseWrapper {
	protected CharArrayWriter charWriter; // 将响应缓存在这个写入器中
	protected PrintWriter writer;
	protected boolean getOutputStreamCalled;
	protected boolean getWriterCalled;

	public CharResponseWrapper(HttpServletResponse response) {
		super(response);
		// 创建writer
		charWriter = new CharArrayWriter();
	}

	/**
	 * 重载getOutputStream()方法
	 */
	public ServletOutputStream getOutputStream() throws IOException {
		// 如果getWriter()方法被调用了，就不能调用getOutputStream()方法
		if (getWriterCalled) {
			throw new IllegalStateException("getWriter already called");
		}
		getOutputStreamCalled = true;
		return super.getOutputStream();
	}

	/**
	 * 重载getWriter()方法
	 */
	public PrintWriter getWriter() throws IOException {
		if (writer != null) {
			return writer;
		}
		// 如果getOutputStream()方法被调用了，就不能调用方法getWriter()
		if (getOutputStreamCalled) {
			throw new IllegalStateException("getOutputStream already called");
		}
		getWriterCalled  =true;
		writer = new PrintWriter(charWriter);
		return writer;
	}
	
	/**
	 * 将响应数据用字符串返回
	 */
	public String toString() {
		String s = null;
		if(writer != null){
			s = charWriter.toString();
		}
		return s;
	}
	
}
