import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../shared/Layout/Layout";
import "./contact.scss";
import Card from "../shared/Card/Card";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    console.log(contactFormData);
    setContactFormData({ name: "", email: "", message: "" });
  };

  const FORM_TITLE = t("contactForm.title");
  const NAME = t("contactForm.name");
  const EMAIL = t("contactForm.email");
  const MESSAGE = t("contactForm.message");
  const SEND = t("contactForm.send");
  return (
    <Layout>
      <Card>
        <div className="contact-container">
          <h2>{FORM_TITLE}</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>{NAME}:</label>
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleInputChange}
              required
            />
            <label>{EMAIL}:</label>
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleInputChange}
              required
            />
            <label>{MESSAGE}:</label>
            <textarea
              name="message"
              rows={5}
              value={contactFormData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">{SEND}</button>
          </form>
        </div>
      </Card>
    </Layout>
  );
};

export default ContactUs;
