
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Eventcard from './eventcard';
import './EventDetails.css';

const EventDetails = () => {

  const convertBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  const [relevantEvents, setRelevantEvents] = useState([]);
  const location = useLocation();
  const { state } = location;
  const host = "https://super-connector.onrender.com";
  const { event } = state || {};
  const navigate = useNavigate();

  const date = `${event.startDate} to ${event.endDate}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    // Function to fetch related events from the backend API
    if (event) {
    const fetchRelatedEvents = async () => {
      try {
        const response = await fetch(`${host}/api/events/relatedevents?category=${event.category}&location=${event.location}&date=${event.startDate}&eventName=${event.name}`);
        const data = await response.json();
        console.log(data);
        setRelevantEvents(data.related_events);
      } catch (error) {
        console.error('Error fetching related events:', error);
      }
    };
  
    // Call the fetchRelatedEvents function when the component mounts
    fetchRelatedEvents();}
  }, [event]);

  const openConnectform = () => {
    console.log('Selected Connector form');
    console.log('Event ID:', event._id);
    navigate(`/connectForm/${event._id}`, { state: { event } });
  };
  
  if (!event) {
    return <div>Loading...</div>; // or handle the case when event is undefined
  }

  var myimage = "";
  try {
    const base64Flag = `data:${event.image.contentType};base64,`;
    const imageStr = convertBufferToBase64(event.image.data.data);
    myimage = base64Flag + imageStr;
  } catch (err) {
    myimage = "https://source.unsplash.com/550x400/?" + event.category;
  }
  
  return (
<div className="event-details-container" style={{ marginTop: '100px', marginLeft: '60px', marginRight: '60px',fontFamily:'Poppins' }}>
  <a href={event.website} target='_blank' rel='noreferrer'><h1 className="py-3" style={{ marginTop: '100px' }}>{event.name}</h1></a>
  <hr
    style={{
      marginTop: '5px',
      border: '1px solid rgba(33, 37, 41, 1)',
      backgroundColor: 'rgba(33, 37, 41, 1)',
      display: 'block',
    }}
  ></hr>
  <div className='row' style={{marginRight:'1px'}}>
    <div className="col-lg-8">
      <img
        src={myimage}
        alt="Description"
        style={{ width: '100%', height: '40vh'}}
      />
    </div>
   <div className="col-lg-4 custom-bg-grey p-3" >
  <p className="mb-1" ><strong>Location:</strong> {event.location}</p>
  <p className="mb-1"><strong>Date:</strong> {date}</p>
  <div className="mb-0"><strong>Category:</strong>
    <div className="row">
    {event.category.split(",").map((category, index) => (
            <div className="col-4" key={index}>
              <span className="badge bg-secondary me-1">{category}</span>
            </div>
      ))}
    </div>
  </div>
</div>

  </div>

  <p style={{ marginTop: '20px' }}>{event.description}</p>
  <button type="button" className="btn btn-primary mr-2" style={{ backgroundColor: '#1d31d3' }} onClick={openConnectform}>Book a Connector</button>
  
  <h1 className="text-center text-dark py-3" style={{ marginTop: '30px' }}>
    Related Events
  </h1>
  <hr
    style={{
      marginTop: '5px',
      border: '1px solid rgba(33, 37, 41, 1)',
      backgroundColor: 'rgba(33, 37, 41, 1)',
      display: 'block',
    }}
  ></hr>

  <div className="row justify-content-center">
    {relevantEvents.map((relatedEvent) => (
      <div
        key={relatedEvent.id}
        className="col-lg-3 col-md-4 col-sm-6"
        style={{ marginBottom: '20px' }}
      >
        <Eventcard event={relatedEvent} />
      </div>
    ))}
  </div>
</div>



  );
};

export default EventDetails;
