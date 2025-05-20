import React from "react";
import "./view-skills.scss";
import TopBar from "~/components/bar/top-bar";

export default function ViewSkills() {
  return (
    <>
      <TopBar title="Full Stack Skills" />
      <section className="skills-section">
        <dl>
          <dt>Frontend Development</dt>
          <dd>
            React, Angular, VueJS, TypeScript, JavaScript, HTML, SASS, CSS, JavaFX,
            Thymeleaf, jQuery, AJAX, Figma
          </dd>

          <dt>Backend Development</dt>
          <dd>
            Java, SpringBoot, Quarkus, Golang, Python, Node.js, PHP, JSP, C++, REST
            APIs, WebSockets, Express.js, Maven, Liquibase, ORM, Hibernate, Bash,
            XAMPP, cPanel
          </dd>

          <dt>Software Testing</dt>
          <dd>
            E2E, UI, API, Unit, Integration, Mocking, Automated build and testing
            workflows, Code reviews, Selenium, QA Automation
          </dd>

          <dt>Cloud and DevOps</dt>
          <dd>
            Docker, Kubernetes, Azure, AWS, CI/CD Pipelines, VPS, XAMPP, cPanel, SSH,
            DNS, Content Distribution Networks, Delivery Operations, Microsoft Azure
          </dd>

          <dt>System Design & Debugging</dt>
          <dd>
            Sequence and C4 Model UML Diagrams, Log Analysis, System Tracing,
            Software Architecture, Software Design, Requirements Analysis, Stakeholder
            Alignment, System Diagrams, Monitoring, Tracing
          </dd>

          <dt>API Development & Integration</dt>
          <dd>
            REST, OAuth, MQTT, ETL, SQL, WebSockets, Libraries, Services, OpenAPI
            Specification (OAS), 3rd Party Integrations, Stripe, Azure Cognitive
            Services, PDF Creator, Client Delivery
          </dd>

          <dt>Agile Workflows</dt>
          <dd>
            Jira, Figma, Async Collaboration with Global Teams, Confluence, Project
            Setup, Repository Management, Design Documentation, Backlog Grooming
          </dd>

          <dt>Technical Consulting & Team Support</dt>
          <dd>
            Mentoring, Project Optimization, Tutoring, Onboarding, Documentation,
            Requirements Gathering, Team Leadership, Technical Instructor
          </dd>

          <dt>Data & Visualization</dt>
          <dd>
            Data Mining, Data Visualization, PostgreSQL, ElasticSearch, ORM, Liquibase,
            Reporting, OpenStreetMap, Thymeleaf, Data Entry, Data QA, Data Processing
          </dd>

          <dt>Other</dt>
          <dd>
            CAD (SolidWorks, AutoCAD), Construction Estimating, Problem Solving,
            Research and Development (R&D), Printing, Sequence Diagrams, JWT, Single
            Page Applications, Client Delivery, Custom Software, Bash, CLI, PDF Creator,
            Regular Expressions, XML, JSON, Figma, Microsoft Office, Microsoft Visual
            Studio Code
          </dd>
        </dl>
      </section>
    </>
  );
}