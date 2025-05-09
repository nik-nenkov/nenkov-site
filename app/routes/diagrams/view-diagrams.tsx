import React from "react";
import "./view-diagrams.scss";
import TopBar from "~/components/bar/top-bar";

export default function ViewDiagrams() {
  return (
    <>
      <TopBar />
      <section className="diagrams-section">
        <h1>Software Architecture Diagrams</h1>
        <p>
          Explore a collection of diagrams that showcase my expertise in software architecture, system design, and professional software development. These diagrams include C4-style architecture diagrams, UML sequence diagrams, and other visualizations that demonstrate my ability to design and document complex systems and services.
        </p>

        <div className="diagrams-gallery">
          <div className="diagram">
            <h2>C4 Context Diagram</h2>
            <img
              src="https://static.structurizr.com/workspace/36141/diagrams/SystemContext.png"
              alt="C4 Context Diagram"
            />
            <p>
              A high-level overview of a system and its interactions with external actors.
            </p>
          </div>

          <div className="diagram">
            <h2>UML Sequence Diagram</h2>
            <img
              src="https://www.researchgate.net/profile/Thomas-Maier-7/publication/249883238/figure/fig3/AS:669385375117327@1536605318955/Example-sequence-diagram-for-the-frequency-converter-software.png"
              alt="UML Sequence Diagram"
            />
            <p>
              A detailed sequence of interactions between components in a system.
            </p>
          </div>

          <div className="diagram">
            <h2>System Component Diagram</h2>
            <img
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/uml/component-diagram/component-diagram-example-497x318.PNG"
              alt="System Component Diagram"
            />
            <p>
              A breakdown of the system into its core components and their relationships.
            </p>
          </div>

          <div className="diagram">
            <h2>Deployment Diagram</h2>
            <img
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/what-is-a-deployment-diagram-in-UML/deployment_diagram_real_estate-700x573.png"
              alt="Deployment Diagram"
            />
            <p>
              A visualization of how the system is deployed across infrastructure.
            </p>
          </div>

          {/* Additional Diagrams */}
          <div className="diagram">
            <h2>Data Flow Diagram</h2>
            <img
              src="https://static-cse.canva.com/blob/1420686/long-form_data-flow-diagram_section-6_asset-1.png"
              alt="Data Flow Diagram"
            />
            <p>
              Illustrates how data flows through a system, including inputs, processes, and outputs.
            </p>
          </div>

          <div className="diagram">
            <h2>ER Diagram (Entity-Relationship Diagram)</h2>
            <img
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-example.svg"
              alt="ER Diagram"
            />
            <p>
              Represents the relationships between entities in a database, helping with database design.
            </p>
          </div>

          <div className="diagram">
            <h2>State Diagram</h2>
            <img
              src="https://guides.visual-paradigm.com/wp-content/uploads/2023/03/img_641a6e01e60ab.png"
              alt="State Diagram"
            />
            <p>
              Describes the states of an object and the transitions between those states.
            </p>
          </div>

          <div className="diagram">
            <h2>Activity Diagram</h2>
            <img
              src="https://sparxsystems.com/enterprise_architect_user_guide/17.0/images/credit-card-problem.bmp.png"
              alt="Activity Diagram"
            />
            <p>
              Visualizes workflows and processes, showing the sequence of activities in a system.
            </p>
          </div>

          <div className="diagram">
            <h2>Class Diagram</h2>
            <img
              src="https://www.red-gate.com/simple-talk/wp-content/uploads/imported/2405-clip_image006.jpg"
              alt="Class Diagram"
            />
            <p>
              Models the structure of a system by showing its classes, attributes, methods, and relationships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}