import TopBar from "~/components/bar/top-bar";
import "./view-projects.scss";

export default function ViewProjects() {
  const projects = [
    {
      title: "Crypto Gaming and Marketing Platform",
      timeFrame: "Feb 2025 - Present",
      company: "Freelancer",
      description:
        "Developed a platform enabling players to earn cryptocurrency tokens through daily gaming and ad-watching experiences, with incentives for recruiting new players. Collaborated with a distributed team from the UK and Bulgaria, including a junior developer, product owner, designer, and marketing specialist.",
      skills: [
        "Rust", "React", "SASS", "Jira", "Microsoft Azure", "DNS", "Content Distribution Networks", "Global Delivery",
        "3rd Party Integrations", "Artificial Intelligence (AI)", "Custom Software", "Data Mining", "Data Visualization",
        "Full-Stack Development", "Java", "TypeScript", "Delivery Operations", "OpenAPI Specification (OAS)", "VPS",
        "Docker", "Maven", "VS Code", "ETL", "Software Architecture", "Software Design", "Software Deployment",
        "Software Development", "Figma", "Software Industry", "Microsoft Office", "Single Page Applications", "Sequence Diagrams"
      ]
    },
    {
      title: "Network Supply Chain Platform",
      timeFrame: "Sep 2024 - Feb 2025",
      company: "SAP",
      description:
        "Maintained and enhanced a legacy 25-year-old supply chain platform using discontinued frameworks (AWL and EO). Worked with a team of six in Bulgaria, a French project manager, and distributed teams in China, India and Peru to implement new functionality and ensure system stability.",
      skills: [
        "JSP", "Java", "IntelliJ IDEA", "Jira", "Confluence"
      ]
    },
    {
      title: "Ticketing Service",
      timeFrame: "Mar 2024 - Aug 2024",
      company: "TopView",
      description:
        "Contributed to a new platform for an international IT and service company’s Bulgarian department, providing bus and holiday ticketing services. Replaced an outdated backend with a modern Node.js-based solution, collaborating with the team to improve software development lifecycle (SDLC) practices.",
      skills: []
    },
    {
      title: "Cognitive Internet Geolocation Plugin",
      timeFrame: "Dec 2023 - Mar 2024",
      company: "Freelancer",
      description:
        "Developed a platform for Bulgarian real estate companies to enhance collaboration between marketing and sales teams. Built a Chrome plugin using Azure Cognitive Services to extract page content, stored data in a PostgreSQL database, and visualized it as markers on OpenStreetMap. Delivered an MVP to automate client workflows.",
      skills: [
        "Microsoft Azure", "VPS", "DNS", "3rd Party Integrations", "Vue.js"
      ]
    },
    {
      title: "Hardware Geotracing System",
      timeFrame: "Sep 2023 - Dec 2023",
      company: "Blueberry",
      description:
        "Developed a geotracing system for an international construction company to track hardware on construction sites. Processed GPS data from hardware via MQTT, stored it securely in a database, and visualized it on OpenStreetMap. Delivered a robust solution integrating backend and frontend components.",
      skills: [
        "Go", "Vue.js", "ORM", "3rd Party Integrations", "SQL"
      ]
    },
    {
      title: "Online Payment and Ordering Service",
      timeFrame: "Jun 2023 - Sep 2023",
      company: "Freelancer",
      description:
        "Developed a payment and ordering system for a Bulgarian dropshipping company, integrating Stripe for payment processing and building a new Java-based backend. Enhanced a legacy PHP system and created Python scripts to predict client actions, improving order management and user experience.",
      skills: []
    },
    {
      title: "Gaming and Customer Benefits System",
      timeFrame: "Oct 2022 - Apr 2023",
      company: "GAN",
      description:
        "Maintained and enhanced an existing gaming and customer benefits platform for international teams, focusing on Java-based backend improvements. Added a new free spins feature to increase user engagement, collaborating with stakeholders to align on requirements.",
      skills: [
        "3rd Party Integrations", "Java", "JSP", "SQL", "Maven"
      ]
    },
    {
      title: "Public Transport and Traffic Engineering Tools",
      timeFrame: "Feb 2022 - Oct 2022",
      company: "Axilion",
      description:
        "Developed tools for traffic engineering and public transport optimization, funded by the U.S. government and led by Israeli teams. Built ETL jobs for traffic data enrichment, programmed Econolite traffic controllers remotely, and created virtual SUMO simulations. Transferred maps from AIMSUN to SUMO and ran simulations with real controller software, securing significant project financing.",
      skills: [
        "Quarkus", "Spring Boot", "XML", "JSON", "SQL", "Docker", "3rd Party Integrations", "Kubernetes", "Global Delivery",
        "Java", "IntelliJ IDEA", "VS Code", "Python", "Liquibase", "Sequence Diagrams"
      ]
    },
    {
      title: "Sports Integration for Wallet App",
      timeFrame: "Mar 2021 - Nov 2021",
      company: "Paysafe",
      description:
        "At Codexio, I contributed to a high-traffic digital wallet application for a multinational online payments provider by integrating Sportradar widgets and APIs. I developed a reusable Angular component library to display live sports data, collaborated with international dev, devops, provider and UI/UX teams, mentored junior developers, and ensured high code quality through thorough testing and code reviews.",
      skills: [
        "Angular", "Java", "Jira", "Confluence", "Figma", "3rd Party Integrations"
      ]
    },
    {
      title: "Technical Instructor & Mentor",
      timeFrame: "Dec 2020 - Feb 2021",
      company: "Freelancer",
      description:
        "In the winter of 2020, I worked as a tutor and mentor, helping students and junior developers gain practical skills in Java, Spring, full-stack web development, DevOps, QA automation, and software engineering best practices. I shared real-world insights from production environments and guided learners through the full SDLC, fostering their growth into capable professionals.",
      skills: []
    },
    {
      title: "Vendor Performance and Expense Management System",
      timeFrame: "Feb 2020 - Nov 2020",
      company: "Schwarz Group",
      description:
        "I worked on the Kaufland Service ID Hub project for the Schwarz Group while based in Sofia, Bulgaria, collaborating directly with a software architect and delivery manager from Neckarsulm, Germany. My responsibilities included backend development using ElasticSearch, Spring Data REST, SpEL, JPQL, Spring Boot, ORM, and PostgreSQL, as well as deployment and testing operations in the Azure cloud environment. The service focused on managing and tracking relationships with subcontractors, evaluating their performance, and monitoring spending across various tasks and projects. I actively participated in stakeholder meetings, created system diagrams, and contributed to smooth communication between teams. After three quarters, the project was relocated to Switzerland following the closure of the Bulgarian office. Despite professional success and positive feedback from the German leadership, the pandemic-related lockdowns and social isolation presented personal challenges during this period.",
      skills: [
        "Spring Security", "Java", "Microsoft Azure", "3rd Party Integrations", "PDF Creator", "Confluence", "Jira",
        "Client Delivery", "ORM", "ETL"
      ]
    },
    {
      title: "Access Control Management System and Admin Panel",
      timeFrame: "Aug 2018 - Feb 2020",
      company: "EPAM Systems",
      description:
        "While working at EPAM Systems, I spent nearly two years developing an Access Control Management System and Admin Panel for a client. The solution enabled secure communication with physical devices via the MQTT protocol and included a rich JavaFX-based admin interface backed by a Spring Boot application. The system featured user account management, zone-based time tracking, PDF report generation, and a variety of administrative tools. I implemented asynchronous processing, integrated ORM for relational database operations, and set up automated build and testing workflows. The project was delivered in close collaboration with a UI/UX designer and a delivery manager, with regular stakeholder meetings ensuring alignment with business requirements and user expectations.",
      skills: [
        "JavaFX", "Figma", "Git", "Jira", "Mqtt", "Spring Boot", "Spring Security", "XML", "PDF Creator"
      ]
    },
    {
      title: "Command & Coordination System",
      timeFrame: "Oct 2019 - Feb 2020",
      company: "EPAM Systems",
      description:
        "While working at EPAM Systems, I developed the backend and middleware for a complex surveillance system designed to coordinate asynchronous workflows between machine operators in the field, ground support teams, and remote office personnel. The system enabled secure, real-time communication using Spring Boot, Spring Security, MQTT, and RabbitMQ, and included a REST API and middleware layer to manage messaging, requests, and notifications across multiple user interfaces. I implemented features such as PDF report generation for mission summaries, detailed user activity tracking, extensive logging, and robust testing and debugging practices. The solution was deployed and tested in AWS, with full integration of monitoring and tracing capabilities to ensure system reliability and performance.",
      skills: [
        "Mqtt", "Spring Boot", "PDF Creator"
      ]
    },
    {
      title: "Weekly Java Newsletter",
      timeFrame: "Jul 2018 - Oct 2019",
      company: "EPAM Systems",
      description:
        "While working at EPAM Systems in Sofia, Bulgaria, I was part of the team responsible for producing the Weekly Java Newsletter, a key internal publication distributed to around 20,000 EPAM employees globally. My role involved collecting and curating RSS feed data from a wide range of sources, focusing on the latest developments in Java, related frameworks, tools, and broader technology trends. I collaborated with colleagues to select high-quality articles and ensure the newsletter consistently delivered relevant and timely content, helping engineering teams stay informed about current industry movements.",
      skills: [
        "Global Delivery"
      ]
    },
    {
      title: "Resource Booking System",
      timeFrame: "Jun 2018 - Jan 2019",
      company: "EPAM Systems",
      description:
        "At EPAM Systems in Sofia, Bulgaria, I was involved in the development of an internal hardware resource tracking system, where I focused on backend implementation and contributed to DevOps workflows. The system was designed to manage the allocation and redistribution of various resources—ranging from laptops and office equipment to bicycles, yachts, and apartments—across EPAM employees for specific time periods, including during business trips abroad. I developed a RESTful API using Java and Spring Boot, integrated OAuth2 for secure access, and worked with Docker, Azure, and PostgreSQL, among other technologies. The application included features such as email notifications, booking management, and full integration with EPAM’s internal corporate systems, ultimately providing a practical tool to support employees in their daily and travel-related needs.",
      skills: [
        "Spring Security", "Spring Boot", "OAuth", "PostgreSQL", "Docker", "Microsoft Azure", "Global Delivery",
        "Sequence Diagrams", "Software Architecture", "3rd Party Integrations", "Custom Software", "Delivery Operations",
        "Hibernate", "IntelliJ IDEA", "Java", "Jira", "Maven", "Liquibase", "OpenAPI Specification (OAS)",
        "Software Deployment", "Single Page Applications", "REST", "ORM", "SASS", "Software Development",
        "Software Design", "Software Industry", "JWT"
      ]
    },
    {
      title: "WebMiner Suite -- Custom Data Extraction and Visualization Tools",
      timeFrame: "Jan 2013 - Jan 2015",
      company: "Freelancer",
      description:
        "Between 2013 and 2015, I developed a set of web and server-side tools for data mining and web scraping large volumes of unstructured data from various popular websites. These included platforms for car sales, real estate (houses, land, apartments), torrent indexing sites, and other online marketplaces. The tools were built primarily using Java and made extensive use of regular expressions to parse and transform messy or inconsistent HTML content into structured data. The processed data was stored in a PostgreSQL database, where it could be efficiently queried, filtered, and analyzed. For the front-end, I used Thymeleaf to create web-based visualizations that allowed clients to view, sort, and explore the collected data in a user-friendly interface. The tools enabled customers to identify trends, monitor markets, and gain actionable insights from otherwise hard-to-use web content. This project was both technically and financially rewarding, as I successfully delivered custom scraping and data processing solutions for multiple clients, generating significant income while solving real-world data challenges in a scalable way.",
      skills: [
        "Java", "PostgreSQL", "VPS", "Content Distribution Networks", "CSS", "XAMPP", "Client Delivery", "Delivery Operations",
        "Data Mining", "Data Visualization", "3rd Party Integrations", "Bash", "Custom Software", "ETL", "Full-Stack Development",
        "JavaScript", "ORM", "Regular Expressions", "R&D", "Sequence Diagrams", "Software Architecture"
      ]
    },
    {
      title: "Eatglobe -- Data Entry, Refinements, Testing",
      timeFrame: "May 2014 - Sep 2014",
      company: "",
      description:
        "Between May and September 2014, I took part in the Eatglobe project in Varna, Bulgaria, where I worked in data entry and quality assurance. My role involved analyzing data stored in SQL databases, cleaning and organizing fields, and ensuring the accuracy and consistency of the information. I was responsible for identifying incorrectly acquired data, pointing out inconsistencies, and helping transform raw data into a structured format that met the specific needs of the project. This required a strong understanding of data integrity, attention to detail, and effective communication with the team to resolve issues and improve the overall quality of the dataset.",
      skills: [
        "SQL", "Problem Solving"
      ]
    },
    {
      title: "SolidWorks Modeling & Manufacturing Estimation Suite",
      timeFrame: "Jan 2012 - Jan 2013",
      company: "Freelancer",
      description:
        "Between 2012 and late 2013, I worked on a side project focused on 3D modeling of furniture and mechanical components using SolidWorks. I created detailed, photorealistic renderings based on technical blueprints and engineering drawings, producing models suitable for use in machine tooling software such as Alphacam. In addition to modeling, I provided material and labor cost estimations, including production time calculations for different manufacturing techniques. Each model was priced at around $100 or more, and the project spanned several months, offering both technical and financial value to clients in manufacturing and design.",
      skills: [
        "PDF Creator", "Printing", "CAD", "AutoCAD", "SOLIDWORKS", "R&D", "Construction Estimating", "Problem Solving", "Data Visualization"
      ]
    },
    {
      title: "CMS for a Pizza Place",
      timeFrame: "Aug 2012 - Oct 2012",
      company: "Freelancer",
      description:
        "In 2012, I developed a custom Content Management System (CMS) for a local pizza restaurant in Bulgaria. The system was designed to manage the restaurant's online presence, streamline order processing, and maintain an up-to-date digital menu. The platform was built using CodeIgniter (PHP framework), with SQL databases for storing order and menu data. I used HTML, CSS, and jQuery to create a responsive, user-friendly front end, and integrated AJAX for smooth, real-time updates without reloading the page. The application also involved the use of SSH for secure server management and deployment. The CMS allowed restaurant staff to easily update the menu, track incoming orders, and manage customer interactions through a centralized interface, significantly improving operational efficiency and customer experience.",
      skills: [
        "CodeIgniter", "SQL", "HTML", "PHP", "HTTPS", "CSS", "Content Distribution Networks"
      ]
    },
    {
      title: "Educational Tools for Engineering and Science",
      timeFrame: "Oct 2010 - Jul 2012",
      company: "Technical University Gabrovo",
      description:
        "From late 2010 to late 2012, I developed a suite of desktop, command-line, and web applications aimed at solving complex academic problems in fields such as electrical engineering, theoretical physics, geometry, and chemistry. These tools were built using Java, C++, PHP, HTML, JavaScript, and CSS, and were designed to assist students—including myself—in tackling challenging coursework and exam preparation. The applications featured modules for solving complex numbers, differential equations, and electrical machine/apparatus problems, with step-by-step logic tracing and diagram generation to visualize processes. I also implemented PDF export functionality using templated outputs, enabling users to document solutions in a clear, formatted structure suitable for review or submission. These tools were widely used by hundreds of students in electrical engineering and information technology programs. In parallel, I worked as a tutor, teaching the underlying mathematical and scientific principles, and helping students understand both the theory and application of problem-solving methods through one-on-one and group sessions. This project exemplified my passion for combining software development with education, delivering practical solutions that significantly improved academic performance and comprehension.",
      skills: [
        "PDF Creator", "Sequence Diagrams", "JavaFX", "C++", "JavaScript", "CSS"
      ]
    },
    {
      title: "Multiplayer Online Game Servers and Websites",
      timeFrame: "Sep 2009 - Nov 2010",
      company: "Freelancer",
      description:
        "In this project, I delivered a full-stack infrastructure for hosting and managing private servers for several popular multiplayer online games, including World of Warcraft (WoW), MU Online, Diablo, and Counter-Strike (CS). I set up and maintained game servers on paid hosting platforms, leveraging SSH for secure server access and configuration. To support user interaction, I built associated websites using PHP, SQL, AJAX, jQuery, CSS, and pre-designed HTML templates. These websites enabled user registration and login, server status displays, and profile management, including image handling via CDN for efficient delivery. To ensure connectivity and access for international players, I assisted clients in connecting through VPN and other secure networking solutions. HTTPS was implemented to secure web communications, and XAMPP was used locally for testing and deployment preparation. This project combined game server administration, web development, and network support, resulting in a reliable ecosystem for online gameplay and community interaction.",
      skills: [
        "Content Distribution Networks", "3rd Party Integrations", "Delivery Operations", "VPS", "SQL", "CSS", "AJAX", "jQuery",
        "HTTPS", "Custom Software", "Regular Expressions", "XAMPP", "cPanel", "CLI", "JavaScript", "DNS", "Problem Solving"
      ]
    },
    {
      title: "Educational Math Applications",
      timeFrame: "Jan 2008 - Jan 2010",
      company: "High School of Mathematics and Natural Sciences, Gabrovo, Bulgaria",
      description:
        "Between 2008 and 2009, I developed a series of small desktop applications in C++ and Java to solve complex geometry and algebra problems commonly encountered in high school and early university coursework. These included tools for working with differential equations, triangle geometry, and analytical geometry, leveraging both mathematical formulas and custom-built logic. I designed and implemented reusable libraries in both C++ and Java to standardize calculations and streamline the development of new applications. These libraries enabled me—and other students—to quickly solve homework tasks by automating repetitive and complex mathematical processes. The solutions provided visual and numerical outputs to aid understanding. Although I occasionally used MATLAB, the majority of the work relied on custom applications built from scratch, at a time when tools like Wolfram Alpha were not widely available. This project laid the foundation for my problem-solving and software development skills, combining programming with applied mathematics in a highly practical way.",
      skills: [
        "Java", "JavaFX", "C++", "CLI", "JavaScript", "CSS"
      ]
    }
  ];

  return (
    <>
      <TopBar />
      <div className="view-projects">
        <h1>Projects History</h1>
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
            Thank you for taking the time to review my project portfolio. Should you wish to explore further, I invite you to visit my <a href="/diagrams">Diagrams</a> and <a href="/courses">Courses</a> pages for additional insights into my work and expertise.
          </p>
          <p>
            For a comprehensive overview of my professional background, please refer to my <a href="/">CV</a>.
          </p>
          <p>
            I appreciate your interest and consideration.
          </p>
        </div>
      </div>
    </>
  );
}