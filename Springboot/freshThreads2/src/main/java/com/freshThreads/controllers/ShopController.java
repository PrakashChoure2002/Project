package com.freshThreads.controllers;

import com.freshThreads.entities.Shop;
import com.freshThreads.service.ShopService;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.Shopdto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

//Updated ShopController
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/shops")
public class ShopController {

 @Autowired
 private ShopService shopService;

 @GetMapping
 public ResponseEntity<List<Shopdto>> viewShops() {
     List<Shopdto> shops = shopService.getAllShops();
     return ResponseEntity.ok(shops);
 }

 @GetMapping("/{id}")
 public ResponseEntity<Shopdto> getShop(@PathVariable Long id) {
     Shopdto shop = shopService.getShopDetails(id);
     return ResponseEntity.ok(shop);
 }

 @PostMapping
 public ResponseEntity<String> createShop(@RequestBody @Valid Shopdto shopDto) {
     String responseMessage = shopService.addNewShop(shopDto);
     return ResponseEntity.ok(responseMessage);
 }

 @PutMapping("/{id}")
 public ResponseEntity<ApiResponse> updateShop(@PathVariable Long id, @RequestBody @Valid Shopdto shopDto) {
     ApiResponse response = shopService.updateShopDetails(id, shopDto);
     return ResponseEntity.ok(response);
 }

 @DeleteMapping("/{id}")
 public ResponseEntity<ApiResponse> deleteShop(@PathVariable Long id) {
     ApiResponse response = shopService.deleteShop(id);
     return ResponseEntity.ok(response);
 }


}
