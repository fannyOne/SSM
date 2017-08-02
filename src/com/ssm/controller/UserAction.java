package com.ssm.controller;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssm.filter.AuthPassport;
import com.ssm.model.User;
import com.ssm.service.UserService;
import com.ssm.util.RedisCacheUtil;


@Controller
public class UserAction {
	@Autowired
	private UserService userService;
	
	/*@Autowired
	private RedisCacheUtil redisCacheUtil;*/
	
/*	@AuthPassport
	@RequestMapping(value="/login")
	public String index(HttpServletRequest request,HttpServletResponse response,ModelMap model){
		User user=userService.SelectById(1);
		HttpSession sessiom=request.getSession();
		sessiom.setAttribute("user", user);
		model.put("user", user);	
		return "index";
	}*/
	@RequestMapping(value="/")
	public String index(HttpServletRequest request,HttpServletResponse response,ModelMap model){
	
		return "index";
	}
	//用户登录 根据用户名密码+验证码（验证码）+MD5加密
	@AuthPassport
	@RequestMapping(value="/login")
	public String login(HttpServletRequest request,HttpServletResponse response,Model model,HttpSession session,String uname,String upwd)throws IOException{
		//User u=UserService.SelectUser(uname,upwd);
		User u=userService.SelectUser(uname, upwd);
		Map<String,Object> map=new  HashMap<String,Object>();
		response.setContentType("text/html;charset=UTF-8");
		if(u!=null){
			/*if(redisCacheUtil.getCacheObject("user")==null){
				redisCacheUtil.setCacheObject("user", u);
			}
			System.out.println(redisCacheUtil.getCacheObject("user"));*/
			map.put("msg", "");
			//model.addAttribute("userInfo", u);
			map.put("userInfo", u);
			session.setAttribute("user", u);
			//return "user/showInfo";
			return "redirect:/members/index";
		}else{
			//model.addAttribute("msg", "用户名或密码错误");
			session.setAttribute("msg", "用户名或密码错误");
			return "redirect:/";
		}
	}
	@RequestMapping(value="loginout")
	public String loginout(HttpServletRequest request,HttpServletResponse response,Model model,HttpSession session){
		session.removeAttribute("user");
		return "redirect:/login";
		
	}
}
