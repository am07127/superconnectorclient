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

  

  const handleChange = (e) => {
    const { name, value } = e.target;
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
  
    try {
      const apiUrl = 'http://localhost:3000/api/events/addevent';
  
      const sortedCategories = selectedCategories.slice().sort();
      const categoriesString = sortedCategories.join(',');
  
      const updatedFormData = {
        ...formData,
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
          startDate:"",
          endDate:""
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
            <input type="location" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} required />
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
          
          <label>
        <input
          type="checkbox"
          value="Books"
          checked={selectedCategories.includes('Books')}
          onChange={() => handleCheckboxChange('Books')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Books')}
        />
        Books
      </label>

      <label>
        <input
          type="checkbox"
          value="Cars"
          checked={selectedCategories.includes('Cars')}
          onChange={() => handleCheckboxChange('Cars')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Cars')}
        />
        Cars
      </label>

      <label>
        <input
          type="checkbox"
          value="Fashion"
          checked={selectedCategories.includes('Fashion')}
          onChange={() => handleCheckboxChange('Fashion')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Fashion')}
        />
        Fashion
      </label>

      <label>
      <input
          type="checkbox"
          value="Food"
          checked={selectedCategories.includes('Food')}
          onChange={() => handleCheckboxChange('Food')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Food')}
        />
        Food
      </label>

      <label>
        <input
          type="checkbox"
          value="Movies"
          checked={selectedCategories.includes('Movies')}
          onChange={() => handleCheckboxChange('Movies')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Movies')}
        />
        Movies
      </label>

      <label>
        <input
          type="checkbox"
          value="Music"
          checked={selectedCategories.includes('Music')}
          onChange={() => handleCheckboxChange('Music')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Music')}
        />
        Music
      </label>

      <label>
      <input
          type="checkbox"
          value="Startups"
          checked={selectedCategories.includes('Startups')}
          onChange={() => handleCheckboxChange('Startups')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Startups')}
        />
        Startups
      </label>

      <label>
        <input
          type="checkbox"
          value="Tech"
          checked={selectedCategories.includes('Tech')}
          onChange={() => handleCheckboxChange('Tech')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Tech')}
        />
        Tech
      </label>

      <label>
        <input
          type="checkbox"
          value="Western"
          checked={selectedCategories.includes('Western')}
          onChange={() => handleCheckboxChange('Western')}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes('Western')}
        />
        Western
      </label>
          
          
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
