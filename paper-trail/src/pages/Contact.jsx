import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const ContactLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ContactInput = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ContactTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ContactButton = styled.button`
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function Contact() {
  return (
    <ContactSection>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <ContactLabel htmlFor="name">Name</ContactLabel>
        <ContactInput type="text" id="name" name="name" required />
        <ContactLabel htmlFor="email">Email</ContactLabel>
        <ContactInput type="email" id="email" name="email" required />
        <ContactLabel htmlFor="message">Message</ContactLabel>
        <ContactTextarea id="message" name="message" rows="5" required />
        <ContactButton type="submit">Send Message</ContactButton>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;
