import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { signupUser, clearError } from "../../../features/authSlice"; 
import { useNavigate } from "react-router-dom";

const SignUp1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    city: "",
    address: "",
    role: "ROLE_USER",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  // Access loading and error state from Redux
  const { loading, error } = useSelector((state) => state.auth);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!/^[a-zA-Z\s]{2,50}$/.test(value)) {
          error = "Name must contain only letters and spaces (2-50 characters).";
        }
        break;
      case "email":
        if (
          !/^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
            value
          )
        ) {
          error = "A valid email address is required.";
        }
        break;
      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        ) {
          error =
            "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        }
        break;
      case "phonenumber":
        if (!/^\d{10}$/.test(value)) {
          error = "Phone number must be exactly 10 digits.";
        }
        break;
      case "city":
        if (!/^[a-zA-Z\s]{2,50}$/.test(value)) {
          error = "City must contain only letters and spaces (2-50 characters).";
        }
        break;
      case "address":
        if (value.trim().length < 5) {
          error = "Address must be at least 5 characters long.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field and update errors
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Dispatch the signupUser action
    const result = await dispatch(signupUser(formData));

    // If signup is successful, reset the form and navigate to login
    if (signupUser.fulfilled.match(result)) {
      setFormData({
        name: "",
        email: "",
        password: "",
        phonenumber: "",
        city: "",
        address: "",
        role: "ROLE_USER",
      });
      navigate("/login");
    }
  };

  const token = useSelector((state) => state.auth.token);
  if (token) return <Navigate to="/" replace />;  // Redirect logged-in users to home

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md m-5">
      <h2 className="text-xl font-bold mb-4 text-center">Register to FreshThreads</h2>
      {error && <p className="mb-4 text-sm text-red-500">{error}</p>} {/* Display error from Redux */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phonenumber" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.phonenumber && (
            <p className="text-sm text-red-500">{errors.phonenumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium">
            User Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="ROLE_USER">Customer</option>
            <option value="ROLE_SHOP">Shop</option>
            <option value="ROLE_DELIVERY">Delivery</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Signing Up..." : "Sign Up"} {/* Show loading text */}
        </button>
      </form>
    </div>
  );
};

export default SignUp1;