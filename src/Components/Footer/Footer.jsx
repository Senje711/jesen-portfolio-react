import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import user_icon from '../../assets/user_icon.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Footer = () => {
  const scrollToTop = () => {
    const button = event.currentTarget;
    button.classList.add('animate');
    setTimeout(() => button.classList.remove('animate'), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={Logo} alt="" className="footer-logo" />
          <p>
            I am 4th year BSIT pursuing a frontend developer from, PH with a
            experience of projects in school like designing in figma and coding
            for front end side.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Jesenhower Nachor. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policies</p>
          <p>Connect With Me</p>
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <img src={arrow_icon} alt="Scroll to top" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
