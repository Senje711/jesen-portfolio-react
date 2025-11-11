import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import about_profile from '../../Assets/about_profile.png'
const About = () => {
  return (
    <div id='about' className='about'>
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
                <p>A passionate third-year BSIT student pursuing a career in front-end development, focused on creating clean and user-friendly web designs.</p>
                <p>My passion for front-end development goes beyond imagination its about bringing ideas to life through clean design and meaningful user experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
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
  )
}

export default About