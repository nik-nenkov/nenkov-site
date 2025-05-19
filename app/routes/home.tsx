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
            Nature lover, visual arts enthusiast, Mediterranean food fan.
            <br />As an experienced full-stack developer, capable of supporting and extending your existing IT systems, and designing and implementing new ones, I can contribute to your organization by reducing long-term costs, organizing your documentation, integrating third-party software, and leading junior developers. My goals are centred around clear communication, synchronising people with different roles onsite and remotely, and working in stakeholders' best interests. Interdisciplinary knowledge gained throughout the years is allowing me to ask better questions, look at the greater scale of things as well as improving and fixing the details expected by the designers, managers, DevOps and QA teams, and customers.
          </p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>Software Development Contractor | Various Clients</h3>
              <h4>May 2023 - Present</h4>
              <p>
                As a freelance contractor, I have delivered end-to-end solutions for international clients, including the development of a crypto gaming and marketing platform enabling players to earn cryptocurrency tokens through daily gaming and ad-watching experiences. My work involved collaborating with distributed teams across the UK and Bulgaria, integrating third-party services such as Azure Cognitive Services and Stripe, and mentoring junior developers. I have modernized legacy systems, replaced outdated backends with Node.js-based solutions, and improved SDLC practices for ticketing and supply chain platforms. My responsibilities have included project setup, repository management, design documentation, deployment strategies, and requirements analysis in asynchronous environments.
              </p>
              <p>
                I have maintained and extended legacy Java code, delivered backend services, REST APIs, frontends, and business automation scripts, and ensured system stability for platforms using discontinued frameworks. My work has spanned domains such as supply chain, ticketing, geolocation, and payment processing, always focusing on clear communication, stakeholder alignment, and technical excellence.
              </p>
            </li>
            <li>
              <h3>Senior Full Stack Developer | CODEXIO Ltd.</h3>
              <h4>Mar 2021 - Apr 2023 | Hybrid</h4>
              <p>
                At Codexio, I contributed to high-traffic digital wallet applications for multinational online payments providers, integrating Sportradar widgets and APIs, and developing reusable Angular component libraries for live sports data. I worked on projects in electronic payments, traffic engineering, and online gaming, collaborating with global teams to deliver robust, scalable solutions. My role included mentoring junior developers, ensuring high code quality through thorough testing and code reviews, and implementing new features such as free spins to increase user engagement. I also developed tools for traffic engineering and public transport optimization, building ETL jobs, programming traffic controllers, and running large-scale simulations.
              </p>
            </li>
            <li>
              <h3>Java Web Developer | Freelance</h3>
              <h4>Oct 2019 - Mar 2021 | Remote</h4>
              <p>
                As a freelance Java developer, I built tools for tracking business spendings and managing vendor performance for large organizations, including backend development using ElasticSearch, Spring Data REST, and PostgreSQL. I collaborated directly with product owners and architects, participated in stakeholder meetings, and contributed to system diagrams and documentation. My work included developing secure REST APIs, integrating with cloud environments, and automating business workflows for clients in retail and logistics.
              </p>
            </li>
            <li>
                <h3>
                  Java Software Developer | <a href="https://investors.epam.com/stock-price/default.aspx" target="_blank" rel="noopener noreferrer">
                  EPAM Systems, Inc.
                  </a>
                </h3>
              <h4>May 2018 - Oct 2019 | On-site</h4>
              <p>
                At EPAM Systems, I developed and maintained access control management systems and admin panels, enabling secure communication with physical devices via MQTT and providing rich JavaFX-based interfaces. I contributed to the Weekly Java Newsletter, curated for 20,000+ employees, and developed internal tools for hardware resource tracking, RESTful APIs, and OAuth2 integration. My work emphasized secure, scalable architectures, automated build and testing workflows, and close collaboration with UI/UX designers and delivery managers.
              </p>
            </li>
            <li>
              <h3>Technology Consultant | Freelance</h3>
              <h4>2009 - 2017</h4>
              <p>
                As a technology consultant, I delivered custom software solutions, website maintenance, and tutoring services. I engineered software for complex electrical engineering equations, built a CodeIgniter-based CMS for a local restaurant, and deployed MMORPG servers with SQL databases and user registration websites. My work included 3D CAD modeling in SolidWorks for furniture and machinery, tutoring in IT, physics, math, chemistry, and programming, and developing secure C++ CLI chat applications. I also conducted photovoltaic system calculations for solar energy solutions and contributed to data entry and QA for startups, ensuring data accuracy and process quality.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>High School of Mathematics and Natural Science | Gabrovo, Bulgaria</h3>
              <h4>2005 - 2010</h4>
              <p>
          Focused on Mathematics, Informatics and English Language. The curriculum emphasized mathematics, with additional skills gained in Visual Studio, HTML, CSS, PHP and C/C++ programming. Participated in drama classes and field trips, enhancing creative expression and broadening perspectives. The first year concentrated on English language proficiency.
              </p>
            </li>
            <li>
              <h3>Technical University | Gabrovo, Bulgaria</h3>
              <h4>2010 - 2013</h4>
              <p>
          Studied Electrical Engineering Technologies/Technicians. Covered topics ranging from basic electrical laws to complex circuits, CAD modeling, and coding to support studies. Gained hands-on experience with microchips and large-scale machines. Although studies were not completed due to personal reasons, the knowledge acquired has been invaluable in professional development.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <dl>
            <dt>Full-stack development</dt>
            <dd>
              Java, SpringBoot, JSP, Quarkus, Angular, VueJS, React, TypeScript, Golang, Python, Node.js, PHP, JavaFX, C++, JavaScript, HTML, SASS, CSS, Bash
            </dd>
            <dt>Software testing</dt>
            <dd>
              E2E, UI, API, unit, integration, mocking, automated build and testing workflows, code reviews
            </dd>
            <dt>Cloud and DevOps</dt>
            <dd>
              Docker, Kubernetes, Azure, CI/CD pipelines, VPS, AWS, XAMPP, cPanel, SSH, DNS, Content Distribution Networks
            </dd>
            <dt>System design and debugging</dt>
            <dd>
              Sequence and C4 model UML diagrams, log analysis, system tracing, software architecture, software design, requirements analysis, stakeholder alignment
            </dd>
            <dt>API development and integration</dt>
            <dd>
              REST, OAuth, MQTT, ETL, SQL, WS, libraries, services, OpenAPI Specification (OAS), 3rd Party Integrations, Stripe, Azure Cognitive Services, PDF Creator
            </dd>
            <dt>Agile workflows</dt>
            <dd>
              Jira, Figma, async collaboration with global teams, Confluence, project setup, repository management, design documentation
            </dd>
            <dt>Technical consulting and team support</dt>
            <dd>
              Mentoring, project optimization, tutoring, onboarding, documentation, requirements gathering, team leadership
            </dd>
            <dt>Data and Visualization</dt>
            <dd>
              Data Mining, Data Visualization, PostgreSQL, ElasticSearch, ORM, Liquibase, reporting, OpenStreetMap, Thymeleaf
            </dd>
            <dt>Other</dt>
            <dd>
              CAD (SolidWorks, AutoCAD), Construction Estimating, Problem Solving, Client Delivery, Research and Development (R&D), Printing, Sequence Diagrams, JWT, Single Page Applications
            </dd>
          </dl>
        </section>
        <section>
          <h2>References</h2>
          <p>Available upon request.</p>
        </section>
      </main>
    </div>
  );
}
