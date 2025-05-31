import React from "react";
import { Meta } from "react-router";
import "./view-contact.scss";
import TopBar from "~/components/bar/top-bar";
import { useTranslation } from "react-i18next";

// SEO meta function
export function meta() {
  return [
    { title: "Contact Nikolay Nenkov - Full Stack Developer" },
    {
      name: "description",
      content:
        "Contact Nikolay Nenkov, Full Stack Developer based in Sofia, Bulgaria. Email: nik@nenkov.site, Phone: +359 890 138 750.",
    },
  ];
}

export default function ViewContact() {
  const { t } = useTranslation();
  return (
    <>
      <Meta />
      <TopBar title={t("contactTitle")} />
      <section className="contact-section">
        <h1>Contact Me</h1>
        <div className="contact-details">
          <p><strong>Николай Радославов Ненков</strong></p>
          <p>Founder &amp; Software Consultant<br />Greenwall Business Systems Ltd</p>
          <p>
            <span role="img" aria-label="Phone">📞</span> <a href="tel:+359890138750">+359 890 138 750</a>
          </p>
          <p>
            <span role="img" aria-label="Website">🌐</span> <a href="https://www.nenkov.site" target="_blank" rel="noopener noreferrer">www.nenkov.site</a>
          </p>
          <p>
            <span role="img" aria-label="Email">✉️</span> <a href="mailto:nik@nenkov.site">nik@nenkov.site</a>
          </p>
          <p>
            <span role="img" aria-label="LinkedIn">💻</span> <a href="https://www.linkedin.com/in/nik-nenkov" target="_blank" rel="noopener noreferrer">LinkedIn/nik-nenkov</a>
          </p>
          <p>
            <span role="img" aria-label="Book a meeting">📅</span> <a href="https://calendly.com/nik-nenkov" target="_blank" rel="noopener noreferrer">Book an online meeting</a>
          </p>
          <p style={{ fontStyle: "italic", marginTop: "1.5rem" }}>
            "Helping businesses grow through custom software solutions."
          </p>
        </div>
        <div className="map-container">
            <iframe
            title="Bulgaria"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7493829.146579572!2d25.3185!3d42.9833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9d1e1c7b1b1b1%3A0x400a01269bfaa90!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1683641234567!5m2!1sen!2sbg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>
    </>
  );
}