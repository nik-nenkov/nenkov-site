import React from "react";
import { Meta } from "react-router";
import "./view-services.scss";
import TopBar from "~/components/bar/top-bar";

// SEO meta function
export function meta() {
    return [
        { title: "Professional Services | Nikolay Nenkov" },
        {
            name: "description",
            content:
                "Discover the professional services offered by Nikolay Nenkov: full-stack development, cloud & DevOps, system design, API integration, technical consulting, and more.",
        },
    ];
}

const services = [
    {
        title: "Full-Stack Development",
        desc: "Design and implementation of robust web and mobile applications, covering both frontend (React, Angular, Vue.js) and backend (Java, Node.js, Go, PHP, Python) technologies. Modernize legacy systems or build new solutions tailored to your business needs.",
        highlights: [
            "Custom web & mobile apps",
            "Legacy system modernization",
            "Frontend & backend architecture",
            "UI/UX implementation",
            "Database design & optimization"
        ]
    },
    {
        title: "Cloud & DevOps Solutions",
        desc: "Setup and automation of cloud infrastructure, CI/CD pipelines, containerization, and deployment on platforms like Azure, AWS, and VPS. Improve scalability, reliability, and delivery speed.",
        highlights: [
            "Docker & Kubernetes orchestration",
            "CI/CD pipeline setup",
            "Cloud migration & management",
            "Infrastructure as Code",
            "Monitoring & system tracing"
        ]
    },
    {
        title: "System Design & Architecture",
        desc: "Consulting on scalable, secure, and maintainable system architectures. Creation of UML diagrams, requirements analysis, and alignment with stakeholders for optimal solutions.",
        highlights: [
            "Architecture consulting",
            "UML & C4 diagrams",
            "Requirements gathering",
            "Stakeholder alignment",
            "Performance optimization"
        ]
    },
    {
        title: "API Development & Integration",
        desc: "Development and integration of RESTful APIs, OAuth, WebSockets, and third-party services (Stripe, Azure Cognitive Services, etc.). Automate workflows and connect your systems.",
        highlights: [
            "REST & WebSocket APIs",
            "OAuth & security integration",
            "External service integration",
            "ETL & data pipelines",
            "OpenAPI Specification"
        ]
    },
    {
        title: "Technical Consulting & Team Support",
        desc: "Mentoring, onboarding, and upskilling teams. Project optimization, code reviews, and documentation to ensure best practices and smooth delivery.",
        highlights: [
            "Mentoring & tutoring",
            "Project audits & optimization",
            "Onboarding & training",
            "Documentation & code review",
            "Team leadership"
        ]
    },
    {
        title: "Data Engineering & Visualization",
        desc: "Data mining, transformation, and visualization using tools like PostgreSQL, ElasticSearch, and custom dashboards. Ensure data quality and actionable insights.",
        highlights: [
            "Data mining & ETL",
            "Database design",
            "Reporting & dashboards",
            "Data QA & processing",
            "Visualization (OpenStreetMap, Thymeleaf)"
        ]
    },
    {
        title: "Other Services",
        desc: "CAD modeling (SolidWorks, AutoCAD), construction estimating, problem solving, research & development, and more. Flexible support for unique technical challenges.",
        highlights: [
            "CAD & 3D modeling",
            "Cost estimation",
            "Custom software solutions",
            "Research & prototyping",
            "Technical documentation"
        ]
    },
    {
        title: "Tutoring & Teaching",
        desc: "Personalized tutoring and teaching in mathematics, electrical engineering theory, software development (from fundamentals to expert level), and natural sciences. Supporting young professionals, students in technical and business schools, and consulting managers and companies to bridge knowledge gaps and foster growth.",
        highlights: [
            "Math tutoring (all levels)",
            "Electrical engineering theory",
            "Software development (fundamentals to expert)",
            "Natural sciences education",
            "Mentoring for students & professionals",
            "Consulting for managers & companies"
        ]
    }
];

export default function ViewServices() {
    return (
        <>
            <Meta />
            <TopBar title="Professional Services" />
            <section className="services-section">
                <p className="intro">
                    I offer a wide range of professional services to help clients achieve their business and technical goals. Below are the main areas where I can deliver value, based on years of hands-on experience across industries and technologies.
                </p>
                <div className="services-list">
                    {services.map((service, idx) => (
                        <div className="service-card" key={idx}>
                            <h2>{service.title}</h2>
                            <p className="desc">{service.desc}</p>
                            <ul>
                                {service.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="contact-note">
                    <p>
                        Interested in working together or have a project in mind? Whether it's for your business, educational growth, or personal career development,{" "}
                        <a href="mailto:nenkov.nik@gmail.com">contact me</a> to discuss how I can help you succeed.
                    </p>
                </div>
            </section>
        </>
    );
}