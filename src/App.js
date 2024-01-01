import React from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import Services from "./components/Services";
import Events from "./components/events";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Services />} />
        <Route exact path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
