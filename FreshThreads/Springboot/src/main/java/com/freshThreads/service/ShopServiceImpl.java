// Updated ShopServiceImpl using Shopdto
package com.freshThreads.service;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freshThread.exceptions.ResourceNotFoundException;
import com.freshThreads.dao.shopsDao;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.Shopdto;
import com.freshThreads.entities.Shop;

@Service
@Transactional
public class ShopServiceImpl implements ShopService {

    @Autowired
    private shopsDao shopRepo;

    // Get all shops
    @Override
    public List<Shopdto> getAllShops() {
        return shopRepo.findAll().stream()
            .map(shop -> {
                Shopdto dto = new Shopdto();
                dto.setId(shop.getId());  // ✅ Set the ID here
                dto.setShopName(shop.getShopName());
                dto.setOwnerName(shop.getOwnerName());
                dto.setStatus(shop.getStatus());

                // Debugging output
                System.out.println("Shop ID: " + dto.getId() + ", Shop Name: " + dto.getShopName());

                return dto;
            })
            .collect(Collectors.toList());
    }

    // Add a new shop
    @Override
    public String addNewShop(Shopdto newShopDto) {
        Shop newShop = convertToEntity(newShopDto);
        Shop persistentShop = shopRepo.save(newShop);
        return "Added new shop with ID = " + persistentShop.getId();
    }

    // Get shop details
    @Override
    public Shopdto getShopDetails(Long shopid) {
        Shop shop = shopRepo.findById(shopid)
                .orElseThrow(() -> new ResourceNotFoundException("Shop with ID " + shopid + " not found!"));
        return convertToDto(shop);
    }
    
    @Override
    // Update shop details
    public ApiResponse updateShopDetails(Long shopId, Shopdto shopDto) {
        // Fetch the shop by ID to ensure it's attached to the current session
        Shop existingShop = shopRepo.findById(shopId)
                .orElseThrow(() -> new ResourceNotFoundException("Shop with ID " + shopId + " not found!"));

        // Update the existing shop's fields
        existingShop.setShopName(shopDto.getShopName());
        existingShop.setOwnerName(shopDto.getOwnerName());
        existingShop.setStatus(shopDto.getStatus());

        // Save the updated shop
        Shop updatedShop = shopRepo.save(existingShop);

        // Log the update (using a proper logging framework)
//        Logger.info("Updated shop with ID = " + updatedShop.getId());

        // Return a detailed response
        String message = "Shop with ID " + updatedShop.getId() + " has been successfully updated.";
        return new ApiResponse(message, updatedShop.getId());
    }



    // Delete shop
    @Override
    public ApiResponse deleteShop(Long shopid) {
        if (shopRepo.existsById(shopid)) {
            shopRepo.deleteById(shopid);
            return new ApiResponse("Deleted shop details successfully!", shopid); // Pass shopid to the ApiResponse constructor
        }
        throw new ResourceNotFoundException("Shop with ID " + shopid + " not found!");
    }


    // Convert Shop entity to Shopdto
    private Shopdto convertToDto(Shop shop) {
        Shopdto dto = new Shopdto();
        dto.setShopName(shop.getShopName());
        dto.setOwnerName(shop.getOwnerName());
        dto.setStatus(shop.getStatus());
        return dto;
    }

    // Convert Shopdto to Shop entity
    private Shop convertToEntity(Shopdto dto) {
        Shop shop = new Shop();
        shop.setShopName(dto.getShopName());
        shop.setOwnerName(dto.getOwnerName());
        shop.setStatus(dto.getStatus());
        return shop;
    }



	
}
