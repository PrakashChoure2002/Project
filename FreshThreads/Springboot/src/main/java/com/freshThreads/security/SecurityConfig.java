package com.freshThreads.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.AllArgsConstructor;

@EnableWebSecurity // - required in earlier spring sec versions -enabled by default
@Configuration // equivalent to bean config xml file
@AllArgsConstructor
public class SecurityConfig {

	private PasswordEncoder encoder;
	private CustomJwtAuthenticationFilter jwtFilter;

	// Configure the bean to customize spring security filter chain
	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
	    http.csrf(csrf -> csrf.disable())
	        .authorizeHttpRequests(requests -> requests
	            // Publicly accessible endpoints
	            .requestMatchers("/products/view", "/users/signup", "/users/signin", "/v*/api-doc*/**", "/swagger-ui/**","/shops/**","/delivery/**","/orders/**").permitAll()
	            .requestMatchers(HttpMethod.OPTIONS).permitAll()

	            // Role-based access control
	            .requestMatchers("/orders/**").hasAnyRole("USER", "ADMIN") 
	            .requestMatchers("/users/**").hasRole("ADMIN")
	            .requestMatchers("/shops/**").hasRole("SHOP")
	            .requestMatchers("/delivery/**").hasRole("DELIVERY")

	            
	            .anyRequest().authenticated()
	        );

	    return http.build();
	}

	// configure AuthMgr as a spring bean
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
