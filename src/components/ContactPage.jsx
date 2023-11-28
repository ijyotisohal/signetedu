import React from 'react';
import { useSelector } from 'react-redux';

const ContactPage = () => {
  const translations = useSelector(state => state.language.translations);
  const { title, address, email } = translations.contact;

  return (
    <div>
      <h1>{title}</h1>
      <p>{address}</p>
      <p>{email}</p>
    </div>
  );
};

export default ContactPage;
