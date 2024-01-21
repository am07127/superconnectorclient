import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./scrollbar.css";

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    website: "",
    category: "",
    venue: "",
    location: "",
    startDate:"",
    endDate:""
  });

  
  function validateDateRange(startDate, endDate) {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
  
    // Check if either date is invalid
    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      // Invalid date format, handle accordingly
      return false;
    }
  
    return endDateTime > startDateTime;
  }

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate input format (City, Country)

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const maxCategories = 3;

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
      console.log("yay",selectedCategories);

    } else {
      if (selectedCategories.length < maxCategories) {
        setSelectedCategories([...selectedCategories, category]);
        console.log(selectedCategories);

      } else {
        console.log('Maximum 3 categories allowed');
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Done");
  
    // Convert location to lowercase
    const lowercasedLocation = formData.location.toLowerCase();
  
    // Validate input format (City, Country)
    const regex = /^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/;
    const isCityCountryValid = regex.test(lowercasedLocation);
  
    if (!isCityCountryValid) {
      alert('Please enter the location in the format City, Country.');
      return; // Stop further execution if the format is not valid
    }

    if (selectedCategories.length===0) {
      alert('Please choose atleast one category.');
      return; // Stop further execution if the format is not valid
    }
    
    if (!validateDateRange(formData.startDate, formData.endDate)){
      alert('Please enter valid dates.');
      return; // Stop further execution if the format is not valid
    }

    try {
      const apiUrl = 'http://localhost:3000/api/events/addevent';
  
      const sortedCategories = selectedCategories.slice().sort();
      const categoriesString = sortedCategories.join(',');
  
      const updatedFormData = {
        ...formData,
        location: lowercasedLocation, // Update the location field with lowercase value
        category: categoriesString,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });
  
      if (response.ok) {
        console.log('Event added successfully!');
  
        setFormData({
          eventName: "",
          website: "",
          category: "",
          venue: "",
          location: "",
          startDate: "",
          endDate: ""
        });
  
        setSelectedCategories([]);
      } else {
        console.error('Failed to add event:', response.statusText);
        console.log(updatedFormData);
        console.log("didnt work");
      }
    } catch (error) {
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
            <label htmlFor="website" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Website:</label>
            <input type="text" className="form-control" id="website" name="website" value={formData.website} onChange={handleChange} required />
          </div>
        </div>
  
        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="venue" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Venue:</label>
            <input type="text" className="form-control" id="venue" name="venue" value={formData.venue} onChange={handleChange} required />
          </div>
  
          <div className="col-md-6 mb-3">
  <label htmlFor="location" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>Location:</label>
  <input
    type="text"
    className="form-control"
    id="location"
    name="location"
    placeholder="City, Country"
    value={formData.location}
    onChange={handleChange}
    required
  />
</div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="startDate" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5"}}>Start Date:</label>
            <input type="date" className="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="endDate" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5"}}>End Date:</label>
            <input type="date" className="form-control" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
        </div>
        <label htmlFor="location" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5", textAlign:"center" }}>Category:</label>
          
        <div className="row">
          {[
            'Books', 'Cars', 'Fashion',
            'Food', 'Movies', 'Music',
            'Startups', 'Tech', 'Western',
          ].map((category, index) => (
            <div key={index} className="col-md-4 mb-3">
              <label>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  disabled={selectedCategories.length === maxCategories && !selectedCategories.includes(category)}
                />
                <span style={{ color: 'white', opacity: '0.9', marginLeft:'10px' }}>{category}</span>
              </label>
            </div>
          ))}
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
