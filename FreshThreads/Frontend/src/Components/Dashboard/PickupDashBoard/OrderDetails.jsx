import React, { useState } from 'react';
import { Table, Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OrderDetails = () => {
  const [selectedDetails, setSelectedDetails] = useState(null);
  
  const orderData = [
    {
      id: 1,
      item: "white clothes",
      qty: 2,
      price: 15,
      pickup: "123 gateway mumbai",
      dropoff: "456 Elm Street, nariman point",
      pickupCoords: [18.9220, 72.8347], // Example coordinates (London)
      dropoffCoords: [18.9256, 72.8242],
    },
    {
      id: 2,
      item: "Dry clean",
      qty: 5,
      price: 20,
      pickup: "789 Market Street, London",
      dropoff: "101 Pine Avenue, London",
      pickupCoords: [51.5007, -0.1246],
      dropoffCoords: [51.5055, -0.1402],
    },
  ];

  const handleMoreDetails = (order) => {
    setSelectedDetails(order);
  };

  return (
    <div className="p-4">
      <hr></hr>
      <h3>New Orders</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.qty}</td>
              <td>Rs.{order.price.toFixed(2)}</td>
              <td>Rs.{(order.qty * order.price).toFixed(2)}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => handleMoreDetails(order)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedDetails && (
        <>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Order Details</Card.Title>
              <Card.Text><strong>Pickup Location:</strong> {selectedDetails.pickup}</Card.Text>
              <Card.Text><strong>Dropoff Location:</strong> {selectedDetails.dropoff}</Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-4" style={{ height: "300px" }}>
            <MapContainer
              center={selectedDetails.pickupCoords}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={selectedDetails.pickupCoords}>
                <Popup>Pickup Location</Popup>
              </Marker>
              <Marker position={selectedDetails.dropoffCoords}>
                <Popup>Dropoff Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails;