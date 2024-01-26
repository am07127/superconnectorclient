import React, { useState } from "react";
import "./scrollbar.css";

const GenConnector = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    firstname: "",
    lastname: "",
    selection: "",
    companyName: "",
    email: "",
    contactNumber: "",
  });

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
    console.log("Form Data:", formData);

    setFormData({
        eventName: "",
        firstname: "",
        lastname: "",
        selection: "",
        companyName: "",
        email: "",
        contactNumber: "",
    });
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
          <div
            className="container mt-2"
            style={{
              borderStyle: "solid",
              marginBottom: "30px",
              padding: "20px",
            }}
          >
            <h3
              style={{ color: "white", textAlign: "center" }}
            >
              BOOK A CONNECTOR
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
              htmlFor="companyName"
              className="form-label"
              style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
            >
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
            </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="firstname"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                htmlFor="lastname"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              
            </div>
          </div>

          
          <div className="row">
            <div className="col-md-6">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
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

            <div className="col-md-6">
              <label
                htmlFor="contactNumber"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
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
              <div style={{ color: "whitesmoke" }}>
                <p>Please enter digits only</p>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="mb-3">
              <label
                htmlFor="selection"
                className="form-label"
                style={{ color: "white", fontWeight: "bold", opacity: "1.5" }}
              >
                Booking Type:
              </label>
              <select
                className="form-select"
                id="selection"
                name="selection"
                value={formData.selection}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="booth-support">Booth Support</option>
                <option value="book-connector">Book a Connector</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            style={{ backgroundColor: "#1d31d3", borderColor: "#1d31d3" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenConnector;
