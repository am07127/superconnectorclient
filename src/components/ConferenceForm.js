import React, { useState, useEffect } from "react";
import "./scrollbar.css";

const ConferenceForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    website: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    organizer: "",
    description: "",
    num: "",
    location: "",
    date: "",
  });

  useEffect(() => {
    // Scroll to the top of the page after the component is mounted
    window.scrollTo(0, 0);
  }, []);
  const capitalizeEachWord = (inputString) => {
    // Split the input string into an array of words
    const words = inputString.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words back together into a single string
    const resultString = capitalizedWords.join(" ");

    return resultString;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const prevwindow = () => {
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const capitalizedEvent = capitalizeEachWord(formData.eventName);
    const isValidLocationFormat = /^[A-Z][a-zA-Z]*,\s[A-Z][a-zA-Z]*$/.test(
      formData.location
    );

    if (!isValidLocationFormat) {
      alert("Invalid location format. Please enter in City, Country format.");
      return; // Stop further execution if the format is not valid
    }
    try {
      const apiUrl =
        "https://super-connector.onrender.com/api/conferences/addconference";

      const updatedFormData = {
        ...formData,
        eventName: capitalizedEvent,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert("Connector added successfully!");

        setFormData({
          eventName: "",
          website: "",
          facebook: "",
          linkedin: "",
          instagram: "",
          organizer: "",
          description: "",
          num: "",
          location: "",
          date: "",
        });
      } else {
        console.error("Failed to add connector:", response.statusText);
        console.log(updatedFormData);
        console.log("didnt work");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div
      className="position-relative bg-image p-5 shadow-1-strong"
      style={{ marginTop: "30px" }}
    >
      <button
        className="btn btn-primary d-block mx-auto"
        onClick={prevwindow}
        style={{
          zIndex: "1000",
          position: "absolute",
          top: "70px",
          left: "40px",
          backgroundColor: "#1d31d3",
          borderColor: "#1d31d3",
          color: "white",
        }}
      >
        <i className="fas fa-arrow-left"></i> Go Back
      </button>
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
          <div
            className="container mt-2"
            style={{
              borderStyle: "solid",
              marginBottom: "30px",
              padding: "20px",
            }}
          >
            <h3 style={{ color: "white", textAlign: "center" }}>
              ADD A CONFERENCE
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="eventName"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Event Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label
                htmlFor="location"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Location:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="City, Country"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label
                htmlFor="facebook"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Facebook:
              </label>
              <input
                type="text"
                className="form-control"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label
                htmlFor="instagram"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Instagram:
              </label>
              <input
                type="text"
                className="form-control"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label
                htmlFor="linkedin"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                LinkedIn:
              </label>
              <input
                type="text"
                className="form-control"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="organizer"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Contact Person:
              </label>
              <input
                type="text"
                className="form-control"
                id="organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                htmlFor="website"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Website:
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="startDate"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label
                htmlFor="num"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Contact Number:
              </label>
              <input
                type="tel"
                className="form-control"
                id="num"
                name="num"
                pattern="[0-9]*"
                value={formData.num}
                onChange={handleChange}
                required
              />
              <div style={{ color: "whitesmoke" }}>
                <p>Please enter digits only</p>
              </div>
            </div>
          </div>
          <div className="event-description-box">
            <label
              htmlFor="description"
              className="form-label"
              style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
            >
              Event Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description..."
              className="form-control"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            style={{
              backgroundColor: "#1d31d3",
              borderColor: "#1d31d3",
              marginTop: "30px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConferenceForm;
