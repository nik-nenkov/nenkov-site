import React from "react";
import { Meta } from "react-router";
import { useTranslation } from "react-i18next";
import "./home.scss";
import AppHeader from "~/components/header/app-header";
import AppFooter from "~/components/footer/app-footer";

// SEO meta function
export function meta() {
  return [
    { title: "Nikolay Nenkov - Full Stack Developer CV & Portfolio" },
    {
      name: "description",
      content:
        "Personal CV and portfolio of Nikolay Nenkov, experienced full-stack developer. Explore skills, work experience, education, and project achievements in software development, cloud, DevOps, and consulting.",
    },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  const workList = t("workExperienceList", { returnObjects: true }) as any[];
  const educationList = t("educationList", { returnObjects: true }) as any[];
  const skillsList = t("skillsList", { returnObjects: true }) as any[];

  return (
    <div className="App">
      <Meta />
      <AppHeader />
      <main>
        <section>
          <h2>{t("personalProfileTitle")}</h2>
          <p>{t("personalProfileText")}</p>
          <a
            href="https://app.enhancv.com/share/e40e3a5c/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            <span role="img" aria-label="Download">📄</span>
            &nbsp;{t("downloadResume")}
          </a>
        </section>
        <section>
          <h2>{t("workExperienceTitle")}</h2>
          <ul>
            {workList.map((item, idx) => (
              <li key={idx}>
                <h3>{item.title}</h3>
                <h4>{item.period}</h4>
                <p>{item.desc}</p>
                {item.desc2 && <p>{item.desc2}</p>}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{t("educationTitle")}</h2>
          <ul>
            {educationList.map((item, idx) => (
              <li key={idx}>
                <h3>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <h4>
                  {item.period} | {item.location}
                </h4>
                <div className="major">
                  <strong>{t("majorLabel")}: </strong>
                  {item.major}
                </div>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{t("skillsTitle")}</h2>
          <dl>
            {skillsList.map((item, idx) => (
              <React.Fragment key={idx}>
                <dt>{item.category}</dt>
                <dd>{item.items}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>
        <section>
          <h2>{t("referencesTitle")}</h2>
          <p>{t("referencesText")}</p>
        </section>
      </main>
    </div>
  );
}
