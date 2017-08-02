package com.ssm.mapper;

import org.springframework.stereotype.Service;

import com.ssm.model.University;

@Service("universityMapper")
public interface UniversityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(University record);

    int insertSelective(University record);

    University selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(University record);

    int updateByPrimaryKey(University record);
}