import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included

const OrderStatusSummary = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);

  // Function to update the status of an order
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus, // Update status directly
            }
          : order // Keep other orders unchanged
      )
    );
  };

  // Calculate total orders remaining and done
  const totalRemaining = orders.filter(
    (order) => order.status !== "ready"
  ).length;
  const totalDone = orders.filter((order) => order.status === "ready").length;

  return (
    <div className="mb-4">
      <h5>Order Status Summary</h5>
      <div className="mb-3">
        <Badge bg="info" className="me-2">
          Total Orders Remaining: {totalRemaining}
        </Badge>
        <Badge bg="success" className="me-2">
          Total Done (History Orders): {totalDone}
        </Badge>
      </div>
      <h6>Update Order Status</h6>
      {orders.map((order) => (
        <div key={order.id} className="d-flex justify-content-between mb-2">
          <span>Order ID: {order.id}</span>
          <div>
            <Button
              variant="success"
              className="me-2"
              onClick={() => updateOrderStatus(order.id, "ready")}
            >
              Mark as Ready
            </Button>
            <Button
              variant="primary"
              className="me-2"
              onClick={() => updateOrderStatus(order.id, "preparing")}
            >
              Mark as Preparing
            </Button>
            <Button
              variant="danger"
              onClick={() => updateOrderStatus(order.id, "notStarted")}
            >
              Mark as Not Started
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Sample usage
const App = () => {
  const initialOrders = [
    { id: 1, status: "notStarted" },
    { id: 2, status: "preparing" },
    { id: 3, status: "ready" },
  ];

  return <OrderStatusSummary initialOrders={initialOrders} />;
};

export default App;
