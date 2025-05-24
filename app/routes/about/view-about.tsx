import React from "react";
import "./view-about.scss";
import TopBar from "~/components/bar/top-bar";
import { Meta } from "react-router";
import { useTranslation } from "react-i18next";

// SEO meta function
export function meta() {
  return [
    { title: "About Nikolay Nenkov - Full Stack Developer" },
    { name: "description", content: "Learn more about Nikolay Nenkov, a passionate full-stack developer with expertise in web, cloud, and system design. Discover his experience, achievements, and services." }
  ];
}

export default function ViewAbout() {
  const { t } = useTranslation();

  const services = t("aboutServicesList", { returnObjects: true }) as string[];
  const achievements = t("aboutAchievementsList", { returnObjects: true }) as string[];

  return (
    <>
      <Meta />
      <TopBar title={t("aboutTitle")} />
      <section className="about-section">
        <p>{t("aboutWelcome")}</p>

        <h2>{t("aboutExperienceTitle")}</h2>
        <p>{t("aboutExperienceText")}</p>

        <h2>{t("aboutServicesTitle")}</h2>
        <ul>
          {services.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2>{t("aboutAchievementsTitle")}</h2>
        <p>{t("aboutAchievementsIntro")}</p>
        <ul>
          {achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2>{t("aboutFuturePlansTitle")}</h2>
        <p>{t("aboutFuturePlansText")}</p>

        <h2>{t("aboutLookingTitle")}</h2>
        <p>{t("aboutLookingText")}</p>
      </section>
    </>
  );
}