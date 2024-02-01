import React from "react";
import Eventcard from "./eventcard";
import { useState, useEffect, useRef } from "react";

import {  useNavigate } from "react-router";
import _ from "lodash";
import Dropdown from "./dropdown";
import "./Services.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const categories = [
  "Tech",
  "Food",
  "Music",
  "Books",
  "Startups",
  "Fashion",
  "Movies",
  "Cars",
  "Western",
];

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
  "Netherlands",
  "Not selected"
];

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [month, setMonth] = useState(months[0]);
  const [category, setCategory] = useState(categories[0]);
  const [location, setLocation] = useState("Not selected");
  const [hasMoreEvents, setHasMoreEvents] = useState(true);
  const [initialload, setInitialload] = useState(false);

  const [page, setPage] = useState(0);
  const inputRef = useRef();
  const host = "https://super-connector.onrender.com";

  const navigate = useNavigate();

  const openAddEvent = () => {
    console.log("Selected Event form");
    //implement logic to load event details page with booth support and book a connector forms
    navigate(`/eventForm`);
    //This form will also have related events
    //pass appropriate props to the event details page
  };
  const fetchevents = async () => {
    setInitialload(true);
    const res = await fetch(`${host}/api/events/getevents?page=${page}`);
    const data = await res.json();
    setEvents(data.docs);
    setInitialload(false);
  };

  useEffect(() => {
    fetchevents();
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  // Handler
  const onSearchText = async (selected) => {
    if (selected === "") {
      fetchevents();
      return;
    }
    setLoading(true);
    const res = await fetch(
      `${host}/api/events/search?text=${selected}&page=0&size=20`
    );
    const data = await res.json();
    setEvents(data.docs);
    setLoading(false);
  };

  const handleSearch = (e) => {
    const selected = e.target.value;
    setSelected(selected);
    inputRef.current(selected);
  };

  const fetchmoreevents = async () => {
    setLoading(true);
    const res = await fetch(`${host}/api/events/getevents?page=${page + 1}`);
    setPage(page + 1);
    const data = await res.json();
    setEvents((events) => [...events, ...data.docs]);

    // Check if there are more events
    if (data.docs.length === 0) {
      setHasMoreEvents(false);
    }

    setLoading(false);
  };

  const handleadvanced = async () => {
    setLoading(true);
    var params = "";
    if (location === "Not selected") {
      console.log("Not selected");
      params = new URLSearchParams({
        month: month,
        category: category,
        location: "",
      });
    } else {
      params = new URLSearchParams({
        month: month,
        category: category,
        location: location,
      });
    }
    const res = await fetch(
      `${host}/api/events/advancedsearch?${params}&page=0&size=20`
    );
    const data = await res.json();
    setEvents(data.docs);
    setLoading(false);
  };

  const handlefinalsearch = async () => {
    if (selected === "") {
      fetchevents();
      return;
    }
    setLoading(true);
    const res = await fetch(
      `${host}/api/events/smartsearch?text=${selected}&page=0&size=20`
    );
    const data = await res.json();
    setEvents(data.docs);
    setLoading(false);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Advanced Search
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="container my-3">
                  <label className="form-label">Select Category:</label>
                  <Dropdown
                    options={categories}
                    name={category}
                    onChange={setCategory}
                  />
                </div>
                <div className="container my-3">
                  <label className="form-label">Select Month:</label>
                  <Dropdown options={months} name={month} onChange={setMonth} />
                </div>
                <div className="container my-3">
                  <label className="form-label">Enter Location:</label>
                  <div className="input-group mb-3">
                    {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Search by location..."
                      onChange={handlelocation}
                      value={location}
                    /> */}
                    <Dropdown
                      options={countries}
                      name={location}
                      onChange={setLocation}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleadvanced}
                data-bs-dismiss="modal"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="bg-image p-5 text-center shadow-1-strong rounded mb-5"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "darkgray",
          }}
        >
          <h1 className="text-center text-dark mb-4">
            Find Your Event
          </h1>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by keyword..."
                    onChange={handleSearch}
                    value={selected}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dark"
                      type="button"
                      id="button-addon2"
                      onClick={handlefinalsearch}
                    >
                      <svg
                        className="search-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill='white'
                      >
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-dark mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Advanced Search
                </button>
                <button
                  type="button"
                  className="btn btn-dark mx-2"
                  onClick={openAddEvent}
                >
                  Add event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          {initialload ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            events
              .filter((event) => event.isApproved)
              .map((event) => (
                <div className="col-md-3 my-2" key={event._id}>
                  <Eventcard event={event} />
                </div>
              ))
          )}
        </div>
      </div>
      <div className="container my-3">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <button
              className="btn btn-dark"
              onClick={fetchmoreevents}
              disabled={!hasMoreEvents}
            >
              {hasMoreEvents ? "Load More" : "No More Events"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
