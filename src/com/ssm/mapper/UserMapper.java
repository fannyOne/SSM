package com.ssm.mapper;

import org.springframework.stereotype.Service;

import com.ssm.model.User;
@Service("userMapper")
public interface UserMapper {

    User selectByPrimaryKey(Integer id);

	User SelectUser(String uname, String upwd);

}