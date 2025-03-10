package com.freshThreads.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="delivery")
public class Delivery extends BaseEntity {
	
	
	@Column(name = "pickup_time")
    private LocalDateTime pickupTime;

    @Column(name = "drop_time")
    private LocalDateTime dropTime;
    
	@Column(name = "delivery_status")
    private String deliveryStatus;

    // Delivery Personnel details
    @Column(name = "delivery_person_name")
    private String deliveryPersonName;

    @Column(name = "delivery_person_phone")
    private String deliveryPersonPhone;
  
}
