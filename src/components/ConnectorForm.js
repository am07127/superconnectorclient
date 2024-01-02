import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ConnectorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    contactNumber: '',
  });

  const location = useLocation();
  const { state } = location;
  const { event } = state;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, like sending it to a server
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 style={{marginTop:'200px', marginBottom: '30px'}}>Book a Connector</h2>
      <form onSubmit={handleSubmit}>
      <div className="container mt-4" style={{borderStyle:'solid', borderColor:'#1d31d3', marginBottom:'30px'}}>
        <div className="row">
  <div className="col-md-4 mb-3">
    <label htmlFor="eventName" className="form-label">
      Event Name:
    </label>
    <input
      className="form-control"
      id="eventName"
      type="text"
      value={event.name}
      disabled
      style={{
        backgroundColor: '#f8f9fa',
        color: '#495057',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
      }}
    />
  </div>

  <div className="col-md-4 mb-3">
    <label htmlFor="eventDate" className="form-label">
      Date:
    </label>
    <input
      className="form-control"
      id="eventDate"
      type="text"
      value={event.date}
      disabled
      style={{
        backgroundColor: '#f8f9fa',
        color: '#495057',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
      }}
    />
  </div>

  <div className="col-md-4 mb-3">
    <label htmlFor="eventLocation" className="form-label">
      Event Location:
    </label>
    <input
      className="form-control"
      id="eventLocation"
      type="text"
      value={event.location}
      disabled
      style={{
        backgroundColor: '#f8f9fa',
        color: '#495057',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
      }}
    />
  </div>
</div>
</div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            pattern="[0-9]{10}"
            // placeholder="e.g., 1234567890"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <small className="text-muted">Please enter a 10-digit contact number.</small>
        </div>
        

        <button type="submit" className="btn btn-primary" style={{marginBottom:'130px',  backgroundColor:'#1d31d3'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectorForm;
