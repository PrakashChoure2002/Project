package com.freshThreads.service;

import com.freshThreads.dto.AuthRequest;
import com.freshThreads.dto.Signup;
import com.freshThreads.dto.UserAuthDTO;
import com.freshThreads.dto.UserResDTO;

import jakarta.validation.Valid;

public interface UserService {

	UserResDTO authamticate(AuthRequest dto);

//	Signup userSignUp( @Valid Signup dto);
	
	Signup userRegistration(Signup reqDTO);

}
