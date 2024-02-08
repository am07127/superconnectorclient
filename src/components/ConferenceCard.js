import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Services.css";
import { Navigate, useNavigate } from "react-router";
export default function ConferenceCard(props) {
  const { event } = props;
  const navigate = useNavigate();

  const convertBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  var myimage = "";
  try {
    const base64Flag = `data:${event.image.contentType};base64,`;
    const imageStr = convertBufferToBase64(event.image.data.data);
    myimage = base64Flag + imageStr;
  } catch (err) {
    myimage = "https://source.unsplash.com/550x400/?" + event.category;
  }

  const selectEvent = () => {
    console.log("Selected Event");
    console.log("NO");
    console.log("Event ID:", event.id);
    //implement logic to load event details page with booth support and book a connector forms
    navigate(`/conference/${event.id}`, { state: { event, myimage } });
    
    //This form will also have related events
    //pass appropriate props to the event details page
  };

  return (
    <div className="card">
      <img
        src={myimage}
        className="card-img-top"
        alt="..."
        onClick={selectEvent}
        style={{ height: "200px" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title text-center fw-bold">
          {event.eventName.length > 18 ? event.eventName.substring(0, 18) + "..." : event.eventName}
        </h5>

        {/* <p className="text-muted fst-italic" style={{ fontSize: "14px" }}>
          <i className="fas fa-map-marker-alt"></i> {event.location}
        </p> */}


        
      </div>
    </div>
  );
}
