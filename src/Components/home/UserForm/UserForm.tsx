import React from "react";
import { Formik, Form } from "formik";
import Card from "../../shared/Card/Card";
import InputField from "../../shared/inputfield/InputField";
import { useTranslation } from "react-i18next";
import FormikSchema from "./FormikSchema";
import "./userform.scss";
import { UserFormData } from "../../../Interfaces/UserFormData";

export interface Props {
  isVisible: boolean;
  onClose: () => void;
}

/* Form to collect user details */
export const UserForm: React.FC<Props> = ({ isVisible, onClose }) => {
  const schema = FormikSchema();
  const { t } = useTranslation();

  const elClassname = "userform-container";

  return (
    <div
      className={`${
        !isVisible
          ? `${elClassname} ${elClassname}--closed`
          : `${elClassname} ${elClassname}--isopen`
      }`}
    >
      <Card closable onClose={onClose}>
        <Formik
          initialValues={initalFormValues}
          validationSchema={schema}
          onSubmit={(values: UserFormData) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="form">
            {formKeys.map((key) => (
              <InputField
                key={key}
                label={t(`form.labels.${key}`)}
                name={key}
                placeholder={t(`form.placeHolders.${key}`)}
              />
            ))}

            <button className="submit-btn" type="submit">
              {t("form.submitTitle")}
            </button>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

const initalFormValues: UserFormData = {
  firstName: "",
  lastName: "",
  email: "",
  addressStreet: "",
  addressCity: "",
  addressPostalCode: "",
  addressCountry: "",
};

const formKeys = Object.keys(initalFormValues) as Array<keyof UserFormData>;
