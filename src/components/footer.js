import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div id="contactus">
      <footer
        className="text-center text-lg-start text-white pt-4"
        style={{backgroundColor: "#1c2331"}}
      >
        

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                <h6 className="text-uppercase fw-bold">Super Connector Service</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                Super Connector provides representation to companies at events. If you, or your team, are unable to attend an event, Book a Connector with Super Connector for an amazing experience.
                </p>
              </div>

              

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Austin, Texas, USA
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> emmy@superconnectorservice.com
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> sales@superconnectorservice.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +1 512 717 8707
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{backgroundColor: "#07064d"}}
        >
          <section
          className="d-flex justify-content-between p-4"
          style={{backgroundColor: "#07064d"}}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/superconnectorservice?mibextid=2JQ9oc" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/superconnectorservice?igsh=MW5vZ3A5cWRucnVnYg==" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/super-connector-service/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
