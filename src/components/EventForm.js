import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./scrollbar.css";

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    website: "",
    category: "",
    companyName: "",
    email: "",
    title: "",
    date:""
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Done");
    try {
      // Your API endpoint for adding events
      const apiUrl = 'http://localhost:3000/api/events/addevent';
  
      // Make a POST request to the API with the form data
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Event added successfully!');
        
        // Reset the form data after successful submission
        setFormData({
          eventName: "",
          website: "",
          category: "",
          companyName: "",
          email: "",
          title: "",
          date: "",
        });
      } else {
        console.error('Failed to add event:', response.statusText);
        console.log("didnt work")
      }
    } catch (error) {
      console.log("Error")
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div
      className="position-relative bg-image p-5 shadow-1-strong"
      style={{ marginTop: "30px" }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.7",
        }}
      ></div>
      <div
        className="container mt-5 rounded"
        style={{
          backgroundColor: "black",
          opacity: "0.7",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "fit-content",
          maxHeight: "fit-content",
        }}
      >
<form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "40px",
            maxHeight: "100vh",
            maxWidth: "fit-content",
            overflowY: "auto",
          }}
        >
                  <div className="container" style={{ borderStyle: "solid", marginBottom: "20px", padding: "20px" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>ADD AN EVENT</h3>
        </div>
  
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="eventName" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Event Name:</label>
            <input type="text" className="form-control" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required />
          </div>
  
          <div className="col-md-6 mb-3">
            <label htmlFor="category" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Category:</label>
            <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} required />
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="title" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Title:</label>
            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
  
          <div className="col-md-6 mb-3">
            <label htmlFor="website" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Website:</label>
            <input type="text" className="form-control" id="website" name="website" value={formData.website} onChange={handleChange} required />
          </div>
        </div>
  
        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="companyName" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Company Name:</label>
            <input type="text" className="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
  
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5"}}>Date:</label>
            <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
  
          
        </div>
  
        <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            style={{ backgroundColor: "#1d31d3", borderColor: "#1d31d3" , marginTop:'30px'}}
          >
            Submit
          </button>
      </form>
    </div>
  </div>
  
  );
};

export default EventForm;
