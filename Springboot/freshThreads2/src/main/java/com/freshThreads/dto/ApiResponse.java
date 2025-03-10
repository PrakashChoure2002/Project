package com.freshThreads.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponse {
	private String message;
	private LocalDateTime timeStamp;
	private Long shopid;
	private boolean success;
	public ApiResponse(String message) {
		super();
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	
	public ApiResponse(String message, Long shopid) {
        this.message = message;
        this.shopid = shopid;
        this.timeStamp = LocalDateTime.now();
    }

	public ApiResponse(String message, boolean success) {
		
		        this.message = message;
		        this.success = success;
		    
	}

}
