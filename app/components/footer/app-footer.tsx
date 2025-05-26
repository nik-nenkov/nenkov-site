import "./app-footer.scss";
import SocialLinks from "./social-links";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AppFooter() {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left-part">
          {/* Thank You Section */}
          <section className="footer-section thank-you-section">
            <h2>{t("footerThankYouTitle")}</h2>
            <p>{t("footerThankYouText1")}</p>
            <p>
              {t("footerThankYouText2")}
              <br /><br />
              {t("footerThankYouText3")}
            </p>
          </section>
        </div>
        {/* Navigation Links Section - Two Columns */}
        <section className="footer-section nav-links-section">
          <div className="footer-nav-columns">
            <ul className="footer-nav">
              <li><Link to="/">{t("footerNavHome")}</Link></li>
              <li><Link to="/about">{t("footerNavAbout")}</Link></li>
              <li><Link to="/skills">{t("footerNavSkills")}</Link></li>
              <li><Link to="/contact">{t("footerNavContact")}</Link></li>
              <li><Link to="/courses">{t("footerNavCourses")}</Link></li>
              <li><Link to="/diagrams">{t("footerNavDiagrams")}</Link></li>
              <li><Link to="/projects">{t("footerNavProjects")}</Link></li>
              <li><Link to="/books">{t("footerNavBooks")}</Link></li>
              <li><Link to="/services">{t("footerNavServices")}</Link></li>
            </ul>
          </div>
        </section>
      </div>
          {/* Social Links Section */}
          <SocialLinks />
      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>{t("footerCopyright")}</p>
      </div>
    </footer>
  );
}