import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headshotImg from '../images/Headshot.jpg';

function Header() {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-md-6 col-lg-3 left-header"></div>
        <div className="col-md-6 col-lg-9 right-header">
          <div className="row align-content-center">
            <div className="col-lg-3">
              <img src={headshotImg} className="headshot" alt="Lauren Goss Headshot" />
            </div>
            <div className="col-lg-6 intro">
              <h5>
                <span className="alt-font hello">
                  <FontAwesomeIcon icon={['fas', 'quote-left']} /> Hello world{' '}
                  <FontAwesomeIcon icon={['fas', 'quote-right']} />
                </span>{' '}
                my name is
              </h5>
              <h1 className="my-name">Lauren Goss</h1>
              <p>
                I am a Full-Stack Web Developer, graduated from the UNC
                Coding Boot Camp for Full-Stack Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
