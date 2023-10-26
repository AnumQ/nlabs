import { useTranslation } from "react-i18next";
import Layout from "../../../shared/Layout/Layout";
import "./privacy.scss";
function Privacy() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="privacy-container">
        <div className="privacy-content">
          <h1>{t("privacyPolicy.title")}</h1>
          <p>
            <strong>{t("privacyPolicy.lastUpdated")}</strong>
          </p>

          <p>
            {t("privacyPolicy.introduction.part1")}
            <a href={t("privacyPolicy.introduction.link")}>
              {t("privacyPolicy.introduction.part2")}
            </a>
            {t("privacyPolicy.introduction.part3")}
          </p>
          <p>{t("privacyPolicy.introduction.warning")}</p>

          <h2>{t("privacyPolicy.collection.title")}</h2>
          <p>{t("privacyPolicy.collection.description")}</p>
          <ul>
            <li>{t("privacyPolicy.collection.personalData")}</li>
            <li>{t("privacyPolicy.collection.usageData")}</li>
            <li>{t("privacyPolicy.collection.mobileData")}</li>
          </ul>

          <h2>{t("privacyPolicy.use.title")}</h2>
          <p>{t("privacyPolicy.use.description")}</p>
          <ul>
            <li>{t("privacyPolicy.use.deliver")}</li>
            <li>{t("privacyPolicy.use.respond")}</li>
            <li>{t("privacyPolicy.use.process")}</li>
            <li>{t("privacyPolicy.use.email")}</li>
          </ul>

          <h2>{t("privacyPolicy.disclosure.title")}</h2>
          <p>{t("privacyPolicy.disclosure.description")}</p>

          <h2>{t("privacyPolicy.security.title")}</h2>
          <p>{t("privacyPolicy.security.description")}</p>

          <h2>{t("privacyPolicy.thirdPartyLinks.title")}</h2>
          <p>{t("privacyPolicy.thirdPartyLinks.description")}</p>

          <h2>{t("privacyPolicy.children.title")}</h2>
          <p>{t("privacyPolicy.children.description")}</p>

          <h2>{t("privacyPolicy.changes.title")}</h2>
          <p>{t("privacyPolicy.changes.description")}</p>

          <h2>{t("privacyPolicy.contact.title")}</h2>
          <p>{t("privacyPolicy.contact.description")}</p>
          <p>
            <span>
              {t("privacyPolicy.contact.emailLabel")}{" "}
              <a href={`mailto:${t("privacyPolicy.contact.email")}`}>
                {t("privacyPolicy.contact.email")}
              </a>
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
