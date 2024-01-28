import React, { useState,useEffect } from "react";
// import { useLocation } from "react-router-dom";
import "./scrollbar.css";
import "./EventForm.css";
const countries = [
  "USA",
  "UK",
  "UAE",
  "Canada",
  "Japan",
  "France",
  "China",
  "Germany",
  "Italy",
  "India",
  "Romania",
  "Ireland",
  "Netherlands"

];
const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    website: "",
    category: "",
    venue: "",
    city: "",
    country:"",
    startDate:"",
    endDate:"",
    extra:"",
    location:""
  });
  useEffect(() => {
    // Scroll to the top of the page after the component is mounted
    window.scrollTo(0, 0);
  }, []); 
  
  function validateDateRange(startDate, endDate) {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
  
    // Check if either date is invalid
    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      // Invalid date format, handle accordingly
      return false;
    }
  
    return endDateTime >= startDateTime;
  }

  const capitalizeEachWord = (inputString) => {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back together into a single string
    const resultString = capitalizedWords.join(' ');

    return resultString;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "extra") {
      // If the "Others" input is filled, disable the country select
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        country: "",
      }));
    } else if (name === "country") {
      // If a country is selected, clear the "Others" input
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        extra: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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

    const capitalizedCity = capitalizeEachWord(formData.city);
    const capitalizedEvent = capitalizeEachWord(formData.eventName);
    // const locate = `${capitalizedCity}, ${formData.country}`;

      let locate;
      if (formData.extra) {
        // If "Others" input is filled, concatenate it with the city
        const capitalizedCountry = capitalizeEachWord(formData.extra);     
        locate = `${capitalizedCity}, ${capitalizedCountry}`;
      } else {
        // If country is selected, concatenate it with the city
        locate = `${capitalizedCity}, ${formData.country}`;
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
      const apiUrl = 'https://super-connector.onrender.com/api/events/addevent';
  
      const sortedCategories = selectedCategories.slice().sort();
      const categoriesString = sortedCategories.join(',');
  
      const updatedFormData = {
        ...formData,
        location: locate,
        eventName: capitalizedEvent,
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
        alert('Event added successfully!');
  
        setFormData({
          eventName: "",
        website: "",
        category: "",
        venue: "",
        city: "",
        country:"",
        startDate:"",
        endDate:"",
        extra:"",
        location:""
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
                  <div className="container" style={{ borderStyle: "solid", marginBottom: "20px", padding: "15px" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>ADD AN EVENT</h3>
          <p style={{ color: "white", textAlign: "center" }}>Fill this form to have your event showcased on the Super Connector website.</p>
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
  <label htmlFor="city" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>City:</label>
  <input
    type="text"
    className="form-control"
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
    required
  />
</div>
        </div>
        <div className="row">
        <div className="col-md-6 mb-3">
  <label htmlFor="country" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>
    Country:
  </label>
  <select
    className="form-select"
    id="country"
    name="country"
    value={formData.country}
    onChange={handleChange}
    // Set required attribute based on whether "Others" is filled
    required={!formData.extra}
  >
    <option value="">Select a country</option>
    {countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ))}
  </select>
</div>

<div className="col-md-6 mb-3">
  <label htmlFor="extra" className="form-label" style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}>
    Others:
  </label>
  <input
    type="text"
    className="form-control"
    id="extra"
    name="extra"
    value={formData.extra}
    onChange={handleChange}
    // Set required attribute based on whether country is selected
    required={!formData.country}
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
           
<div className="category-row">
  {[
    'Books', 'Cars', 'Fashion',
    'Food', 'Movies', 'Music',
    'Startups', 'Tech', 'Others',
  ].map((category, index) => (
    <div key={index} className="category-col mb-3">
      <label>
        <input
          type="checkbox"
          value={category}
          checked={selectedCategories.includes(category)}
          onChange={() => handleCheckboxChange(category)}
          disabled={selectedCategories.length === maxCategories && !selectedCategories.includes(category)}
        />
        <span style={{ color: 'white', opacity: '0.9', marginLeft: '10px' }}>{category}</span>
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
