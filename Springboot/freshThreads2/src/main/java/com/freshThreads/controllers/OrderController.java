package com.freshThreads.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.service.OrderService;

import jakarta.validation.Valid;


@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    public OrderController() {
        System.out.println("In ctor " + getClass());
    }

    // Fetch all orders
    @GetMapping
    public ResponseEntity<?> getOrders() {
        List<OrderRespDTO> orders = orderService.getAllOrders();
        if (orders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ApiResponse("No orders found", false));
        }
        return ResponseEntity.ok(orders);
    }

    // Add a new order
    @PostMapping
    public ResponseEntity<?> addNewOrder(@RequestBody @Valid OrderRespDTO orderDTO) {
        String result = orderService.addNewOrder(orderDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse(result, true));
    }

    // Delete an order
    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrderDetails(@PathVariable Long orderId) {
        ApiResponse response = orderService.deleteOrder(orderId);
        return ResponseEntity.ok(response);
    }

    // Fetch order details by ID
    @GetMapping("/{orderId}")
    public ResponseEntity<?> getOrderDetails(@PathVariable Long orderId) {
        try {
            OrderRespDTO orderRespDTO = orderService.getOrderDetails(orderId);
            return ResponseEntity.ok(orderRespDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }

    // Update an existing order
    @PutMapping("/{orderId}")
    public ResponseEntity<?> updateOrderDetails(
            @PathVariable Long orderId, @RequestBody @Valid OrderRespDTO orderDTO) {
        ApiResponse response = orderService.updateOrderDetails(orderId, orderDTO);
        return ResponseEntity.ok(response);
    }
}
