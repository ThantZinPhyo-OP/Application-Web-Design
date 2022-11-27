import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Information</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Policy</a>
            <a href="#">&bull; Rules</a>
            <a href="#">&bull; Contact</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Menu</h4>
          <div className="footer-links">
            <a href="#">&bull; Home</a>
            <a href="#">&bull; Feature</a>
            <a href="#">&bull; Service</a>
            <a href="#">&bull; Faqs</a>
            <a href="#">&bull; Get Start</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; Activation</a>
            <a href="#">&bull; Exchange</a>
            <a href="#">&bull; Services</a>
            <a href="#">&bull; Fees</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact ">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Burma.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +959 007 007 007.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +007007007
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@mypay.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;