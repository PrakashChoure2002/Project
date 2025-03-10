package com.freshThreads.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeliveryDTO {
	//from the form fields
	private Long id;
    private LocalDateTime pickupTime;
    private LocalDateTime dropTime;
    private String deliveryStatus;
    private String deliveryPersonName;
    private String deliveryPersonPhone;
}
