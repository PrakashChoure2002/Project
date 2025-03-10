package com.freshThreads.dto;

import java.time.LocalDate;

import com.freshThreads.entities.UserRoles;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserAuthDTO {
	@NotBlank(message="Name is required")	
private String name;
	
@NotBlank(message="Email is required")
@Email(message="Invalid email formate")
	private String email;
	
    private String phoneNumber;

    @NotBlank(message="Email is required")
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password format!!!!")
     private String password;
    
    
    @NotNull(message = "User role must not be null")
     private UserRoles userRoles;
    private String city;
    private String address;
	
	

}
