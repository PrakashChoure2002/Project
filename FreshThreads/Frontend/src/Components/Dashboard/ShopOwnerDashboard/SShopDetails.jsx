import React from "react";

const ShopDetails = ({ shop }) => {
  return (
    <div className="mb-4">
      <h4>Shop Details</h4>
      <p>
        <strong>Name:</strong> {shop.name}
      </p>
      <p>
        <strong>Address:</strong> {shop.address}
      </p>
      <p>
        <strong>Rating:</strong> {shop.rating} / 5
      </p>
      <p>
        <strong>Daily Orders:</strong> {shop.dailyOrders}
      </p>
      <p>
        <strong>Pending Orders:</strong> {shop.pendingOrders}
      </p>
    </div>
  );
};

export default ShopDetails;
