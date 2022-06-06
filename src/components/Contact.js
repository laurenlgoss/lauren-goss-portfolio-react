import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resume from '../images/Lauren Goss Resume.pdf';

require('dotenv').config();

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationMessage, setValidationMessage] = useState(false);
  const [successfullySentMessage, setSuccessfullySentMessage] = useState(false);

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
    console.log(formState);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (formState.name && formState.email && formState.message) {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const userId = process.env.REACT_APP_USER_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;

      // Send email to me using EmailJS
      await emailjs.send(serviceId, templateId, formState, userId);

      // Alert email was successfully sent
      setSuccessfullySentMessage(true);
      setValidationMessage(false);

      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Show validation message
      setSuccessfullySentMessage(false);
      setValidationMessage(true);
    }
  }

  return (
    <div id="contact" className='between-padding alt-background'>
        <div className="section-title-wrapper">
          <div className="section-title">contact me</div>
          <div className="alt-font text-center section-description">{`< Get in touch with me. >`}</div>
        </div>
      <div className="row mb-5">
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
          <button className="send-message" onClick={handleFormSubmit}>
            Send Message
          </button>
          {successfullySentMessage ? (
            <>
              <div class="mt-2" style={{ color: '#82cc2a' }}>
                <FontAwesomeIcon icon={['fas', 'check']} /> Message successfully
                sent
              </div>
              <div>
                Thank you for getting in touch with me! I will respond as soon
                as I can.
              </div>
            </>
          ) : null}
          {validationMessage ? (
            <div class="text-danger mt-2">* All fields required</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contact;
