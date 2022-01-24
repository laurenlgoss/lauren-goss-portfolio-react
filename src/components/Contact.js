import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import resume from '../images/Lauren Goss Resume.pdf';

require('dotenv').config();

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
    console.log(formState);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    // Send email to me using EmailJS
    await emailjs.send(serviceId, templateId, formState, userId);

    // TODO: Add alert that email was successfully sent


    setFormState({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <div id="contact">
      <div className="row" style={{ height: '0', position: 'relative' }}>
        <div className="col text-right">
          <h1 className="section-title" id="contact-title">
            contact
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h5 className="alt-font">
            {`contactInfo = { email: laurenlgoss98@gmail.com, phone: 828-409-3012, resume: `}
            <a
              href={resume}
              target="_blank"
              className="resume-download"
              rel="noreferrer"
            >
              viewHere
            </a>
            {` }`}
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input
            className="form-control mb-3 alt-font"
            name="name"
            placeholder="name"
            onChange={handleFormChange}
            value={formState.name}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control mb-3 alt-font"
            name="email"
            placeholder="your email"
            onChange={handleFormChange}
            value={formState.email}
          />
        </div>
        <div className="col-12">
          <textarea
            className="form-control mb-3 alt-font"
            name="message"
            placeholder="message"
            onChange={handleFormChange}
            value={formState.message}
          />
        </div>
        <div className="col-12 text-center">
          <button className="btn send-message mb-5" onClick={handleFormSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
