import React from "react";
import "./Services.css";
import Events from "./events";
import { useNavigate } from "react-router";
import Conferences from "./Conferences";

import { useEffect, useRef } from "react";

function Services() {
  const containerRef = useRef(null);
  const secondRef = useRef(null);
  const newRef = useRef(null);
  const navigate = useNavigate();

  const openConnector = () => {
    console.log("Selected Event form");
    //implement logic to load event details page with booth support and book a connector forms
    navigate(`/genConnect`);
    //This form will also have related events
    //pass appropriate props to the event details page
  };
  useEffect(() => {
    const containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-columns");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const secondObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-columns");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const thirdObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-columns");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    if (secondRef.current) {
      secondObserver.observe(secondRef.current);
    }

    if (newRef.current) {
      thirdObserver.observe(newRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      containerObserver.disconnect();
      secondObserver.disconnect();
      thirdObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxHeight: "750px", overflow: "hidden" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "carousel1.jpg"}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-none d-md-block mb-5">
              <strong>
                <h1>
                  GLOBAL PRESENCE AT{" "}
                  <span className="white">NETWORKING EVENTS</span>
                </h1>
              </strong>
              <button
                type="button"
                onClick={openConnector}
                className="btn-transparent btn-lg"
              >
                BOOK A CONNECTOR
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={newRef} id="aboutus" className="goal-container">
        <div className="row no-gutters d-flex align-items-stretch">
          <div className="content-container">
            <h1 className="text-center text-dark py-3">About Us</h1>
            <h5 className="text-center" style={{ lineHeight: 2 }}>
              Super Connector represents companies on-floor at networking events
              and trade shows around the globe. Representation for the company
              is conducted by people who are expert relationship builders with
              high levels of emotional intelligence and are also known as{" "}
              <strong>"Super Connectors."</strong>
            </h5>
          </div>
        </div>
      </div>

      <div className="services py-5" id="services">
        <div ref={containerRef} className="container mt-3 pt-5">
          <div className="row">
            <h1 className="text-center py-3">Our Services</h1>
          </div>
        </div>

        {/* Services Section */}
        <div ref={secondRef} className="container py-3">
          <div className="row">
            <div className="col-md-6 border-end border-4 border-white">
              <div
                style={{
                  maxWidth: "450px",
                  marginLeft: "50px",
                  marginRight: "50px",
                  lineHeight: 2,
                }}
              >
                <h5 className="text-center py-3">On-Floor Networking</h5>
                <p className="text-center">
                  Super Connectors are trained experts with a deep well of
                  industry knowledge, strategic insights, and remarkable
                  networking skills, acting as the perfect replacement for
                  people who are unable to attend these events.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                style={{
                  maxWidth: "450px",
                  marginLeft: "100px",
                  marginRight: "50px",
                  lineHeight: 2,
                }}
              >
                <h5 className="text-center py-3">Booth Support</h5>
                <p className="text-center">
                  Super Connectors provide assistance at booths, aiding in the
                  initial setup and logistics, engaging with attendees,
                  representing the company and maximizing presence and impact at
                  an event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content or sections can be added here */}
      <div id="eventsection">
        <Events />
      </div>
      <div id="conferencesection">
        <Conferences />
      </div>
    </div>
  );
}

export default Services;
