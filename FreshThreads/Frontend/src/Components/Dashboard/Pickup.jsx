import React from 'react'
import Header from './PickupDashBoard/Header'
import Sidebar from './PickupDashBoard/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderDetails from './PickupDashBoard/OrderDetails'
import DeliveryManProfile from './PickupDashBoard/DeliveryManProfile'
import CompletedOrders from './PickupDashBoard/CompletedOrders';


const User = () => {
  return (
      <div className="d-flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <Header />

        {/* Order Details */}
        <DeliveryManProfile/>
        <OrderDetails />
        <CompletedOrders/>
        {/* made by payal Gajbe*/}
      </div>
    </div>


  )
}

export default User

