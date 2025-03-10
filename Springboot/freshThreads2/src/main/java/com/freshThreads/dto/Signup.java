package com.freshThreads.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.freshThreads.entities.UserRoles;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Signup {
    @JsonProperty(access = Access.READ_ONLY) // This property is only used during serialization
    private Long id;

    @NotBlank(message = "First Name required")
    private String name;

    @Email(message = "Invalid Email!!!")
    private String email;

    @JsonProperty(access = Access.WRITE_ONLY) // This property is only used during deserialization
    private String password;

    
    @Enumerated(EnumType.STRING)
    private UserRoles userRoles;

    public Signup(String name, String email, String password, UserRoles userRoles) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userRoles = userRoles;
    }
    
    // Lombok will generate these, but explicitly defining them is fine
    public UserRoles getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(UserRoles userRoles) {
        this.userRoles = userRoles;
    }
}
