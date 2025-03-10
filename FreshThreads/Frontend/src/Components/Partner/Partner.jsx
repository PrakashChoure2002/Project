import React, { useState } from 'react';

const Partner = () => {
  const [services, setServices] = useState([]);
  const [documentType, setDocumentType] = useState('');

  const handleAddService = () => {
    setServices([...services, { name: '', price: '' }]);
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  const cities = ['Bangalore', 'Chennai', 'Hyderabad', 'Mumbai', 'Pune'];

  return (
    <div className="container my-5">
      <h1 className="mb-4">Become a Partner</h1>
      <form className="partner-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <select className="form-control" id="city">
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="shopAddress" className="form-label">Shop Address</label>
          <input type="text" className="form-control" id="shopAddress" />
        </div>
        <div className="mb-3">
          <label htmlFor="shopName" className="form-label">Shop Name</label>
          <input type="text" className="form-control" id="shopName" />
        </div>
        <div className="mb-3">
          <h5>Services and Prices</h5>
          {services.map((service, index) => (
            <div key={index} className="d-flex mb-3">
              <input
                type="text"
                className="form-control me-3"
                placeholder="Service Name"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                className="form-control me-3"
                placeholder="Price"
                value={service.price}
                onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleRemoveService(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={handleAddService}>
            Add Service
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Documents</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="documentType"
              id="aadhar"
              value="aadhar"
              checked={documentType === 'aadhar'}
              onChange={handleDocumentTypeChange}
            />
            <label className="form-check-label" htmlFor="aadhar">
              Aadhar
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="documentType"
              id="pan"
              value="pan"
              checked={documentType === 'pan'}
              onChange={handleDocumentTypeChange}
            />
            <label className="form-check-label" htmlFor="pan">
              PAN
            </label>
          </div>
          {documentType && (
            <input type="file" className="form-control" id="documents" />
          )}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Partner;