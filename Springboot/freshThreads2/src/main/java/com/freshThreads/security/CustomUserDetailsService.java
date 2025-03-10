package com.freshThreads.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freshThreads.dao.UserDao;
import com.freshThreads.entities.Users;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	// depcy
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users user = userDao.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Invalid Email !!!"));
		return new CustomUserDetails(user);
	}

}
