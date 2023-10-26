import { useTranslation } from "react-i18next";
import * as Yup from "yup";

function FormikSchema() {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "form.errors.firstName.tooShort")
      .max(70, "form.errors.firstName.tooLong")
      .required("form.errors.firstName.isRequired"),
    lastName: Yup.string()
      .min(2, "form.errors.lastName.tooShort")
      .max(70, "form.errors.lastName.tooLong")
      .required("form.errors.lastName.isRequired"),
    email: Yup.string()
      .email(t("form.errors.email.isInvalid"))
      .required("form.errors.email.isRequired"),
    addressStreet: Yup.string().required(
      "form.errors.addressStreet.isRequired"
    ),
    addressCity: Yup.string().required("form.errors.addressCity.isRequired"),
    addressPostalCode: Yup.string().required(
      "form.errors.addressPostalCode.isRequired"
    ),
    addressCountry: Yup.string().required(
      "form.errors.addressCountry.isRequired"
    ),
  });

  return schema;
}
export default FormikSchema;
