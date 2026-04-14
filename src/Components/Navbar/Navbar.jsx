import React, { useState, useRef } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.left = '-45px';
    setMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.left = '-100vw';
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="" className="nav-logo" />
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt=""
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu('home');
                closeMenu();
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="" /> : <></>}{' '}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu('about');
                closeMenu();
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p
              onClick={() => {
                setMenu('skills');
                closeMenu();
              }}
            >
              Technical Skills
            </p>
          </AnchorLink>
          {menu === 'skills' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => {
                setMenu('services');
                closeMenu();
              }}
            >
              My Projects
            </p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setMenu('work');
                closeMenu();
              }}
            >
              Design
            </p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setMenu('contact');
                closeMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-right">
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>{' '}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
