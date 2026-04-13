import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/about_profile.png';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About = () => {
  const ref = useIntersectionObserver();
  return (
    <>
      <div id="about" className="about scroll-animate" ref={ref}>
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={about_profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                A dedicated BSIT 4th year student with a strong passion for
                frontend development and web technologies. I specialize in
                building responsive, user-centric web applications using React
                and JavaScript. My experience spans from HTML/CSS fundamentals
                to modern frontend frameworks, with growing interest in
                full-stack development and backend technologies.
              </p>
              <p>
                I'm committed to writing clean, maintainable code and following
                industry best practices. I thrive in collaborative environments,
                quickly adapt to new technologies, and am driven by the
                challenge of solving complex problems through elegant, efficient
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>TECHNOLOGIES</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>100%</h1>
            <p>DEDICATED</p>
          </div>
        </div>
      </div>
      <div id="skills" className="about">
        <div className="about-title">
          <h1>Technical Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="skills-all">
          <div className="about-skills" style={{ width: '100%' }}>
            <div className="skills-two-column">
              <div>
                <h3 className="skills-header">Technical Skills</h3>
                <div className="about-skill">
                  <p>HTML & CSS</p>
                  <div className="skill-bar" style={{ width: '80%' }}></div>
                </div>
                <div className="about-skill">
                  <p>REACT JS</p>
                  <div className="skill-bar" style={{ width: '70%' }}></div>
                </div>
                <div className="about-skill">
                  <p>JavaScript</p>
                  <div className="skill-bar" style={{ width: '50%' }}></div>
                </div>
                <div className="about-skill">
                  <p>Flutter</p>
                  <div className="skill-bar" style={{ width: '30%' }}></div>
                </div>
                <div className="about-skill">
                  <p>Python</p>
                  <div className="skill-bar" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <h3 className="skills-header">Tools & Platforms</h3>
                <div className="about-skill">
                  <p>My SQL</p>
                  <div className="skill-bar" style={{ width: '60%' }}></div>
                </div>
                <div className="about-skill">
                  <p>Firebase</p>
                  <div className="skill-bar" style={{ width: '50%' }}></div>
                </div>
                <div className="about-skill">
                  <p>VS Code</p>
                  <div className="skill-bar" style={{ width: '80%' }}></div>
                </div>
                <div className="about-skill">
                  <p>Github</p>
                  <div className="skill-bar" style={{ width: '40%' }}></div>
                </div>
                <div className="about-skill">
                  <p>Figma</p>
                  <div className="skill-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
