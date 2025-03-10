package com.freshThreads.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshThreads.dao.DeliveryDao;
import com.freshThreads.dao.OrderDao;
import com.freshThreads.dao.UserDao;
import com.freshThreads.dao.shopsDao;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.entities.Orders;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderRepository;

    @Autowired
    private UserDao userRepository;

    @Autowired
    private shopsDao shopRepository;

    @Autowired
    private DeliveryDao deliveryRepository;

    // Fetch all orders
    @Override
    public List<OrderRespDTO> getAllOrders() {
        List<Orders> orders = orderRepository.findAll();
        return orders.stream().map(this::mapToOrderRespDTO).toList();
    }

    // Add a new order
    @Override
    public String addNewOrder(OrderRespDTO newOrderDTO) {
        validateRelationships(newOrderDTO);

        Orders newOrder = mapToOrdersEntity(newOrderDTO);
        Orders savedOrder = orderRepository.save(newOrder);

        return "Order created successfully with ID: " + savedOrder.getId();
    }

    // Delete an order
    @Override
    public ApiResponse deleteOrder(Long orderId) {
        if (!orderRepository.existsById(orderId)) {
            return new ApiResponse("Order not found with ID: " + orderId, false);
        }
        orderRepository.deleteById(orderId);
        return new ApiResponse("Order deleted successfully", true);
    }

    // Fetch order details by ID
    @Override
    public OrderRespDTO getOrderDetails(Long orderId) {
        Orders order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with ID: " + orderId));
        return mapToOrderRespDTO(order);
    }

    // Update order details
    @Override
    public ApiResponse updateOrderDetails(Long orderId, OrderRespDTO orderDTO) {
        Orders existingOrder = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with ID: " + orderId));

        validateRelationships(orderDTO);

        existingOrder.setStatus(orderDTO.getStatus());
        existingOrder.setOrderDate(orderDTO.getOrderDate());
        existingOrder.setTotalAmount(orderDTO.getTotalAmount());
        existingOrder.setUser(userRepository.findById(orderDTO.getUserid()).get());
        existingOrder.setShop(shopRepository.findById(orderDTO.getShopid()).get());
        existingOrder.setDelivery(deliveryRepository.findById(orderDTO.getDeliveryid()).get());

        orderRepository.save(existingOrder);
        return new ApiResponse("Order updated successfully", true);
       
    }

    // Helper method to map Orders entity to OrderRespDTO
    private OrderRespDTO mapToOrderRespDTO(Orders order) {
        OrderRespDTO orderRespDTO = new OrderRespDTO();
        orderRespDTO.setId(order.getId());

        // Ensure shop is not null before accessing its ID
        if (order.getShop() != null) {
            orderRespDTO.setShopid(order.getShop().getId());
        } else {
            System.out.println("Shop is NULL for Order ID: " + order.getId());
        }

        orderRespDTO.setOrderDate(order.getOrderDate());
        orderRespDTO.setTotalAmount(order.getTotalAmount());
        orderRespDTO.setStatus(order.getStatus());
        orderRespDTO.setCreatedOn(order.getCreatedOn());

        return orderRespDTO;
    }





    // Helper method to map OrderRespDTO to Orders entity
    private Orders mapToOrdersEntity(OrderRespDTO dto) {
        Orders order = new Orders();
        order.setOrderDate(dto.getOrderDate());
        order.setTotalAmount(dto.getTotalAmount());
        order.setStatus(dto.getStatus());

        order.setUser(userRepository.findById(dto.getUserid())
            .orElseThrow(() -> new RuntimeException("User not found")));

        // Ensure shop exists and is assigned correctly
        shopRepository.findById(dto.getShopid()).ifPresentOrElse(
            shop -> order.setShop(shop),
            () -> { throw new RuntimeException("Shop not found with ID: " + dto.getShopid()); }
        );

        order.setDelivery(deliveryRepository.findById(dto.getDeliveryid())
            .orElseThrow(() -> new RuntimeException("Delivery not found")));

        return order;
    }



    // Validate relationships
    private void validateRelationships(OrderRespDTO order) {
    	
    	  // Debugging: Check IDs before validation
        System.out.println("Validating Relationships:");
        System.out.println("Shop ID: " + order.getShopid());
        System.out.println("User ID: " + order.getUserid());
        System.out.println("Delivery ID: " + order.getDeliveryid());
        
        if (order.getUserid() == null || !userRepository.existsById(order.getUserid())) {
            throw new RuntimeException("User not found with ID: " + order.getUserid());
        }
        if (order.getShopid() == null || !shopRepository.existsById(order.getShopid())) {
            throw new RuntimeException("Shop not found with ID: " + order.getShopid());
        }
        if (order.getDeliveryid() == null || !deliveryRepository.existsById(order.getDeliveryid())) {
            throw new RuntimeException("Delivery not found with ID: " + order.getDeliveryid());
        }
    }
    	


	
}
