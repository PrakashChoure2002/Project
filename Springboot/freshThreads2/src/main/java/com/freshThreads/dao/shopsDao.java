package com.freshThreads.dao;

import com.freshThreads.entities.Shop;  
import org.springframework.data.jpa.repository.JpaRepository;

public interface shopsDao extends JpaRepository<Shop, Long> {
    
}