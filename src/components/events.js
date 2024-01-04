import React from "react";
import Eventcard from "./eventcard";
import { useState } from "react";
import Dropdown from "./dropdown";
import "./Services.css";

const events = [
  {
    id: 1,
    name: "Tech Conference",
    date: "2023-03-07",
    location: "San Francisco",
    description: "Two day tech conference with speakers and exhibitions",
    image: "https://source.unsplash.com/1600x750/?tech",
    category: "tech",
  },
  {
    id: 2,
    name: "Food Festival",
    date: "2023-05-15",
    location: "Berlin",
    description:
      "Annual food festival showcasing delicacies from around the world",
    image: "https://source.unsplash.com/1600x750/?food",
    category: "food",
  },
  {
    id: 3,
    name: "Music Concert",
    date: "2023-06-19",
    location: "London",
    description: "Outdoor concert featuring top pop artists",
    image: "https://source.unsplash.com/1600x750/?music",
    category: "music",
  },
  {
    id: 4,
    name: "Book Fair",
    date: "2023-08-29",
    location: "Chicago",
    description:
      "The largest book fair in the city with free workshops and author events",
    image: "https://source.unsplash.com/1600x750/?books",
    category: "books",
  },
  {
    id: 5,
    name: "Startup Expo",
    date: "2023-10-14",
    location: "New York",
    description:
      "Expo for startups to showcase their products to investors and the public",
    image: "https://source.unsplash.com/1600x750/?startups",
    category: "startups",
  },
  {
    id: 6,
    name: "Fashion Show",
    date: "2023-11-21",
    location: "Paris",
    description: "Fashion show showcasing the latest trends from top designers",
    image: "https://source.unsplash.com/1600x750/?fashion",
    category: "fashion",
  },
  {
    id: 7,
    name: "Movie Awards",
    date: "2023-12-01",
    location: "Los Angeles",
    description: "Annual awards ceremony honoring the best movies of the year",
    image: "https://source.unsplash.com/1600x750/?movies",
    category: "movies",
  },
  {
    id: 8,
    name: "Auto Show",
    date: "2024-01-08",
    location: "Detroit",
    description:
      "Car show showcasing the latest models from top auto manufacturers",
    image: "https://source.unsplash.com/1600x750/?cars",
    category: "cars",
  },
];

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
];

export default function Events() {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selected, setSelected] = useState("");
  const [month, setMonth] = useState(months[0]);

  // Handler
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const filtered = events.filter((event) => {
      return event.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    setFilteredEvents(filtered);
  };

  const handleDate = (e) => {
    const date = e.target.value;

    const filtered = events.filter((event) => {
      return event.date === date;
    });

    setFilteredEvents(filtered);
  };

  return (
    <>
      <div>
        
        <div
          className="bg-image p-5 text-center shadow-1-strong rounded mb-5"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <h1 className="text-center text-light my-5 pt-5">FIND YOUR <span className="light-orange">EVENT</span></h1>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by keyword..."
                    onChange={handleSearch}
                  />
                  <div className="input-group-append">
                    <Dropdown options={categories} name="Category" onChange={setSelected} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Dropdown options={months} name="Month" onChange={setMonth} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          {filteredEvents.map((event) => (
            <div className="col-md-3 my-2" key={event.id}>
              <Eventcard event={event} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
