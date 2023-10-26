import { useTranslation } from "react-i18next";
import Layout from "../../../shared/Layout/Layout";
import "./terms.scss";
function Terms() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="terms-container">
        <div className="terms-content">
          <h1>{t("termsAndConditions.title")}</h1>
          <p>
            <strong>{t("termsAndConditions.introduction")}</strong>
          </p>
          <p>{t("termsAndConditions.acceptance")}</p>
          <p>{t("termsAndConditions.changes")}</p>
          <p>{t("termsAndConditions.termination")}</p>
          <p>{t("termsAndConditions.governingLaw")}</p>
          <p>{t("termsAndConditions.contact")}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Terms;
