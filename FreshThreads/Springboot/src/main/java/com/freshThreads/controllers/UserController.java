package com.freshThreads.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.freshThreads.dto.SigninRequest;
import com.freshThreads.dto.SigninResponse;
import com.freshThreads.dto.Signup;
import com.freshThreads.security.JwtUtils;
import com.freshThreads.service.UserService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/users")

public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private AuthenticationManager authMgr;

	public UserController() {
		System.out.println("in ctor : " + getClass());
	}


	
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid SigninRequest request) {
		System.out.println("in sign in" + request);//=> email n password : valid(P.L)
		// 1. create a token(implementation of Authentication i/f)
		// to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token = 
				new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		//2.  invoke auth mgr's authenticate method;
		Authentication verifiedToken = authMgr.authenticate(token);
		System.out.println("sucessfull"+verifiedToken);
		System.out.println("sucessfull"+verifiedToken.getPrincipal().getClass());

			// => authentication successful !
			//3. In case of successful auth,  
		//create JWT n send it to the clnt in response
		SigninResponse resp = new SigninResponse
				(jwtUtils.generateJwtToken(verifiedToken), "Successful Auth!!!!");
		return ResponseEntity.status(HttpStatus.CREATED).body(resp);
	}
	
	 
	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@RequestBody @Valid Signup dto) {
		System.out.println("in sign up " + dto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(userService.userRegistration(dto));
	}
	
	

}
