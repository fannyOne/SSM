package com.ssm.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssm.model.Members;
import com.ssm.service.MembersService;


@Controller
@RequestMapping("/members")
public class MembersController {
	
	@Autowired
	private MembersService membersService;
	
	@RequestMapping("/index")
	public String index(HttpServletRequest request,HttpServletResponse response,Model model){		
		List list=membersService.selectList();
		model.addAttribute("list", list);
		return "/members-list";
	}
	
	@RequestMapping("/add")
	public String add(HttpServletRequest request,HttpServletResponse response,Model model){		
		return "/addMember";
	}
	
	@RequestMapping("/addsave")
	public String addsave(HttpServletRequest request,HttpServletResponse response,Model model,Members members){	
		int result=membersService.insert(members);
		if(result>0){
			return "redirect:/members/index";
		}
		return "/add";
	}
	
	@RequestMapping("/deleteMember")
	public String deleteMember(HttpServletRequest request,HttpServletResponse response,Model model,Integer m_id){	
		int result=membersService.deleteByPrimaryKey(m_id);
		if(result>0){
			return "redirect:/members/index";
		}
		return "/add";
	}
	
	@RequestMapping("/updateMember")
	public String updateMember(HttpServletRequest request,HttpServletResponse response,Model model,Members members){	
		int result=membersService.insert(members);
		if(result>0){
			return "redirect:/members/index";
		}
		return "/add";
	}
	
	@RequestMapping("/search")
	public String search(HttpServletRequest request,HttpServletResponse response,Model model,String key){	
		List list=membersService.selectListByKey(key);
		model.addAttribute("list", list);
		return "/members-list";
	}
	
	@InitBinder  
	public void initBinder(WebDataBinder binder) {  
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");  
	    dateFormat.setLenient(false);  
	    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false)); 
	}

}
