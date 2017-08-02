package com.ssm.mapper;

import java.util.List;

import com.ssm.model.Members;

public interface MembersMapper {
    int deleteByPrimaryKey(Integer mId);

    int insert(Members record);

    int insertSelective(Members record);

    Members selectByPrimaryKey(Integer mId);

    int updateByPrimaryKeySelective(Members record);

    int updateByPrimaryKey(Members record);

	List<Members> selectList();

	List<Members> selectListByKey(String key);
}