package lesson.j2ee.ex3;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

/**
 * 自定义选择标签
 * @author future
 *
 */
public class CreateSelectTag  extends TagSupport{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

public int doStartTag() throws JspException {
	try {
		JspWriter out = pageContext.getOut();
		String outPrint = "";
		String[] color = { "light", "amber", "brown", "dark" };
		outPrint += "<select name='color' size='1'>";
		for (int i = 0; i < color.length; i++) {
			outPrint += "<option>";
			outPrint += color[i];
			outPrint += "</option>";
		}
		outPrint += "</select>";
		out.print(outPrint);
	} catch (Exception e){
		throw new JspTagException(e.getMessage());
	}
	return SKIP_BODY;
	
}
}
