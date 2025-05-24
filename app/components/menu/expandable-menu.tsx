import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./expandable-menu.scss";

export default function ExpandableMenu() {
    const { t } = useTranslation();

    return (
        <div className="expandable-menu">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button">
                <span className="arrow"></span>
            </label>
            <nav className="menu">
                <ul>
                    <li><Link to="/projects">{t("menuProjects")}</Link></li>
                    <li><Link to="/courses">{t("menuCourses")}</Link></li>
                    <li><Link to="/diagrams">{t("menuDiagrams")}</Link></li>
                    <li><Link to="/books">{t("menuBooks")}</Link></li>
                </ul>
            </nav>
        </div>
    );
}