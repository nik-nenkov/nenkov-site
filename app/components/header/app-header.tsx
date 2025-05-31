import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";
import { useTranslation } from "react-i18next";
import LangSwitch from "../lang/lang-switch";

export default function AppHeader() {
  const { t } = useTranslation();

  return (
    <header className="App-header">
      <div className="profile-container">
        <img
          src="/images/avatar_192x192.webp"
          alt={t("nikNenkov")}
          className="profile-photo"
          fetchPriority="high"
          width="192"
          height="192"
          title="Follow on LinkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nik-nenkov",
              "_blank"
            )
          }
        />
        <div className="contact-info">
          <h1>{t("nikNenkov")}</h1>
          <p style={{ color: "gold" }}>{t("fullStackDeveloper")}</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:nik@nenkov.site">
              nik@nenkov.site
            </a>
          </p>
        </div>
      </div>
      <LangSwitch />
      <ExpandableMenu />
    </header>
  );
}