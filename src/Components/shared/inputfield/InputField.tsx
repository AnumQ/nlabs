import React from "react";
import "./input-field.scss";
import { useField } from "formik";
import { useTranslation } from "react-i18next";

interface InputFieldProps {
  key: string;
  label: string;
  name: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { t } = useTranslation();

  const { label } = props;
  const [field, meta] = useField(props);

  const errorBasedOpacity = {
    opacity: meta.touched && meta.error ? 1 : 0,
  };
  return (
    <div className="field-wrapper">
      <label>{label}</label>
      <div className="input-field">
        <input {...field} {...props} />
        <img
          src="alert-circle.svg"
          className="alert"
          alt="Alert"
          style={errorBasedOpacity}
        />
      </div>
      <div className="error" style={errorBasedOpacity}>
        {t(`${meta.error}`)}
      </div>
    </div>
  );
};

export default InputField;
