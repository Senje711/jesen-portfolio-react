import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Jesenhower A. Nachor,</span> frontend developer based in Philippines</h1>
        <p>I am a 3rd year BSIT pursuing to become a Frontend Developer and i want gain more knowledge in backend side</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero