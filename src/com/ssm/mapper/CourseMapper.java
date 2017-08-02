package com.ssm.mapper;

import java.util.List;

import com.ssm.model.Course;
import com.ssm.model.vo.CourseVo;

public interface CourseMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Course record);

    int insertSelective(Course record);

    List<Course> selectByPrimaryKey();

    int updateByPrimaryKeySelective(Course record);

    int updateByPrimaryKey(Course record);
    
    List<CourseVo> selectById();

	List<CourseVo> selectByTypeAndPage(Integer pageStar, Integer pagesize);
}