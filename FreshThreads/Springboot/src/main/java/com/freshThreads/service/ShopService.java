package com.freshThreads.service;

import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.Shopdto;
import com.freshThreads.entities.Shop;

import java.util.List;

public interface ShopService {

	

	    // Returns a list of Shopdto objects
	    List<Shopdto> getAllShops();

	    // Adds a new shop and returns a confirmation message
	    String addNewShop(Shopdto newShopDto);

	    // Retrieves the details of a shop as a Shopdto
	    Shopdto getShopDetails(Long shopId);

	    // Updates shop details using Shopdto
	    ApiResponse updateShopDetails(Long shopid, Shopdto shopDto);

	    // Deletes a shop and returns a response
	    ApiResponse deleteShop(Long shopid);
	
}
