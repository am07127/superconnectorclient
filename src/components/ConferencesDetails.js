
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EventDetails.css';

const ConferencesDetails = () => {
  const [relevantEvents, setRelevantEvents] = useState([]);
  const location = useLocation();
  const { state } = location;
  const host = "https://super-connector.onrender.com";
  const { event } = state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
    // Function to fetch related events from the backend API
  }, [event]);


  
  if (!event) {
    return <div>Loading...</div>; // or handle the case when event is undefined
  }

  
  return (
<div className="conference-details-container" style={{ marginTop: '100px', marginLeft: '60px', marginRight: '60px' }}>

  {/* <h4 className="text-dark py-3">{event.subHeading}</h4>
  <hr
    style={{
      marginTop: '5px',
      border: '1px solid rgba(33, 37, 41, 1)',
      backgroundColor: 'rgba(33, 37, 41, 1)',
      display: 'block',
    }}
  ></hr> */}

      <img
        src= {event.image}
        alt="Description"
        style={{ width: '100%', height: '40vh'}}
      />

   

  <h1 className="text-center text-dark my-4">
            SUPERCONNECTOR <span className="light-orange">X </span>{event.name}
          </h1>
          <hr
    style={{
      marginTop: '5px',
      border: '1px solid rgba(33, 37, 41, 1)',
      backgroundColor: 'rgba(33, 37, 41, 1)',
      display: 'block',
    }}
  ></hr> 
  <h3 className="light-orange text-center "  >{event.subHeading}</h3>
  
  <p style={{ marginTop: '20px', marginBottom:'40px' }}>{event.description}</p>

</div>


  );
};

export default ConferencesDetails;
