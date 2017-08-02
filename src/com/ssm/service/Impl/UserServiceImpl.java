package com.ssm.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssm.mapper.UserMapper;
import com.ssm.model.User;
import com.ssm.service.UserService;
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserMapper userMapper;
	
	public User SelectById(Integer id){
		return userMapper.selectByPrimaryKey(id);
	}

	public User SelectUser(String uname, String upwd) {
		// TODO Auto-generated method stub
		return userMapper.SelectUser(uname,upwd);
	}

}
