package com.freshThreads.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class OrderRespDTO {
    
//    private Integer version;
    private Long id;
    private Long userid;
    private Long shopid;
    private Long deliveryid;
    private String status;
    private LocalDate orderDate;
    private Long totalAmount;
    private LocalDate createdOn;
}
