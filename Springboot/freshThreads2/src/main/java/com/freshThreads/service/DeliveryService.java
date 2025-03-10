package com.freshThreads.service;

import java.util.List;

import com.freshThreads.dto.DeliveryDTO;

public interface DeliveryService {
	
	//add method to add Delivery
	DeliveryDTO createDelivery(DeliveryDTO deliveryDTO);
	//add method to get Delivery by id
    DeliveryDTO getDeliveryById(Long id);
  //add method to All Deliveries
    List<DeliveryDTO> getAllDeliveries();
  //add method to update Delivery
    DeliveryDTO updateDelivery(Long id, DeliveryDTO deliveryDTO);
  //add method to delete Delivery
    void deleteDelivery(Long id);

}
