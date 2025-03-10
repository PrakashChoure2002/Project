import React from "react";
import { Card } from "react-bootstrap";

const DeliveryManProfile = () => {
  // Placeholder profile data
  const profileData = {
    name: "Alex",
    area: "BKC",
    contact: "8866228587",
    deliveriesCompleted: 120,
    rating: 4.8,
  };

  const { name, area, contact, deliveriesCompleted, rating } = profileData;

  return (
    <Card className="mt-4 shadow">
      <Card.Body>
        {/* Profile Image */}
        {/* <div className="text-center">
          <img
            src="" // profile image
            //alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div> */}

        {/* Profile Details */}
        <h4 className="text-center">{name}</h4>
        <p className="text-muted text-center">{area}</p>

        {/* Extra Info */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Contact: </strong> {contact}
          </li>
          <li className="list-group-item">
            <strong>Deliveries Completed: </strong> {deliveriesCompleted}
          </li>
          <li className="list-group-item">
            <strong>Rating: </strong> {rating} / 5 ⭐
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default DeliveryManProfile;