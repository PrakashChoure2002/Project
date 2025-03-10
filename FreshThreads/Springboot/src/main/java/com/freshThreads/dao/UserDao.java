package com.freshThreads.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freshThreads.entities.Users;


public interface UserDao extends JpaRepository<Users, Long> {
	//SIGN IN
	Optional<Users>findByEmailAndPassword(String email,String password);
//	SIGN UP
	Optional<Users> findByEmail(String email);


}
