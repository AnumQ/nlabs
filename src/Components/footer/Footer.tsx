import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="links-wrapper">
        <div className="links-container">
          <div className="info-div">
            <span>
              <Link to="/contact" className="custom-link">
                {t("footer.contactUs")}
              </Link>
            </span>
          </div>
          <div className="pipe"></div>
          <div className="info-div">
            <Link to="/privacypolicy" className="custom-link">
              {t("footer.privacyPolicy")}
            </Link>
          </div>
          <div className="pipe"></div>
          <div className="info-div">
            <Link to="/terms" className="custom-link">
              {t("footer.termsAndConditions")}
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright-div">
        &copy; {new Date().getFullYear()} Labs. {t("footer.copyright")}
      </div>
    </footer>
  );
}

export default Footer;
