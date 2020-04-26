package lesson.j2ee.ex3;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;
/**
 * 统计用户选择每种啤酒颜色的数量并输出
 * @author future
 *
 */
public class SelectSimpleTag3 extends SimpleTagSupport {
//	private String sessionLists;
private String sessionLists;
	public void setSessionLists(String sessionLists) {
		this.sessionLists = sessionLists;
	}
	public void doTag() throws JspException, IOException {
		 int lightCount = 0;
		 int brownCount = 0;
		 int amberCount = 0;
		 int darkCount = 0;
		String sessionList[] = sessionLists.split(",");	
		System.out.println(sessionList);
		System.out.println(456);
		for (int i = 1; i < sessionList.length; i++) {	
			if(" light".equals(sessionList[i])){
				lightCount++;
			}else if(sessionList[i].equals(" brown")){
				brownCount++;
			}else if(sessionList[i].equals(" amber")){
				amberCount++;
				System.out.println(brownCount);
			}else if(sessionList[i].equals(" dark")){
				darkCount++;
			}			
	}
		System.out.println(lightCount);
		System.out.println(brownCount);
		getJspContext().setAttribute("lightCount", lightCount);	
		getJspContext().setAttribute("brownCount", brownCount);	
		getJspContext().setAttribute("amberCount", amberCount);	
		getJspContext().setAttribute("darkCount", darkCount);	
		getJspBody().invoke(null);
	}
}
