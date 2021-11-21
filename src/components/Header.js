import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headshotImg from '../images/Headshot.jpg';

function Header() {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-3 left-header"></div>
        <div className="col-9 right-header">
          <div className="row">
            <div className="col-3">
              <img src={headshotImg} className="headshot" alt="Lauren Goss Headshot" />
              <div className="headshot-decoration"></div>
            </div>
            <div className="col-6 align-self-center intro">
              <h5>
                <span className="alt-font hello">
                  <FontAwesomeIcon icon={['fas', 'quote-left']} /> Hello world{' '}
                  <FontAwesomeIcon icon={['fas', 'quote-right']} />
                </span>{' '}
                my name is
              </h5>
              <h1 className="my-name">Lauren Goss</h1>
              <p>
                I am a Full-Stack Web Developer, recently graduated from the UNC
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