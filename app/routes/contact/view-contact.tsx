import React from "react";
import "./view-contact.scss";
import TopBar from "~/components/bar/top-bar";

export default function ViewContact() {
  return (
      <>
        <TopBar />
    <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> nik.nenkov@icloud.com</p>
        <p><strong>Phone:</strong> +359 888 123 456</p>
        <p><strong>Location:</strong> Sofia, Bulgaria</p>
      </div>
      <div className="map-container">
        <iframe
          title="Sofia, Bulgaria Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23514.14184612491!2d23.3218675!3d42.6977082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa857d7b1a5b3f%3A0x400a01269bfaa90!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1683641234567!5m2!1sen!2sbg"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
    </>
  );
}