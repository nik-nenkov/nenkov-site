import React from "react";
import { Meta } from "react-router";
import TopBar from "~/components/bar/top-bar";
import { Link } from "react-router-dom";
import "./view-projects.scss";
import projects from "./projects.json"; // Import the structured JSON

// SEO meta function
export function meta() {
  return [
    { title: "Project Portfolio | Nikolay Nenkov" },
    { name: "description", content: "Browse the project portfolio of Nikolay Nenkov, Full Stack Developer. Explore real-world software projects, technologies, and achievements across various industries and domains." }
  ];
}

export default function ViewProjects() {
  return (
    <>
      <Meta />
      <TopBar title="Projects History" />
      <div className="view-projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p className="time-frame">{project.timeFrame}</p>
            {project.company && <p className="company">{project.company}</p>}
            <p className="description">{project.description}</p>
            {project.skills && project.skills.length > 0 && (
              <div>
                <h3>Skills / Technologies</h3>
                <p>
                  {project.skills.join(", ")}
                </p>
              </div>
            )}
          </div>
        ))}
        <div style={{ padding: "2rem" }}>
          <p>
            Thank you for taking the time to review my project portfolio. Should you wish to explore further, I invite you to visit my{" "}
            <Link to="/diagrams">Diagrams</Link> and <Link to="/courses">Courses</Link> pages for additional insights into my work and expertise.
          </p>
          <p>
            For a comprehensive overview of my professional background, please refer to my <Link to="/">CV</Link>.
          </p>
          <p>
            I appreciate your interest and consideration.
          </p>
        </div>
      </div>
    </>
  );
}