package com.freshThreads.service;
import java.util.List;

import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.entities.Orders;

import jakarta.validation.Valid;

public interface OrderService {
	List<OrderRespDTO> getAllOrders();

	String addNewOrder( OrderRespDTO order);

	ApiResponse deleteOrder(Long orderId);

	OrderRespDTO getOrderDetails(Long orderId);

	ApiResponse updateOrderDetails(Long orderId, OrderRespDTO orderDTO);
}
