package lesson.j2ee.ex4;

import java.io.IOException;
import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.*;

/**
 * ¼ÆÊý±êÇ©
 *
 */
public class CounterTag extends SimpleTagSupport {

	private static int counter = 1;

	public void doTag() throws JspException, IOException {
		getJspContext().getOut().print(counter);
		counter++;
	}
}
