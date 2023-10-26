import React, { useState, ChangeEvent } from "react";
import "./language.scss";
import { DEFAULT_LANGUAGE } from "../../../Constants";
import { useTranslation } from "react-i18next";

function LanguageDropdrown() {
  const [selectedValue, setSelectedValue] = useState<string>(DEFAULT_LANGUAGE);
  const { t, i18n } = useTranslation();

  const [isChevronDown, toggleChevronDown] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    i18n.changeLanguage(event.target.value);
    toggleChevronDown(true);
  };

  return (
    <div className="language">
      <select
        className="select-menu"
        value={selectedValue}
        onChange={handleChange}
        onClick={() => toggleChevronDown(false)}
        onFocus={() => toggleChevronDown(false)}
      >
        <option value="en">{t("language.en")}</option>
        <option value="no">{t("language.no")}</option>
      </select>
      <span className="chevron">{isChevronDown ? ChevronDown : ChevronUp}</span>
    </div>
  );
}

const ChevronDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-down"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const ChevronUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-up"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </svg>
);

export default LanguageDropdrown;
