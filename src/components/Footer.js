import React from 'react';

function Footer() {
  return (
    <div className="row">
      <div className="col text-center copyright">
        <p>© Lauren Goss {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
