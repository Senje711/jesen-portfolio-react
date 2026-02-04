import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Technical Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-container">
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>REACT JS</li>
            <li>JavaScript</li>
            <li>Flutter</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Tools & Platforms</h3>
          <ul className="skills-list">
            <li>My SQL</li>
            <li>Firebase</li>
            <li>VS Code</li>
            <li>Github</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
