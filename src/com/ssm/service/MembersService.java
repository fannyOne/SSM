package com.ssm.service;

import java.util.List;

import com.ssm.model.Members;

public interface MembersService {
	
	List<Members> selectList();
	
	List<Members> selectListByKey(String key);

	int insertSelective(Members members);

	int insert(Members members);

	int deleteByPrimaryKey(Integer m_id);

}
