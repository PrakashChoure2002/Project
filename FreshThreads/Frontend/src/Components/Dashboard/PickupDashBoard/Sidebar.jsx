import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="text-primary">Delivery</h3>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/orders">Orders</Nav.Link>
        <Link className="nav-link" to="/completed-orders">Completed Orders</Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
