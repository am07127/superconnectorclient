import React from "react";
import { useState } from "react";
import "./Services.css";
import ConferenceCard from "./ConferenceCard.js";
const events = [
  {
    id: 1,
    name: "Bitcoin Conference",
    subHeading: "World's largest Bitcoin conference",
    date: "25/7/24 - 27/7/24",
    website: "https://b.tc/conference",
    description: "The Bitcoin Conference is a prominent event in the world of cryptocurrencies, bringing together industry experts, developers, investors, entrepreneurs, and enthusiasts. It serves as a platform for discussing various aspects of Bitcoin and the broader cryptocurrency ecosystem. The conference features keynote speeches, panel discussions, workshops, and networking opportunities. Topics covered include mining strategies, valuing Bitcoin, and insights from influential figures in the cryptocurrency space. Attendees include heads of innovation and technology, IT directors, technology enthusiasts, telecom providers, developers, start-ups, OEMs, automotive operators, technology providers, and investors.",
    image: "https://source.unsplash.com/1600x750/?tech",
  },
  {
    id: 2,
    name: "Step Conference",
    subHeading:"THE LEADING TECH FESTIVAL FOR EMERGING MARKETS",
    date: "21/2/24 - 22/2/24",
    website: "https://stepconference.com/",
    description: "Step Conference is a premier technology and startup festival held in Dubai, UAE. It brings together innovators, entrepreneurs, and industry leaders from around the world to exchange ideas. With diverse tracks covering topics like technology, marketing, fintech, and digital media, the conference offers engaging discussions, workshops, and speeches by experts. Over 400 startups have the opportunity to showcase their ideas and connect with investors and mentors. With 8,000 attendees, Step Conference provides a vibrant networking environment. Known for its dynamic atmosphere, it is a must-attend event for staying updated on trends and gaining insights into the world of technology and startups.",
    image: "https://source.unsplash.com/1600x750/?music",
  },
  {
    id: 3,
    name: "Maissane Design",
    subHeading:"The best of international design!",
    date: "",
    website: "https://maissane-design.fr/en/",
    description: "The Maissane Design Conference is a prestigious event celebrating innovation and creativity among UAE-based design companies. It brings together artists, designers, photographers, and other creative professionals for three days of exhibitions, presentations, and collaborations. Held in Abu Dhabi as part of the International Fair of Exceptional Art and Crafts, it offers a platform to showcase work, explore trends, and connect with industry peers. It is an opportunity for participants to elevate their design journey to the global stage and gain recognition for their exceptional talent. The conference aims to foster collaborations, recognize creativity, and promote the continuous growth and evolution of the UAE's design sector",
    image: "https://source.unsplash.com/1600x750/?cars",
  },
  {
    id: 4,
    name: "The Business Show Miami",
    subHeading:"The world’s largest business show!",
    date: "",
    website: "https://thebusinessshowus.com/?utm_source=PARTNERsuperconnector",
    description: "Are you bored with your current career venture? Are you thinking about going it alone but do not know where to start? The Business Show Miami will give you everything you need tostart your dream business. If you are already a small business or startup owner you will begiven all the tips, tricks, and resources to grow your business to new and exciting heights. Taking place on the 6th &amp; 7th of March 2024 at The Miami Beach Convention Center, this is the place to be for aspiring entrepreneurs and business-minded individuals. With inspiring keynotes, enriching seminars, interactive masterclasses, live panel debates,and limitless networking opportunities, you won’t find these resources anywhere else. Ourseminars are presented by a host of industry experts all under one roof to give you the tricksof the trade. Our packed programme ensures that every business professional will comeaway having gained new products, resources, knowledge, or connections. Also, with 300cutting-edge exhibitors under one roof spanning a vast variety of sectors, everyone andanyone in the world of business will find something that captures their interest.Additionally, your free ticket gives you access to co-located shows Working From HomeLive, Retrain Expo, Going Global Live, The Sustainability Zone, and The Future of Work.Working From Home Live provides employers and employees with the products andservices they need to work remotely and effectively, Retrain Expo covers all aspects ofretraining, reskilling and career progression for both individuals and employers and GoingGlobal Live helps you to take your business overseas. The Sustainability Zone helpsbusinesses become greener, and The Future of Work explores digital transformation andrevolutionary technological advances. The Business Show Miami will fast-track your journey to success and grow your business tonew and exciting heights. So what are you waiting for? To register for your FREE ticket,simply head over to The Business Show.",
    image: process.env.PUBLIC_URL + "TBS_Miami_1600_400.png",
  }
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

export default function Conferences() {
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
    <div style={{backgroundColor:'darkgray'}}>
        <div
          className="bg-image py-2 text-center shadow-1-strong rounded"
        >
          
          <h1 className="text-center text-dark pt-4">
            Superconnector X Partnerships
          </h1>
        </div>
      
      <div className="container py-3">
        <div className="row">
          {events.map((event) => (
            <div className="col-md-3 my-2" key={event.id}>
              <ConferenceCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
