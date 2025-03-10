package com.freshThreads.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freshThreads.dto.ApiResponse2;
import com.freshThreads.dto.DeliveryDTO;
import com.freshThreads.service.DeliveryService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/delivery")

public class DeliveryController {
	
	@Autowired
	private DeliveryService deliveryService;
	
	//for adding a new delivery user
	/*
	 * url-https://localhost:5713/signup/delivery
	 * method:post
	 * requestBody:DeliveryDto
	 * reponse-na
	 * desc-adding new deliverypartner
	 */
	 	@PostMapping
	    public ResponseEntity<?> createDelivery(@RequestBody DeliveryDTO deliveryDTO) {
	        DeliveryDTO createdDelivery = deliveryService.createDelivery(deliveryDTO);
	        return ResponseEntity.ok(new ApiResponse2(true, "Delivery created successfully", createdDelivery));
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<?> getDeliveryById(@PathVariable Long id) {
	        DeliveryDTO deliveryDTO = deliveryService.getDeliveryById(id);
	        return ResponseEntity.ok(new ApiResponse2(true, "Delivery fetched successfully", deliveryDTO));
	    }

	    @GetMapping("/delivery")
	    public ResponseEntity<?> getAllDeliveries() {
	        List<DeliveryDTO> deliveries = deliveryService.getAllDeliveries();
	        return ResponseEntity.ok(new ApiResponse2(true, "All deliveries fetched successfully", deliveries));
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<?> updateDelivery(@PathVariable Long id, @RequestBody DeliveryDTO deliveryDTO) {
	        DeliveryDTO updatedDelivery = deliveryService.updateDelivery(id, deliveryDTO);
	        return ResponseEntity.ok(new ApiResponse2(true, "Delivery updated successfully", updatedDelivery));
	    }
	    
	    @DeleteMapping("/{id}")
	    public ResponseEntity<?> deleteDelivery(@PathVariable Long id) {
	        deliveryService.deleteDelivery(id);
	        System.out.println("Successfully deleted delivery with ID: " + id);
	        return ResponseEntity.ok(new ApiResponse2(true, "Delivery deleted successfully",null));
	    }
}