package lesson.j2ee.ex3;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * ¼ÆÊý±êÇ©
 * @author future
 *
 */
public class CounterSimpleTag1 extends SimpleTagSupport {
	private static int counter = 1;
	public void doTag() throws JspException,IOException{
		getJspContext().getOut().print(counter);
	}
	public int getCounter() {
		return counter;
	}

	public void setCounter() {
		counter++;
	}
}
