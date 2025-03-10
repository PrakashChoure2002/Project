import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/s.css";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
    city: "",
    userRole: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  const validateForm = () => {
    const newErrors = {};
    const { firstName, phoneNumber, email, password, address, city, userRole } = formData;

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password || password.length < 6 || password.length > 24) {
      newErrors.password = "Password must be between 6 and 24 characters.";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!userRole) {
      newErrors.userRole = "User role is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5161/api/Auth/adduser", formData);

      if (response.status === 201) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        setGeneralError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setGeneralError(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <Container fluid>
      <Row className="align-items-center d-flex" style={{ minHeight: "100vh" }}>
        <Col md={6} className="text-center align-items-center">
          <h1 className="text-center font-weight-bold mb-4" style={{ color: "#1e1f21" }}>
            Welcome to Laundry Service
          </h1>
          <p className="text-center font-weight-grey mb-4">Save 3 hours this week by using our services.</p>
        </Col>
        <Col md={6} className="p-0 position-relative">
          <img
            src="src/Components/Auth/image/laundryservice2.jpg"
            alt="Laundry"
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
      <div className="container-fluid my-5 d-flex justify-content-center align-items-center vh-100">
        <div className="signup-form">
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "600px",
              width: "140%",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <h2 className="text-center font-weight-bold mb-4">Sign Up</h2>
            {generalError && (
              <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>
                {generalError}
              </div>
            )}
            <div className="mb-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
            </div>
            <div className="mb-2">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.phoneNumber && <span style={{ color: "red" }}>{errors.phoneNumber}</span>}
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>
            <div className="mb-2">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-4 p-3 mb-1 border-0 responsive-input"
              />
              {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
            </div>
            <div className="mb-2">
              <select
                name="userRole"
                value={formData.userRole}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Role</option>
                <option value="ROLE_USER">Customer</option>
                <option value="ROLE_SHOP">Shop</option>
                <option value="ROLE_DELIVERY">Delivery</option>
              </select>
              {errors.userRole && <span style={{ color: "red" }}>{errors.userRole}</span>}
            </div>
            <Button
              type="submit"
              className="ct-button btn btn-primary btn-lg rounded-4 p-4 mb-3 w-100"
              style={{ backgroundColor: "#535bcd", border: "none", maxWidth: "400px" }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
