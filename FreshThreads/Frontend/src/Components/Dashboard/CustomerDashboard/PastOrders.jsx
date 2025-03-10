import React from "react";
import { Table } from "react-bootstrap";

const PastOrders = ({ orders }) => {
  return (
    <div className="mb-4">
      <h5>Past Orders</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>Rs.{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PastOrders;
