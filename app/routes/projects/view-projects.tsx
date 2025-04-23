import TopBar from "~/components/bar/top-bar";
import "./view-projects.scss";

export default function ViewProjects() {
    const projects = [
        {
          title: "Crypto Gaming and Marketing Platform",
          timeFrame: "Feb 2025 - Present",
          technologies: ["React", "React Router", "TypeScript", "Java", "Spring Boot", "Spring Security", "OAuth", "Auth0", "SCSS", "SQL", "PostgreSQL", "ORM"],
          tools: ["Vite", "Jira", "Figma", "GitHub", "VS Code", "GitHub Copilot", "MetaMask", "Hostinger VPS", "FTP", "SSH", "TLS"],
          description:
            "Developed a platform enabling players to earn cryptocurrency tokens through daily gaming and ad-watching experiences, with incentives for recruiting new players. Collaborated with a distributed team from the UK and Bulgaria, including a junior developer, product owner, designer, and marketing specialist.",
          responsibilities: [
            "Served as lead developer and project delivery manager.",
            "Set up project infrastructure and guided the team on tool usage.",
            "Developed the frontend using React Router and the backend using Spring Boot.",
            "Integrated third-party crypto wallet and advertising providers.",
            "Deployed the application with a PostgreSQL database on a Hostinger VPS.",
          ],
        },
        {
          title: "SAP Ariba Network Supply Chain Platform",
          timeFrame: "Sep 2024 - Feb 2025",
          technologies: ["Java", "SQL", "Ariba Web Language (AWL)", "Enterprise Objects (EO)", "CSS", "Python"],
          tools: ["IntelliJ IDEA", "Git", "MacBook"],
          description:
            "As a subcontractor for SAP Ariba via PLAN-A (Bulgaria), maintained and enhanced a legacy 25-year-old supply chain platform using discontinued frameworks (AWL and EO). Worked with a team of six in Bulgaria, a French project manager, and distributed teams in China and Peru to implement new functionality and ensure system stability.",
          responsibilities: [
            "Supported and extended legacy code in AWL and EO frameworks.",
            "Implemented new features and conducted test tracing and log analysis to prevent regressions.",
            "Developed a Python tool for tracking team Git performance.",
            "Collaborated with international teams to deliver project milestones.",
          ],
        },
        {
          title: "TopView Ticketing Service",
          timeFrame: "Apr 2024 - Aug 2024",
          technologies: ["Node.js", "TypeScript", "SQL", "OpenAPI"],
          tools: ["Jira", "Git", "VS Code"],
          description:
            "Contributed to a new platform for an international IT and service company’s Bulgarian department, providing bus and holiday ticketing services. Replaced an outdated backend with a modern Node.js-based solution, collaborating with the team to improve software development lifecycle (SDLC) practices.",
          responsibilities: [
            "Served as a senior developer, sharing expertise in SDLC, Jira usage, and diagramming.",
            "Developed a backend in Node.js and TypeScript, adhering to OpenAPI specifications.",
            "Participated in architecture courses and collaborative meetings to enhance team processes.",
            "Mentored the team on best practices for software development and delivery.",
          ],
        },
        {
          title: "Tschai Cognitive Internet Geolocation Plugin and App",
          timeFrame: "Sep 2023 - Dec 2023",
          technologies: ["Vue.js", "Java", "Spring", "Auth0", "OpenAPI", "ORM", "PostgreSQL", "Azure Cognitive Services", "OpenStreetMap"],
          tools: ["Git", "Jira", "VS Code", "Azure DevOps"],
          description:
            "Developed a platform for Bulgarian real estate companies to enhance collaboration between marketing and sales teams. Built a Chrome plugin using Azure Cognitive Services to extract page content, stored data in a PostgreSQL database, and visualized it as markers on OpenStreetMap. Delivered an MVP to automate client workflows.",
          responsibilities: [
            "Served as lead developer and consulted clients on MVP development.",
            "Developed the frontend with Vue.js and the backend with Java Spring.",
            "Integrated Azure Cognitive Services for content analysis and OpenStreetMap for geolocation visualization.",
            "Set up CI/CD pipelines for automated deployment.",
            "Collaborated with designers and stakeholders to validate functionality.",
          ],
        },
        {
          title: "Blueberry / HEC Solar Hardware Geotracing System",
          timeFrame: "Jan 2023 - Jun 2023", // Placeholder, please confirm
          technologies: ["Go", "Vue.js", "MQTT", "OpenStreetMap", "Auth0", "SCSS", "Viper", "GORM", "SSR"],
          tools: ["Jira", "Git", "VS Code", "Azure", "SSH", "Windows"],
          description:
            "Developed a geotracing system for an international construction company to track hardware on construction sites. Processed GPS data from hardware via MQTT, stored it securely in a database, and visualized it on OpenStreetMap. Delivered a robust solution integrating backend and frontend components.",
          responsibilities: [
            "Served as the main developer, building the backend with Go and the frontend with Vue.js.",
            "Integrated MQTT for receiving and processing GPS hardware data.",
            "Implemented secure data storage and visualization on OpenStreetMap.",
            "Set up CI/CD pipelines for automated deployment using Azure.",
            "Delivered solutions to meet client needs with minimal meeting involvement.",
          ],
        },
        {
          title: "Online Payment and Ordering Service",
          timeFrame: "Nov 2022 - Feb 2023",
          technologies: ["Java", "PHP", "Python", "Stripe API", "SQL", "PostgreSQL", "ORM"],
          tools: ["Git", "VS Code", "IntelliJ IDEA"],
          description:
            "Developed a payment and ordering system for a Bulgarian dropshipping company, integrating Stripe for payment processing and building a new Java-based backend. Enhanced a legacy PHP system and created Python scripts to predict client actions, improving order management and user experience.",
          responsibilities: [
            "Served as the sole developer, designing and implementing the entire system.",
            "Integrated Stripe API for secure payment processing and receipt generation.",
            "Developed a Java backend with ORM for order storage and text file exports.",
            "Maintained and enhanced legacy PHP code.",
            "Wrote Python scripts for predictive analysis of client behavior.",
          ],
        },
        {
          title: "Axilion Public Transport and Traffic Engineering Tools",
          timeFrame: "Feb 2022 - Oct 2022",
          technologies: ["Java", "Spring Boot", "Quarkus", "OpenAPI", "XML", "JSON"],
          tools: ["Jira", "Docker", "Kubernetes", "IntelliJ IDEA", "MacBook", "SUMO", "AIMSUN", "CLI"],
          description:
            "Developed tools for traffic engineering and public transport optimization, funded by the U.S. government and led by Israeli teams. Built ETL jobs for traffic data enrichment, programmed Econolite traffic controllers remotely, and created virtual SUMO simulations. Transferred maps from AIMSUN to SUMO and ran simulations with real controller software, securing significant project financing.",
          responsibilities: [
            "Developed ETL jobs using Quarkus and Spring Boot to enrich traffic data.",
            "Programmed Econolite traffic controllers remotely via custom tools.",
            "Built and ran virtual SUMO simulations for traffic management.",
            "Transferred maps from AIMSUN to SUMO for simulation compatibility.",
            "Deployed tools using Docker and Kubernetes, earning recognition from the Israeli team.",
          ],
        },
        {
          title: "GAN Gaming and Customer Benefits System",
          timeFrame: "Dec 2021 - Mar 2022",
          technologies: ["Java", "Spring Boot", "SQL", "PostgreSQL"],
          tools: ["Jira", "Git", "IntelliJ IDEA"],
          description:
            "Maintained and enhanced an existing gaming and customer benefits platform for international teams, focusing on Java-based backend improvements. Added a new free spins feature to increase user engagement, collaborating with stakeholders to align on requirements.",
          responsibilities: [
            "Maintained and extended Java-based backend functionality using Spring Boot.",
            "Implemented a new free spins feature for the customer benefits system.",
            "Participated in meetings with international stakeholder teams to define and validate requirements.",
          ],
        },
        {
          title: "Paysafe Sportsradar Widgets and API Integration in Online Wallet",
          timeFrame: "Mar 2021 - Nov 2021",
          technologies: ["Java", "Angular", "SCSS", "Sportsradar API", "SQL", "PostgreSQL"],
          tools: ["Figma", "Git", "IntelliJ IDEA", "Maven", "Jenkins"],
          description:
            "Integrated Sportsradar widgets and APIs into Skrill and Neteller online wallet platforms to enhance user experience with sports betting data. Collaborated with international teams from Europe, the USA, and Canada, and a designer using Figma, ensuring compliance with financial safety standards.",
          responsibilities: [
            "Developed and integrated Sportsradar widgets and APIs into Skrill and Neteller wallets.",
            "Built frontend components using Angular and SCSS, and backend services using Java.",
            "Utilized Maven for dependency management and Jenkins for CI/CD pipelines.",
            "Participated in trainings on financial safety and CI/CD best practices.",
            "Collaborated with designers and international teams to deliver a seamless integration.",
          ],
        },
        {
          title: "5G Traffic Metering System",
          timeFrame: "Dec 2021 - Jan 2022",
          technologies: ["Java", "Spring Boot", "ORM", "SQL", "PostgreSQL"],
          tools: ["Git", "IntelliJ IDEA", "Azure", "Jira"],
          description:
            "Developed a 5G metering system for remote operation of construction work machines, collaborating with Israeli and Ukrainian teams. Built a Java-based backend to process and store machine telemetry data, leveraging 5G connectivity for real-time monitoring.",
          responsibilities: [
            "Developed the backend using Java and Spring Boot with ORM for data storage.",
            "Integrated telemetry data processing for construction machine operations.",
            "Utilized Azure for deployment and data management.",
            "Collaborated with Israeli and Ukrainian teams to ensure system reliability.",
          ],
        },
        {
          title: "Schwarz Group Subcontractor Performance Metering System",
          timeFrame: "Feb 2020 - Nov 2020",
          technologies: ["Java", "Spring Boot", "Spring Data REST", "Spring Security", "Elasticsearch", "ORM", "PostgreSQL", "Angular", "SCSS"],
          tools: ["Git", "Jira", "IntelliJ IDEA", "VS Code"],
          description:
            "Developed a system for Kaufland IT Hub (Schwarz Group) to track subcontractor performance, collaborating with a team of three Bulgarian developers, a German product owner, and a German architect. Built a full-scale solution for performance monitoring, which was later taken to Switzerland for further development.",
          responsibilities: [
            "Developed backend services using Java, Spring Boot, and Spring Data REST with PostgreSQL and Elasticsearch.",
            "Implemented secure APIs with Spring Security for data access.",
            "Built frontend components using Angular and SCSS.",
            "Collaborated with German product owner and architect to define system requirements.",
            "Contributed to the delivery of a scalable performance metering system.",
          ],
        },
        {
          title: "C-Trust Drone Observation System and Security Platform",
          timeFrame: "Dec 2019 - Feb 2020",
          technologies: ["Java", "Spring Boot", "MQTT", "SQL", "PostgreSQL"],
          tools: ["Git", "IntelliJ IDEA", "Jira"],
          description:
            "Contributed to a drone-based observation system for the Austrian government to monitor wildfires using thermal cameras. Developed Java Spring middleware and backend services to process drone data via MQTT and generate PDF reports for wildfire monitoring.",
          responsibilities: [
            "Developed middleware and backend services using Java and Spring Boot.",
            "Integrated MQTT for processing thermal camera data from drones.",
            "Implemented PDF export functionality for wildfire monitoring reports.",
            "Tested services to ensure reliability and accuracy for government use.",
          ],
        },
        {
          title: "EPAM Biodit Access Control System and Interface Admin Panel",
          timeFrame: "Jun 2018 - Oct 2019",
          technologies: ["Java", "JavaFX", "CSS", "MQTT", "SQL", "PostgreSQL"],
          tools: ["Git", "Jira", "IntelliJ IDEA", "Jenkins"],
          description:
            "Developed a biometric access control system and admin panel for managing door access, user data, and usage logs, deployable across all operating systems including iOS. Built a JavaFX-based admin panel to interact with devices via MQTT, store data, and export PDF reports, ensuring secure and accurate door access monitoring.",
          responsibilities: [
            "Developed the admin panel using JavaFX and CSS for cross-platform compatibility.",
            "Integrated MQTT for real-time interaction with access control devices.",
            "Implemented data storage and PDF export for door usage logs using Java and PostgreSQL.",
            "Conducted manual and automated testing to ensure system reliability.",
            "Collaborated with designers, product owners, frontend, backend, and DevOps teams to optimize performance and implement CI/CD best practices.",
          ],
        },
        {
          title: "EPAM Java Weekly Newsletter",
          timeFrame: "Jan 2018 - Dec 2019",
          technologies: ["Java", "HTML", "CSS"],
          tools: ["Git", "Mailchimp", "Jira"],
          description:
            "Contributed to the delivery of a weekly newsletter for over 30,000 EPAM employees, sharing the latest news, updates, and trends in Java and related technologies. Ensured consistent and engaging content distribution to a large internal audience.",
          responsibilities: [
            "Developed and maintained newsletter templates using HTML and CSS.",
            "Automated content delivery processes using Java-based scripts.",
            "Collaborated with content teams to curate and distribute Java-related news.",
            "Utilized Mailchimp for newsletter distribution and tracking.",
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
      <div style={{ padding: "2rem" }}>i really got tired of writing this, so i will stop here. I will add more projects later.
      <p>For now, you can check my <a href="/diagrams  ">diagrams</a> and <a href="/courses">courses</a>.</p>
      <p>For more details, please check my <a href="/">CV</a>.</p>
      </div>
    </div>
    </>
  );
}