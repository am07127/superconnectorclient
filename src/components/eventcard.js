import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Services.css";
import { Navigate, useNavigate } from "react-router";

export default function Eventcard(props) {
  const { event } = props;
  const navigate = useNavigate();

  const selectEvent = () => {
    console.log("Selected Event");
    console.log("NO");
    console.log("Event ID:", event.id);
    //implement logic to load event details page with booth support and book a connector forms
    navigate(`/event/${event.id}`, { state: { event } });
    //This form will also have related events
    //pass appropriate props to the event details page
  }
  const myimage = "https://source.unsplash.com/1600x400/?"+event.category;

  return (
    
    <div className="card">
      <img src={myimage}  className="card-img-top" alt="..."  onClick={selectEvent}/>

      <div className="card-body text-center">
        <h5 className="card-title text-center fw-bold">{event.name}</h5>

        <p className="text-muted fst-italic" style={{ fontSize: "14px" }}>
          <i className="fas fa-map-marker-alt"></i> {event.location}
        </p>

        <p className="text-primary fst-italic" style={{ fontSize: "14px" }}>
          <i className="fas fa-calendar-alt"></i> {event.date}
        </p>

        <p style={{ fontSize: "20px" , backgroundColor:'#1d31d3', color:'white', borderRadius:'5px'}}>
          {event.category}
        </p>
      </div>
    </div>
  );
}
