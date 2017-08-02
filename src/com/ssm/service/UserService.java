package com.ssm.service;

import com.ssm.model.User;

public interface UserService {

	
	User SelectById(Integer id);
	
	User SelectUser(String uname, String upwd);
	
}
