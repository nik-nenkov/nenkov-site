import React from "react";
import { Meta } from "react-router";
import { useTranslation } from "react-i18next";
import "./view-services.scss";
import TopBar from "~/components/bar/top-bar";

// SEO meta function
export function meta() {
    return [
        { title: "Services | Nikolay Nenkov" },
        {
            name: "description",
            content:
                "Discover how I help businesses grow with websites, automation, secure data, easy payments, and ongoing support.",
        },
    ];
}

export default function ViewServices() {
    const { t } = useTranslation();
    const services = t("servicesList", { returnObjects: true }) as Array<{ title: string; desc: string }> || [];

    return (
        <>
            <Meta />
            <TopBar title={t("servicesTitle")} />
            <section className="services-section">
                <p className="intro">{t("servicesIntro")}</p>
                <a
                    href="https://calendly.com/nik-nenkov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-meeting-btn"
                >
                    <span role="img" aria-label="Book">📅</span>&nbsp;{t("bookMeeting")}
                </a>
                <div className="services-list">
                    {services.map((service, idx) => (
                        <div className="service-card" key={idx}>
                            <h2>{service.title}</h2>
                            <p className="desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="contact-note"
                    dangerouslySetInnerHTML={{ __html: t("servicesContactNote") }}
                />
            </section>
        </>
    );
}