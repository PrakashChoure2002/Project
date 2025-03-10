package com.freshThreads.dto;

import java.time.LocalDate;

import com.freshThreads.entities.UserRoles;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserResDTO {
	
	private String name;
	
	private String email;
	
    private String phoneNumber;
	
	private String address;
	
	private String password;
	
	private String city;

	private UserRoles userRoles;
	
	private LocalDate pickUpDate;

}
