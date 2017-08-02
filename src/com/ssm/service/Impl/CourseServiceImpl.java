package com.ssm.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.CourseMapper;
import com.ssm.model.Course;
import com.ssm.model.vo.CourseVo;
import com.ssm.service.CourseService;

@Service("courseService")
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseMapper courseMapper;
	
	public List<CourseVo> selectByType() {
		// TODO Auto-generated method stub
		return courseMapper.selectById();
	}
	
	public List<CourseVo> selectByTypeAndPage(Integer pageStar, Integer pagesize) {
		// TODO Auto-generated method stub
		return courseMapper.selectByTypeAndPage(pageStar,pagesize);
	}

	public List<Course> selectByPrimaryKey() {
		// TODO Auto-generated method stub
		return courseMapper.selectByPrimaryKey();
	}

}
