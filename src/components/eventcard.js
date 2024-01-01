import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Services.css";

export default function Eventcard(props) {
  const { event } = props;

  const selectEvent = () => {
    console.log("Selected Event");
    //implement logic to load event details page with booth support and book a connector forms
    //This form will also have related events
    //pass appropriate props to the event details page
  }

  return (
    <div className="card">
      <img src={event.image} className="card-img-top" alt="..."  onClick={selectEvent}/>

      <div className="card-body text-center">
        <h5 className="card-title text-center fw-bold">{event.name}</h5>

        <p className="text-muted fst-italic" style={{ fontSize: "14px" }}>
          <i className="fas fa-map-marker-alt"></i> {event.location}
        </p>

        <p className="text-primary fst-italic" style={{ fontSize: "14px" }}>
          <i className="fas fa-calendar-alt"></i> {event.date}
        </p>

        <p className="text-success" style={{ fontSize: "18px" }}>
          {event.category}
        </p>

        <p className="card-text text-center">{event.description}</p>
      </div>
    </div>
  );
}
