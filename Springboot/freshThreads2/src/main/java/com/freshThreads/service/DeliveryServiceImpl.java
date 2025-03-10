package com.freshThreads.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshThread.exceptions.ResourceNotFoundException;
import com.freshThreads.dao.DeliveryDao;
import com.freshThreads.dto.DeliveryDTO;
import com.freshThreads.entities.Delivery;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {
	
	//dependency
	@Autowired
	private DeliveryDao deliveryDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public DeliveryDTO createDelivery(DeliveryDTO deliveryDTO) {
		Delivery delivery = modelMapper.map(deliveryDTO, Delivery.class);
		Delivery savedDelivery = deliveryDao.save(delivery);
		return modelMapper.map(savedDelivery, DeliveryDTO.class);
	}

	@Override
	public DeliveryDTO getDeliveryById(Long id) {
		Delivery delivery = deliveryDao.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Delivery Person not found of id"+id));
		return modelMapper.map(delivery, DeliveryDTO.class);
	}

	@Override
	public List<DeliveryDTO> getAllDeliveries() {
		List<Delivery> deliveries = deliveryDao.findAll();
		return deliveries.stream()
				.map(delivery -> modelMapper.map(delivery, DeliveryDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public DeliveryDTO updateDelivery(Long id, DeliveryDTO deliveryDTO) {
		Delivery existingDelivery = deliveryDao.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("delivery person not found of id"+id));
		modelMapper.map(deliveryDTO, existingDelivery);
		Delivery updatedDelivery = deliveryDao.save(existingDelivery);
		return modelMapper.map(updatedDelivery, DeliveryDTO.class);
	}

	@Override
	public void deleteDelivery(Long id) {
		if(!deliveryDao.existsById(id)) {
			throw new ResourceNotFoundException("delivery person not found of id"+id);
		}
		deliveryDao.deleteById(id);

	}

}
