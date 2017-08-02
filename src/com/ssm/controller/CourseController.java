package com.ssm.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper; 
import org.codehaus.jackson.map.ObjectWriter;  




import com.ssm.filter.AuthPassport;
import com.ssm.model.Course;
import com.ssm.model.vo.CourseVo;
import com.ssm.service.CourseService;
import com.ssm.util.RedisCacheUtil;


@Controller
@RequestMapping("/course")
public class CourseController {
	
	
	@Autowired
	CourseService courseService;
	
	@Autowired
	private RedisCacheUtil redisCacheUtil;
	
	@AuthPassport
	@RequestMapping("/index")
	public String index(HttpServletRequest request,HttpServletResponse response,Model model,Integer pageStar){
		List<CourseVo> listcount=courseService.selectByType();
		//总记录数
		
		
		
		Integer count=listcount.size();
		if(pageStar==null||pageStar<0){
			pageStar=0;
		}else if(pageStar>count){
			pageStar=pageStar-10;
		}
		Integer pagesize=10;
		//总页数
		Integer countpage= (int) Math.ceil(count/pagesize);
		//分页列表
		List<CourseVo> list=courseService.selectByTypeAndPage(pageStar,pagesize);
		
		Integer pageIndex=(int) Math.ceil((pageStar+10)/10);
		model.addAttribute("count", count);
		model.addAttribute("countpage", countpage*10);
		model.addAttribute("pageStar",pageStar+10);
		model.addAttribute("countp", countpage+1);
		//当前页数
		model.addAttribute("pageIndex",pageIndex);
		model.addAttribute("list", list);
		
		//redisCacheUtil.setCacheList("courseVo", list);
		List ls = new ArrayList();
		ls.add("feng");
		ls.add("zhi");
		ls.add("ming");
		ls.add("luo");
		redisCacheUtil.setCacheList("ls", ls);
		//redisCacheUtil.setCacheObject("luobaozi", "luoyunyi");
		ls.clear();
		ls = redisCacheUtil.getCacheList("ls");
		for (int i = 0; i < ls.size(); i++) {
			System.out.println(ls.get(i));
		}
		return "course";
	}
	@RequestMapping("/myjsp")
	public String myjsp(HttpServletRequest request,HttpServletResponse response,Model model){
		
		return "MyJsp";
		
	}
	@RequestMapping(value="/page",method=RequestMethod.GET)
	public Map<String,Object> page(HttpServletRequest request,HttpServletResponse response,Model model,Integer pageStar) throws JsonGenerationException, JsonMappingException, IOException{
		Map<String,Object> params=new HashMap<String,Object>();
		List<CourseVo> listcount=courseService.selectByType();
		//总记录数
		Integer count=listcount.size();
		if(pageStar==null||pageStar<0){
			pageStar=0;
		}else if(pageStar>count){
			pageStar=pageStar-10;
		}
		Integer pagesize=10;
		//总页数
		Integer countpage= (int) Math.ceil(count/pagesize);
		//分页列表
		List<Course> list=courseService.selectByPrimaryKey();
		
		Integer pageIndex=(int) Math.ceil((pageStar+10)/10);
		model.addAttribute("count", count);
		model.addAttribute("countpage", countpage*10);
		model.addAttribute("pageStar",pageStar+10);
		model.addAttribute("countp", countpage+1);
		//当前页数
		model.addAttribute("pageIndex",pageIndex);
		model.addAttribute("list", list);
		ObjectMapper mapper=new ObjectMapper();
		
		params.put("count", count);
		params.put("countp", countpage+1);
		params.put("list", list);
		ObjectWriter writer=mapper.viewWriter(Course.class);
		//String json=writer.writeValueAsString(list);
		return params;		
	}
	
/*	@RequestMapping("/page2")
	public String page2(int id, int page){
      int pageIndex = 1;//当前页
      const int pageSize = 2;//这里用来设置每页要展示的数据数量，建议把这个写到web.config中来全局控制
      //获取需要展示的部门数据
      List<CourseVo> list=courseService.selectByType();	
      //IEnumerable<MODEL.qgoa_department> list = OperateContext.Current.BLLSession.Iqgoa_departmentBLL.GetPagedList(pageIndex, pageSize, x => x.Id!=null, x=>x.Id);
      //得到数据的条数
      int rowCount = list.Count();
      //通过计算，得到分页应该需要分几页，其中不满一页的数据按一页计算
      if(rowCount%pageSize!=0)
      {
        rowCount = rowCount / pageSize + 1;
      } else{
        rowCount = rowCount / pageSize;
      }

      //转成Json格式
      var strResult = "{\"pageCount\":"+rowCount+",\"CurrentPage\":"+pageIndex+",\"list\":" + JsonConvert.SerializeObject(list) + "}";
      return Json(strResult, JsonRequestBehavior.AllowGet);
    }*/
	
	public ActionResult GetDate(int id, int page)
    {
      int pageIndex = page;//当前页
      int pageSize = 10;//这里用来设置每页要展示的数据数量，建议把这个写到web.config中来全局控制
    //分页列表
      List<CourseVo> list=courseService.selectByTypeAndPage(pageIndex,pageSize);
      //IEnumerable<MODEL.qgoa_department> list = OperateContext.Current.BLLSession.Iqgoa_departmentBLL.GetPagedList(pageIndex, pageSize, x => x.Id!=null, x=>x.Id);
      //得到数据的条数
      List<CourseVo> listcount=courseService.selectByType();
		//总记录数
	  Integer count=listcount.size();
	  
     // int rowCount = list.Count();
      //通过计算，得到分页应该需要分几页，其中不满一页的数据按一页计算
      if(count%pageSize!=0)
      {
    	  count = count / pageSize + 1;
      }
      else
      {
    	  count = count / pageSize;
      }

      //转成Json格式
      //String strResult = "{\"pageCount\":"+count+",\"CurrentPage\":"+pageIndex+",\"list\":" + JsonConvert.SerializeObject(list) + "}";
      //return Json(strResult, JsonRequestBehavior.AllowGet);
      return Json(count);
      
      
    }
private ActionResult Json(Integer count) {
	// TODO Auto-generated method stub
	return null;
}
}
