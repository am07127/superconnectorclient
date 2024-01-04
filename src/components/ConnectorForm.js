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

    setFormData({
        name: '',
        companyName: '',
        email: '',
        contactNumber: '',
      });
  };

  return (
    <div className="position-relative bg-image p-5 shadow-1-strong" style={{marginTop:'30px'}}>
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.7',
        }}
      ></div>
    <div className="container mt-5" style={{backgroundColor: 'black', opacity: '0.7', borderRadius:'10px', marginTop:'290px', width:'50%', padding:'30px'}}>
    <h2 style={{color:'white', fontSize: '5vh', textAlign:'center'}}>Book a Connector</h2>

      <form onSubmit={handleSubmit}>
      <div className="container mt-4" style={{borderStyle:'solid', marginBottom:'30px'}}>
        <div className="row">
  <div className="col-md-4 mb-3">
    <label htmlFor="eventName" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
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
    <label htmlFor="eventDate" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
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
    <label htmlFor="eventLocation" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
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
          <label htmlFor="name" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
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
          <label htmlFor="companyName" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}> 
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
          <label htmlFor="email" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
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
          <label htmlFor="contactNumber" className="form-label" style={{color:'white', fontWeight:'bold', opacity:'1.5'}}>
            Contact Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            pattern="[0-9]*"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <small className="text-muted">Please enter digits only.</small>
        </div>
        

        <button type="submit" className="btn btn-primary d-block mx-auto" style={{ backgroundColor:'#1d31d3', borderColor:'#1d31d3'}}>
          Submit
        </button>
      </form>
    </div>
    
    </div>
  );
};

export default ConnectorForm;
