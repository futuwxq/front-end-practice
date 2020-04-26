package lesson.j2ee.ex3;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

/**
 * ¼ÆÊý±êÇ©
 * @author future
 *
 */
public class CounterTag extends TagSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static int counter = 1;
	public int doStartTag() throws JspException{
		try {
			 JspWriter out = pageContext.getOut();
			 out.print(counter);
			 setCounter();
		} catch (java.io.IOException e) {
			throw new JspTagException(e.getMessage());
		} 
		return SKIP_BODY;
	}
	public int getCounter() {
		return counter;
	}

	public void setCounter() {
		counter++;
	}
}
