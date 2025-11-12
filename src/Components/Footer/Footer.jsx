import React from 'react'
import './Footer.css'
import footer_Logo from '../../assets/footer_Logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
                <img src={footer_Logo} alt="" className="footer-logo" />
                <p>I am 3rd year BSIT pursuing a frontend developer from, PH with a experience of projects in school like designing in figma and coding for front end side.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Jesenhower Nachor. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policies</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer