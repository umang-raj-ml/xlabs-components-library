import React from "react";
import XlabsContactForm from "./xlabs-contact-form";

export default {
  title: "Components/ContactForm",
  component: XlabsContactForm,
  parameters: {
    layout: "centered",
  },
};

export const Default = () => <XlabsContactForm />;

// Story with pre-filled data
export const Prefilled = () => {
  const mockData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    subject: "Inquiry about Services",
    message: "Hello, I would like to learn more about your services.",
    agreed: true,
  };

  return <XlabsContactForm defaultValues={mockData} />;
};