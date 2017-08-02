package com.ssm.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.MembersMapper;
import com.ssm.model.Members;
import com.ssm.service.MembersService;

@Service("membersService")
public class MembersServiceImpl implements MembersService {
	
	@Autowired
	private MembersMapper membersMapper;
	
	/**
	 * 查询会员列表
	 * **/
	public List<Members> selectList() {
		// TODO Auto-generated method stub
		return membersMapper.selectList();
	}
	
	/**
	 * 查询会员消费
	 * **/
	public List<Members> selectListByKey(String key) {
		// TODO Auto-generated method stub
		return membersMapper.selectListByKey(key);
	}

	public int insertSelective(Members members) {
		// TODO Auto-generated method stub
		return membersMapper.insertSelective(members);
	}

	public int insert(Members members) {
		// TODO Auto-generated method stub
		return membersMapper.insert(members);
	}

	public int deleteByPrimaryKey(Integer m_id) {
		// TODO Auto-generated method stub
		return membersMapper.deleteByPrimaryKey(m_id);
	}

}
