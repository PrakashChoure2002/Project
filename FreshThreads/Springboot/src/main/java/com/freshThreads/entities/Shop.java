package com.freshThreads.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="shop")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Shop extends BaseEntity {
	
		@Column(length=80)	
		private String shopName;
		@Column(length=80)
		private String ownerName;
		@Column(length=80)
		private String status;
		@Version
	    private Long version;
		// private LocalDateTime preferredDeliveryTime;
		//private LocalDate pickUpDate;
		@OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Orders> orders;
}
