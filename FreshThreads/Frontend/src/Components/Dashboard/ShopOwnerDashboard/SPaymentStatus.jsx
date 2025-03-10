import React from "react";

const PaymentStatus = ({ payments }) => {
  return (
    <div className="mb-4">
      <h5>Payment Status</h5>
      <div>
        <strong>Completed Payments:</strong> {payments.completed}
      </div>
      <div>
        <strong>Pending Payments:</strong> {payments.pending}
      </div>
    </div>
  );
};

export default PaymentStatus;