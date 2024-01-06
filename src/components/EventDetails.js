import {React, useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Eventcard from './eventcard';

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

const filteredEvents = [
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
  }
  
]
const EventDetails = () => {
  const [relevantEvents, setRelevantEvents] = useState([]);
  const location = useLocation();
  const { state } = location;

  const { event } = state;
  
  const navigate = useNavigate();

  const openConnectform = () => {
    console.log("Selected Connector form");
    console.log("Event ID:", event.id);
    //implement logic to load event details page with booth support and book a connector forms
    navigate(`/connectForm/${event.id}`, { state: { event } });
    //This form will also have related events
    //pass appropriate props to the event details page
  }

  return (
    <div >
      <h1 className="text-dark py-3" style={{marginTop:'100px', marginLeft:'100px'}}>{event.name}</h1>
      <hr style={{marginTop:'5px', marginLeft:'105px', marginRight:'100px', border: '1px solid rgba(33, 37, 41, 1)', backgroundColor: 'rgba(33, 37, 41, 1)', display: 'block'}}></hr>
      <div className='row'style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      
          <img
            src={event.image}
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
        <h1 className="text-center text-dark py-3" style={{marginTop: '30px'}}>Related Events</h1>
      <hr style={{marginTop:'5px', marginLeft:'115px', marginRight:'95px', border: '1px solid rgba(33, 37, 41, 1)', backgroundColor: 'rgba(33, 37, 41, 1)', display: 'block'}}></hr>

        {/* <div className="container my-3" style={{marginLeft:'105px'}}> */}
        <div className="row justify-content-center" style={{marginLeft:'100px', marginRight:'80px'}}>
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="col-lg-3 col-md-4 col-sm-6"
            style={{ marginBottom: '20px' }}
          >
            <Eventcard event={event} />
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default EventDetails;
