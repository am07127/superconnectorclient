import React from "react";
import { Link,useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={process.env.PUBLIC_URL + "/sc logo 3.png"}
              alt="Bootstrap"
              width="40"
              height="60"
            />
          </a>
          <Link className="navbar-brand" to="/">
            Super Connector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              {isHomePage ? (
                  <a className="nav-link" href="#eventsection">
                    Events
                  </a>
                ) : (
                  // If on a separate page, navigate to home and use a hash link
                  <Link className="nav-link" to="/#eventsection">
                    Events
                  </Link>
                )}
              </li>
              <li className="nav-item">
              {isHomePage ? (
                  <a className="nav-link" href="#conferencesection">
                    Conferences
                  </a>
                ) : (
                  // If on a separate page, navigate to home and use a hash link
                  <Link className="nav-link" to="/#conferencesection">
                    Conferences
                  </Link>
                )}
              </li>
              <li className="nav-item">
              {isHomePage ? (
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                ) : (
                  // If on a separate page, navigate to home and use a hash link
                  <Link className="nav-link" to="/#services">
                    Services
                  </Link>
                )}
              </li>
              <li className="nav-item">
              {isHomePage ? (
                  <a className="nav-link" href="#aboutus">
                    About Us
                  </a>
                ) : (
                  // If on a separate page, navigate to home and use a hash link
                  <Link className="nav-link" to="/#aboutus">
                    About Us
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
