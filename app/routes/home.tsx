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
              <h3>High School of Mathematics and Natural Sciences, Gabrovo, Bulgaria</h3>
              <p>2005 - 2010</p>
              <p>
          Focused on Mathematics, Informatics and English Language. The curriculum emphasized mathematics, with additional skills gained in Visual Studio, HTML, CSS, PHP and C/C++ programming. Participated in drama classes and field trips, enhancing creative expression and broadening perspectives. The first year concentrated on English language proficiency.
              </p>
            </li>
            <li>
              <h3>Technical University, Gabrovo, Bulgaria</h3>
              <p>2010 - 2013</p>
              <p>
          Studied Electrical Engineering Technologies/Technicians. Covered topics ranging from basic electrical laws to complex circuits, CAD modeling, and coding to support studies. Gained hands-on experience with microchips and large-scale machines. Although studies were not completed due to personal reasons, the knowledge acquired has been invaluable in professional development.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Full-stack development (Java, SpringBoot, JSP, Quarkus, Angular, VueJS, React, TypeScript, Golang, Python)</li>
            <li>Software testing (E2E, UI, API, unit, integration, mocking)</li>
            <li>Cloud and DevOps (Docker, Kubernetes, Azure, CI/CD pipelines)</li>
            <li>System design and debugging (sequence and c4model UML diagrams, log analysis, system tracing)</li>
            <li>API development and integration (REST, OAuth, MQTT, ETL, SQL, WS, libraries, services)</li>
            <li>Agile workflows (Jira, Figma, async collaboration with global teams)</li>
            <li>Technical consulting and team support (mentoring, project optimization)</li>
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
