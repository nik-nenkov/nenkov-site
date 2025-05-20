import React from "react";
import "./view-books.scss";
import TopBar from "~/components/bar/top-bar";

const bookTitles = [
  "In the Life of a Project: From Concept to Maintenance",
  "In the Life of a Project: Creating a Clear Assignment",
  "In the Life of a Project: System Architecture and Integration",
  "In the Life of a Project: Effective Team Collaboration and Communication",
  "In the Life of a Project: Navigating Technical Debt and Trade-Offs",
  "In the Life of a Project: Testing and Quality Assurance in Practice",
  "In the Life of a Project: Scalability and Performance Optimization",
  "In the Life of a Project: Deployment and DevOps Essentials",
  "In the Life of a Project: Managing Change and Stakeholder Expectations",
  "In the Life of a Project: Lessons from Failure and Success",
  "In the Life of a Project: Building Robust Backend Systems",
  "In the Life of a Project: Crafting Intuitive Frontend Experiences",
  "In the Life of a Project: Securing Software in a Threat-Filled World",
  "In the Life of a Project: Data Engineering and Management",
  "In the Life of a Project: Full-Stack Integration and Workflow",
  "In the Life of a Project: Leveraging Cloud and Serverless Architectures",
  "In the Life of a Project: Adopting AI and Emerging Technologies",
];

export default function ViewBooks() {
  return (
    <>
      <TopBar title="Software Craftsmanship: In the Life of a Project" />
      <section className="books-section">
        <p>
          <strong>Software Craftsmanship</strong> is a practical book series for software professionals, sharing real-world insights and best practices across the entire software development lifecycle. Each volume dives into a key aspect of building, maintaining, and evolving successful software projects.
        </p>
        <div className="books-gallery">
          {bookTitles.map((title, idx) => (
            <div className="book-card" key={idx}>
              <div className="book-cover">
                <div className="book-number">{idx + 1}</div>
                <div className="book-title">{title}</div>
              </div>
              {/* Optionally, add a placeholder for a future description or cover image */}
            </div>
          ))}
        </div>
        <p className="books-note">
          <em>
            This series covers the project lifecycle, technical domains (backend, frontend, security, data, cloud, AI), and essential soft skills. If you want to help prioritize, suggest topics, or get involved, let us know!
          </em>
        </p>
      </section>
    </>
  );
}