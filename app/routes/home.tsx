import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img src="/nik.jpg" alt="Nikolay Nenkov" className="profile-photo" />
          <div className="contact-info">
            <h1>Nikolay Nenkov</h1>
            <p>Email: <a href="mailto:nik.nenkov@icloud.com">nik.nenkov@icloud.com</a></p>
            <p>Phone: +359 890 138 750</p>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>Personal Profile</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
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
    </div>
  );
}
