import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/about_profile.png';
const About = () => {
  return (
    <>
      <div id="about" className="about">
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
                A passionate third-year Bachelor of Science in Information
                Technology (BSIT) student pursuing a career in front-end
                development, with a strong focus on creating clean,
                user-friendly, and visually appealing web designs while aspiring
                to become a cybersecurity professional dedicated to building
                secure and reliable digital solutions.
              </p>
              <p>
                My passion for front-end development lies in transforming ideas
                into functional and engaging digital experiences through
                thoughtful design, structured coding practices, and continuous
                learning in both web technologies and cybersecurity principles.
              </p>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>0</h1>
            <p>FRESH GRAD</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY PROFS</p>
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
                  <div className="skill-bar" style={{ width: '20%' }}></div>
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
