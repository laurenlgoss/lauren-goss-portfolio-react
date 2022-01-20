import React, { useState } from 'react';

import resume from '../images/Lauren Goss Resume.pdf';

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

  function handleFormSubmit() {
    // TODO: Send email to me

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
              downloadHere
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
            placeholder="email"
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
