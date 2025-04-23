import React from "react";
import "./home.scss";
import AppHeader from "~/components/header/app-header";
import AppFooter from "~/components/footer/app-footer";

export default function Home() {
  return (
    <div className="App">
      <AppHeader  />
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
              <h3>Project Delivery Manager - Freelancer</h3>
              <p>Feb 2025 - Present · Remote</p>
              <p>Assisting teams with project setup, repository management, design documentation, and deployment strategies.</p>
            </li>
            <li>
              <h3>Full Stack Developer - PLAN A</h3>
              <p>Sep 2024 - Feb 2025 · Remote</p>
              <p>Maintained and extended legacy JAVA code, conducted software development with testing, and performed requirements analysis in an asynchronous work environment.</p>
            </li>
            <li>
              <h3>Freelance Software Developer</h3>
              <p>May 2023 - Aug 2024 · Hybrid</p>
              <p>Delivered backend services, REST APIs, frontends, and business automation scripts while integrating third-party services like Azure Cognitive Services and Stripe.</p>
            </li>
            <li>
              <h3>Full Stack Developer - Codexio</h3>
              <p>Mar 2021 - Apr 2023 · Hybrid</p>
              <p>Worked on projects in electronic payments, traffic engineering, and online gaming, collaborating with global teams.</p>
            </li>
            <li>
              <h3>Application Developer - Schwarz Gruppe</h3>
              <p>Feb 2020 - Nov 2020 · Remote</p>
              <p>Developed tools for tracking business spendings, interacting with remote product owners and architects.</p>
            </li>
            <li>
              <h3>Java Full Stack Developer - EPAM Systems</h3>
              <p>May 2018 - Nov 2019 · On-site</p>
              <p>Contributed to projects involving REST APIs, OAuth2.0 implementation, and JavaFX admin panels, while improving SDLC processes.</p>
            </li>
            <li>
              <h3>Technology Consultant</h3>
              <p>Aug 2008 - Apr 2018 · Hybrid</p>
              <p>Provided software development, website maintenance, and tutoring services, enhancing client performance and academic success.</p>
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
    </div>
  );
}
