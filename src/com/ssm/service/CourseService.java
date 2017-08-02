package com.ssm.service;

import java.util.List;

import com.ssm.model.Course;
import com.ssm.model.vo.CourseVo;

public interface CourseService {
	
	List<CourseVo> selectByType();

	List<CourseVo> selectByTypeAndPage(Integer pageStar, Integer pagesize);
	
	List<Course> selectByPrimaryKey();
}
