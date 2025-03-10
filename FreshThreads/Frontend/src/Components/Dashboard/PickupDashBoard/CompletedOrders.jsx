import React, { useState } from "react";
import { Table, Card } from "react-bootstrap";

const CompletedOrders = () => {
  // Sample data for completed orders
  const completedOrders = [
    {
      id: 1,
      item: "Ironed Clothes",
      qty: 10,
      price: 150,
      pickup: "123 Main Street, Bkc",
      dropoff: "456 Main Street, kurla",
    },
    {
      id: 2,
      item: "Dry Clean",
      qty: 3,
      price: 140,
      pickup: "123 Main Street, Bkc",
      dropoff: "456 Main Street, kurla",
    },
  ];

  // Calculate total number of completed orders
  const totalOrders = completedOrders.length;

  return (
    <div className="p-4">
      <h3>Completed Orders</h3>
      <p>Total Orders Completed: <strong>{totalOrders}</strong></p>

      <Table bordered>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Pickup Location</th>
            <th>Dropoff Location</th>
          </tr>
        </thead>
        <tbody>
          {completedOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.qty}</td>
              <td>rs {order.price.toFixed(2)}</td>
              <td>rs {(order.qty * order.price).toFixed(2)}</td>
              <td>{order.pickup}</td>
              <td>{order.dropoff}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Optional: Summary Card */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Summary</Card.Title>
          <Card.Text>
            You have successfully completed <strong>{totalOrders}</strong> orders.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CompletedOrders;
