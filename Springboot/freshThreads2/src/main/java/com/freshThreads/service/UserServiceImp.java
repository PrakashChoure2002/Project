package com.freshThreads.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freshThread.exceptions.ResourceNotFoundException;
import com.freshThreads.dao.UserDao;
import com.freshThreads.dto.AuthRequest;
import com.freshThreads.dto.Signup;
import com.freshThreads.dto.UserAuthDTO;
import com.freshThreads.dto.UserResDTO;
import com.freshThreads.entities.Users;

import jakarta.validation.Valid;

@Service
@Transactional
public class UserServiceImp implements UserService {
	@Autowired
	private UserDao userdao;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private PasswordEncoder encoder;


	@Override
	public UserResDTO authamticate(AuthRequest dto) {
		Optional<Users> optional = userdao.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		Users user = optional.orElseThrow(()->new ResourceNotFoundException("Invalid password"));
		
		
		
		return modelMapper.map(user, UserResDTO.class);
	}


	
	@Override
	public Signup userRegistration(Signup dto) {
	    Optional<Users> existingUser = userdao.findByEmail(dto.getEmail());
	    if (existingUser.isPresent()) {
	        throw new RuntimeException("User with email already exists!");
	    }

	    // Debug: Print incoming DTO
	    System.out.println("Incoming DTO: " + dto);
	    System.out.println("DTO Role Before Mapping: " + dto.getUserRoles());

	    // Map DTO to entity using ModelMapper
	    Users user = modelMapper.map(dto, Users.class);

	    // Debug: Print mapped user entity
	    System.out.println("Mapped User Role After Mapping: " + user.getUserRoles());

	    // Set user roles and encode password
	    user.setUserRoles(dto.getUserRoles());
	    user.setPassword(encoder.encode(dto.getPassword()));

	    // Save the user to the database
	    Users savedUser = userdao.save(user);

	    // Debug: Print saved user entity
	    System.out.println("Saved User Role: " + savedUser.getUserRoles());

	    return modelMapper.map(savedUser, Signup.class);
	}

//	 @Override
//	    public UserAuthDTO userSignUp(UserAuthDTO dto) {
//	        // Check if the user already exists
//	        Optional<Users> existingUser = userdao.findByEmail(dto.getEmail());
//	        if (existingUser.isPresent()) {
//	            throw new RuntimeException("User with email already exists!");
//	        }
//
//	        // Map DTO to entity using ModelMapper
//	        Users user = modelMapper.map(dto, Users.class);
//
//	       
//	        user.setPassword(dto.getPassword());
//
//
//	        // Save the user to the database
//	        Users savedUser = userdao.save(user);
//
//	       
//	        return modelMapper.map(savedUser, UserAuthDTO.class);
//	    }
	
	
	
//	 public Signup userSignUp(Signup dto) {
//	        // Check if the user already exists
//	        Optional<Users> existingUser = userdao.findByEmail(dto.getEmail());
//	        if (existingUser.isPresent()) {
//	            throw new RuntimeException("User with email already exists!");
//	        }
//
//	        // Map DTO to entity using ModelMapper
//	        Users user = modelMapper.map(dto, Users.class);
//
//	       
//	        user.setPassword(dto.getPassword());
//
//
//	        // Save the user to the database
//	        Users savedUser = userdao.save(user);
//
//	       
//	        return modelMapper.map(savedUser, UserAuthDTO.class);
//	    }

}
