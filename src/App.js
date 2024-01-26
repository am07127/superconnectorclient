import React from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import Services from "./components/Services";
import Events from "./components/events";
import EventDetails from "./components/EventDetails";
import ConnectorForm from "./components/ConnectorForm";
import Login from "./components/login";
import Conferences from "./components/Conferences";
import EventForm from "./components/EventForm";

function App() {
  return (
    <div className="App" >
      
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Services />} />
        <Route exact path="/events" element={<Events />} />
        {/* <Route exact path="/conferences" element={<Conferences/>} /> */}
        <Route exact path="/event/:eventID" element={<EventDetails/>} />
        <Route exact path="/connectForm/:eventID" element={<ConnectorForm/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/eventForm" element={<EventForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
