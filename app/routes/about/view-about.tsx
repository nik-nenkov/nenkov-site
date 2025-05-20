import React from "react";
import "./view-about.scss";
import TopBar from "~/components/bar/top-bar";

export default function ViewAbout() {
  return (
        <>
          <TopBar title="About Nik" />
    <section className="about-section">
      <p>
        Welcome to my professional website! My name is Nikolay Nenkov, and I am a passionate full-stack developer with extensive experience in building robust, scalable, and innovative solutions. This website serves as a showcase of my professional journey, achievements, and the services I provide.
      </p>

      <h2>Professional Experience</h2>
      <p>
        Over the years, I have worked on a variety of projects, ranging from enterprise-level applications to cutting-edge cloud solutions. My expertise spans frontend and backend development, cloud and DevOps, system design, and technical consulting.
      </p>

      <h2>Services I Provide</h2>
      <ul>
        <li>Full-stack development for web and mobile applications</li>
        <li>Cloud and DevOps solutions, including CI/CD pipelines</li>
        <li>System design and architecture consulting</li>
        <li>API development and integration</li>
        <li>Technical mentoring and team support</li>
      </ul>

      <h2>Achievements</h2>
      <p>
        Throughout my career, I have achieved several milestones, including:
      </p>
      <ul>
        <li>Successfully leading development teams on complex projects</li>
        <li>Delivering high-quality software solutions under tight deadlines</li>
        <li>Contributing to open-source projects and technical communities</li>
        <li>Receiving recognition for innovative problem-solving and leadership</li>
      </ul>

      <h2>Future Plans</h2>
      <p>
        I am constantly seeking new challenges and opportunities to grow. My future plans include exploring emerging technologies, expanding my expertise in AI and machine learning, and collaborating with global teams to create impactful solutions.
      </p>

      <h2>Looking for New Challenges</h2>
      <p>
        I am always open to exciting opportunities and collaborations. If you have a project or idea that aligns with my skills and interests, feel free to reach out!
      </p>
    </section>
    </>
  );
}