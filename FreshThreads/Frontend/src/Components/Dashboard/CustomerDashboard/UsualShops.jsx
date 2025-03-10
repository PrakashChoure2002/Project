import React from "react";
import { ListGroup } from "react-bootstrap";

const UsualShops = ({ shops }) => {
  return (
    <div>
      <h5>Usual Shops</h5>
      <ListGroup>
        {shops.map((shop, index) => (
          <ListGroup.Item key={index}>
            <strong>{shop.name}</strong> - {shop.address}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UsualShops;
