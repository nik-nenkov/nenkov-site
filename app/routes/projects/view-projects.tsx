import TopBar from "~/components/bar/top-bar";
import "./view-projects.scss";

export default function ViewProjects() {
  const projects = [
    {
      title: "Project Alpha",
      timeFrame: "Jan 2022 - Dec 2022",
      technologies: ["React", "TypeScript", "Node.js"],
      tools: ["Jira", "GitHub", "Docker"],
      description:
        "Developed a scalable web application for managing tasks and workflows. Collaborated with a team of 5 developers to deliver features on time.",
      responsibilities: [
        "Led the front-end development team.",
        "Implemented reusable components using React.",
        "Integrated REST APIs and ensured performance optimization.",
      ],
    },
    {
      title: "Project Beta",
      timeFrame: "Mar 2021 - Nov 2021",
      technologies: ["Angular", "Java", "MySQL"],
      tools: ["Bitbucket", "Jenkins", "Kubernetes"],
      description:
        "Built a customer relationship management (CRM) platform for a mid-sized enterprise. Focused on delivering a seamless user experience.",
      responsibilities: [
        "Designed and implemented the database schema.",
        "Developed RESTful APIs for data management.",
        "Collaborated with the QA team to ensure high-quality deliverables.",
      ],
    },
    {
      title: "Project Gamma",
      timeFrame: "Jul 2020 - Feb 2021",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      tools: ["GitLab", "Docker", "AWS"],
      description:
        "Created a data visualization dashboard for monitoring key business metrics. Worked closely with stakeholders to gather requirements.",
      responsibilities: [
        "Developed interactive charts and graphs using Vue.js.",
        "Optimized backend services for faster data retrieval.",
        "Deployed the application on AWS using Docker containers.",
      ],
    },
  ];

  return (
    <>
    <TopBar/>
    <div className="view-projects">
      <h1>Projects History</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p className="time-frame">{project.timeFrame}</p>
          <p className="description">{project.description}</p>
          <div className="details">
            <div>
              <h3>Technologies</h3>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                {project.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3>Responsibilities</h3>
            <ul>
              {project.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}