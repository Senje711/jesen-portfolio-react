import React, { useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import resumeImg from '../../assets/Resume.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Jesenhower A. Nachor,</span> frontend developer based in
        Philippines
      </h1>
      <p>
        I am a 3rd year BSIT pursuing to become a Frontend Developer and i want
        gain more knowledge in backend side
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume}>
          My Resume
        </div>
      </div>

      {showResume && (
        <div className="resume-popup-overlay" onClick={closeResume}>
          <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
            <button className="resume-close-btn" onClick={closeResume}>
              ✕
            </button>
            <img
              src={resumeImg}
              alt="Resume"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                marginTop: '20px',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
