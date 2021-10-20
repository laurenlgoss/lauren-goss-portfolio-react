import React from 'react';

const contactInfo = '{ email: laurenlgoss98@gmail.com, phone: 828-409-3012, resume: <a href="/Lauren Goss Resume.pdf" target="_blank" className="resume-download">downloadHere</a> };';

function Contact() {
    return (
        <div id="contact">
            <div className="row" style={{height: "0;"}}>
                <div className="col text-right">
                    <h1 className="section-title" id="contact-title">contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h5 className="alt-font">
                        contactInfo = {contactInfo}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Contact;
