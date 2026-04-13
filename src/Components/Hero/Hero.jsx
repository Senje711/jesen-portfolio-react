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
        <span>I'm Jesenhower A. Nachor,</span> Aspiring Software Developer
      </h1>
      <p>
        BSIT 4th year student passionate about building clean, responsive web
        applications with React and modern JavaScript. Eager to learn,
        collaborate with experienced developers, and contribute to impactful
        projects while expanding my full-stack capabilities.
      </p>

      <div className="hero-social-links">
        <a
          href="https://www.linkedin.com/in/jesenhower-nachor-5096b33aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Senje711"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link github"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="mailto:jesenhowernachor26@gmail.com?subject=Let's%20Connect!&body=Hi%20Jesenhower,%0A%0AI'm%20interested%20in%20connecting%20with%20you!%0A%0ABest%20regards"
          className="social-link email"
          aria-label="Email"
        >
          Email
        </a>
      </div>

      <div className="hero-action">
        <div
          className="hero-connect"
          role="button"
          tabIndex={0}
          aria-label="Connect with me"
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          role="button"
          tabIndex={0}
          onClick={openResume}
          aria-label="Open resume"
        >
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
