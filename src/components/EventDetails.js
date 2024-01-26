
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Eventcard from './eventcard';

const EventDetails = () => {
  const [relevantEvents, setRelevantEvents] = useState([]);
  const location = useLocation();
  const { state } = location;
  const host = "http://localhost:3000";
  const { event } = state || {};
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Function to fetch related events from the backend API
    if (event) {
    const fetchRelatedEvents = async () => {
      try {
        const response = await fetch(`${host}/api/events/relatedevents?category=${event.category}&location=${event.location}&date=${event.date}`);
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
    console.log('Event ID:', event.id);
    navigate(`/connectForm/${event.id}`, { state: { event } });
  };
  
  if (!event) {
    return <div>Loading...</div>; // or handle the case when event is undefined
  }

  const  myimage = "https://source.unsplash.com/1600x400/?" + event.category;
  
  return (

      <div >
      <h1 className="text-dark py-3" style={{marginTop:'100px', marginLeft:'100px'}}>{event.name}</h1>
      <hr style={{marginTop:'5px', marginLeft:'105px', marginRight:'100px', border: '1px solid rgba(33, 37, 41, 1)', backgroundColor: 'rgba(33, 37, 41, 1)', display: 'block'}}></hr>
      <div className='row'style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      
          <img
            src={myimage}
            alt="Description"
            style={{ width: '68vw', height: '40vh', marginRight:'20px', minHeight:'210px'}}
          />
        <div className="bg-grey p-3" style={{ width: '20vw', border: '1px solid #ccc', backgroundColor: '#d9d9d9', minHeight: '40vh', borderRadius: '10px' }}>
  <p className="mb-1"><strong>Location:</strong> {event.location}</p>
  <p className="mb-1"><strong>Date:</strong> {event.date}</p>
  <p className="mb-0"><strong>Category:</strong><span className="badge bg-dark" style={{ marginLeft: '10px' }}>{event.category}</span></p>
</div>

      </div>
      <p style={{marginLeft: '105px', marginTop: '20px'}}>{event.description}</p>
      <div style={{marginLeft:'105px'}}>
        <button type="button" className="btn btn-primary mr-2" style={{marginRight:'20px', backgroundColor:'#1d31d3'}} onClick={openConnectform}>Book a Connector</button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor:'#1d31d3'}}>Booth Support</button>
        </div>
      <h1 className="text-center text-dark py-3" style={{ marginTop: '30px' }}>
        Related Events
      </h1>
      <hr
        style={{
          marginTop: '5px',
          marginLeft: '115px',
          marginRight: '95px',
          border: '1px solid rgba(33, 37, 41, 1)',
          backgroundColor: 'rgba(33, 37, 41, 1)',
          display: 'block',
        }}
      ></hr>

      <div className="row justify-content-center" style={{ marginLeft: '100px', marginRight: '80px' }}>
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
