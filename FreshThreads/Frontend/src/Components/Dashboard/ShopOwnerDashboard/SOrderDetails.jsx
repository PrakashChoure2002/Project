import React from "react";

const OrderDetails = ({ orders, updateOrderStatus, updateOrderPayment }) => {
  const handleStatusChange = (id, event) => {
    updateOrderStatus(id, event.target.value);
  };
  const handlePaymentChange = (id,event) =>{
    updateOrderPayment(id, event.target.value);
  };

  return (
    <div>
      <h4>Orders Overview</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Action</th>
            <th>Payment Changes</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Ready"
                      ? "bg-success"
                      : order.status === "Cleaning"
                      ? "bg-primary"
                      : "bg-danger"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>
                <span
                  className={`badge ${
                    order.payment === "paid" ? "bg-success" : "bg-warning"
                  }`}
                >
                  {order.payment}
                </span>
              </td>
              <td>
                <select
                  className="form-select form-select-sm"
                  value={order.status}
                  onChange={(event) => handleStatusChange(order.id, event)}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Ready">Ready</option>
                </select>
              </td>
              <td>
                <select
                  className="form-select form-select-sm"
                  value={order.payment}
                  onChange={(event) => handlePaymentChange(order.id, event)}
                >
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;

