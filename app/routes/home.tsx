import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./home.scss";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img src="/nik.jpg" alt="Nikolay Nenkov" className="profile-photo" />
          <div className="contact-info">
            <h1>Nikolay Nenkov</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:nik.nenkov@icloud.com">nik.nenkov@icloud.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +359 890 138 750
            </p>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>Personal Profile</h2>
          <p>
              As an experienced full-stack developer, capable of supporting and extending your existing IT systems, and designing and implementing new ones, I can contribute to your organization by reducing long-term costs, organizing your documentation, integrating third-party software and systems, and leading junior developers.
            <br />
              My goals are centred around clear communication, synchronising people with different roles onsite and remotely, and working in stakeholders' best interests. Interdisciplinary knowledge gained throughout the years is allowing me to ask better questions, look at the greater scale of things as well as improving and fixing the details expected by the designers, managers, DevOps and QA teams, and customers.
          </p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>Job Title - Company Name</h3>
              <p>Month Year - Month Year</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Degree - Institution</h3>
              <p>Month Year - Month Year</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
          </ul>
        </section>
        <section>
          <h2>References</h2>
          <p>Available upon request.</p>
        </section>
      </main>
      <footer className="footer">
        <ul className="social-links">
          {/* <li>
            <a href="https://x.com/nik_nenkov" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li> */}
          {/* <li>
            <a href="https://www.facebook.com/profile.php?id=100089466912748" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/in/nik-nenkov" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.xing.com/profile/Nik_Nenkov" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXing} />
            </a>
          </li>
          <li>
            <a href="mailto:nik.nenkov@icloud.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="tel:+359890138750">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
