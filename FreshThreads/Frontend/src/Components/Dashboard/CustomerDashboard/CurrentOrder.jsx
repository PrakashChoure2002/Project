import React from "react";
import { Card, Badge } from "react-bootstrap";

const CurrentOrder = ({ currentOrder }) => {
  const { orderId, items, total, status } = currentOrder;

  // Determine badge color based on the status
  const getStatusBadge = (status) => {
    switch (status) {
      case "ready":
        return <Badge bg="success">Ready</Badge>; // Green for "Ready"
      case "cleaning":
        return <Badge bg="primary">Cleaning</Badge>; // Blue for "Cleaning"
      case "not started":
        return <Badge bg="danger">Not Started</Badge>; // Red for "Not Started"
      default:
        
        return <Badge bg="secondary">Unknown</Badge>; // Gray for unknown status
    }
  };

  return (
    <Card className="mb-10 shadow">
      <Card.Body>
        <h5>Current Order</h5>
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> Rs.{total}
        </p>
        <div className="mt-3">
          <strong>Status: </strong> {getStatusBadge(status)}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CurrentOrder;

