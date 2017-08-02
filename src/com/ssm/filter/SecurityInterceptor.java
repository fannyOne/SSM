package com.ssm.filter;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.model.User;
import com.ssm.service.UserService;

public class SecurityInterceptor implements HandlerInterceptor{
	
	@Autowired
	private UserService userService;
	
	 private List<String> excludedUrls;

	    public void setExcludedUrls(List<String> excludedUrls) {
	        this.excludedUrls = excludedUrls;
	    }

	
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2, ModelAndView arg3) throws Exception {
		// TODO Auto-generated method stub
		
	}

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj) throws Exception {
		// TODO Auto-generated method stub
		
		String requestUrl=request.getRequestURI();
		for(String url:excludedUrls){
			if(requestUrl.endsWith(url)){
				return true;
			}
		}
		
		User user=userService.SelectById(1);
		HttpSession sessiom=request.getSession();
		sessiom.setAttribute("user", user);
		if(sessiom.getAttribute("user")==null){
			return true;
			//throw new AuthorizationException();
		}else{
			return false;
			
		}
	}

}
