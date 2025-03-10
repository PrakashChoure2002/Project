import React from "react";
import { Table } from "react-bootstrap";

const PickupOverview = ({ pickups }) => {
  return (
    <div className="mb-4">
      <h5>Pickups Overview</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {pickups.map((pickup, index) => (
            <tr key={pickup.id}>
              <td>{index + 1}</td>
              <td>{pickup.location}</td>
              <td>{pickup.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PickupOverview;
