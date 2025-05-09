import React from "react";
import "./view-skills.scss";

export default function ViewSkills() {
  return (
    <section className="skills-section">
      <h1>Full-Stack Skills</h1>
      <dl>
        <dt>Frontend Development</dt>
        <dd>React, Angular, VueJS, TypeScript</dd>

        <dt>Backend Development</dt>
        <dd>Java, SpringBoot, Quarkus, Golang, Python</dd>

        <dt>Software Testing</dt>
        <dd>E2E, UI, API, Unit, Integration, Mocking</dd>

        <dt>Cloud and DevOps</dt>
        <dd>Docker, Kubernetes, Azure, CI/CD Pipelines</dd>

        <dt>System Design</dt>
        <dd>Sequence and C4 Model UML Diagrams, Log Analysis, System Tracing</dd>

        <dt>API Development</dt>
        <dd>REST, OAuth, MQTT, ETL, SQL, WebSockets</dd>

        <dt>Agile Workflows</dt>
        <dd>Jira, Figma, Async Collaboration with Global Teams</dd>

        <dt>Technical Consulting</dt>
        <dd>Mentoring, Project Optimization</dd>
      </dl>
    </section>
  );
}