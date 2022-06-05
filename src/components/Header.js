import React from 'react';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headshotImg from '../images/Headshot.jpg';

function Header() {
  return (
    <div className="header-container">
      <div className="row align-content-center">
        <div className="col-lg-4 offset-lg-1 headshot-col text-center text-lg-end mb-4 mb-lg-0">
          <img
            src={headshotImg}
            className="headshot img-fluid"
            alt="Lauren Goss Headshot"
          />
        </div>
        <div className="col-lg-6 intro my-lg-auto mb-5 text-center text-lg-start">
          <h3 className="alt-font hello">
            <Typewriter
            delay={1}
              onInit={(typewriter) => {
                typewriter.typeString('Hello World! My name is').start();
              }}
            />
          </h3>
          <h1 className="my-name mb-lg-5">Lauren Goss</h1>
          <FadeIn delay={4000}>
            <div>Full-Stack Web Developer.</div>
          </FadeIn>
          <FadeIn delay={5000}>
            <div>
              Graduate of the UNC Coding Boot Camp for Full-Stack Web
              Development.
            </div>
          </FadeIn>
        </div>
      </div>
      <FadeIn delay={6000}>
        <a href="#about-me">
          <div className="text-center down-arrow">
            About Me
            <br />
            <FontAwesomeIcon icon={['fas', 'arrow-down']} size="3x" />
          </div>
        </a>
      </FadeIn>
    </div>
  );
}

export default Header;
