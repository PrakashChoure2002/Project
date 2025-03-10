import React, { useState } from "react";
import CurrentOrder from "./CustomerDashboard/CurrentOrder";
import PastOrders from "./CustomerDashboard/PastOrders";
import UsualShops from "./CustomerDashboard/UsualShops";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log("hii2", userId);

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Customer Dashboard</h3>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => navigate(`/users/${userId}`)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          View Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Order */}
        <div >
          <CurrentOrder currentOrder={{ orderId: "5", items: [], total: "450", status: "cleaning" }} />
        </div>

        {/* Past Orders */}
        <div >
          <PastOrders orders={[{ id: "1", date: "2023-11-20", total: "300", status: "Delivered" }]} />
        </div>

        {/* Usual Shops */}
        <div >
          <UsualShops shops={[{ name: "The Clothes", address: "123 High St" }]} />
        </div>
      </div>
    </div>
  );
};

export default User;
