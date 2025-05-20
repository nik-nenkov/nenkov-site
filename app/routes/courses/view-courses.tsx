import React from "react";
import "./view-courses.scss";
import TopBar from "~/components/bar/top-bar";

export default function ViewCourses() {
  const courses = [
    { title: "Best Practices in SDLC", description: "Learn how to effectively manage the software development lifecycle." },
    { title: "Effective Meetings", description: "Master the art of running productive and engaging meetings." },
    { title: "OAuth2 Fundamentals", description: "Understand OAuth2 and how to secure your APIs." },
    { title: "Spring Boot Essentials", description: "Build robust backend applications with Spring Boot." },
    { title: "JavaFX for Beginners", description: "Create modern desktop applications using JavaFX." },
    { title: "REST APIs and OpenAPI", description: "Design and document RESTful APIs with OpenAPI." },
    { title: "Docker 101", description: "Learn the basics of containerization with Docker." },
    { title: "CSS Flexbox", description: "Master layout design with CSS Flexbox." },
    { title: "Maven and NPM Basics", description: "Manage dependencies and build tools effectively." },
    { title: "3rd Party Integrations", description: "Integrate external services and libraries into your applications." },
    { title: "ETL Jobs and Cron Jobs", description: "Automate data processing and scheduling tasks." },
    { title: "Software Testing", description: "Learn the fundamentals of software testing and quality assurance." },
    { title: "E2E Testing with Selenium and Docker", description: "Automate end-to-end tests using Selenium and Docker." },
    { title: "Database Versioning and Migrations", description: "Manage database changes with versioning tools." },
    { title: "ORM in Java and Other Languages", description: "Work with Object-Relational Mapping in various languages." },
    { title: "Backlog Grooming", description: "Organize and prioritize your project backlog effectively." },
    { title: "Software Design Principles", description: "Learn the fundamentals of designing scalable software systems." },
    { title: "Using Figma for Design", description: "Collaborate and design user interfaces with Figma." },
  ];

  return (
      <>
      <TopBar title="Courses I Teach"/>
    <section className="courses-section">
      <p>
        Here is a collection of courses I enjoy teaching, covering a wide range of topics in software development, design, and best practices.
      </p>
      <div className="courses-gallery">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}