import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoChevronBackSharp } from "react-icons/io5";
import './Navbar.css';
import Logo from '../../assets/Greig_Tech_Variation_B-removebg-edited.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  // eslint-disable-next-line
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <div className='logoImg'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          {isHomePage ? (
            <>
              <li>
                <ScrollLink to='slider' smooth={true} duration={500} onClick={handleNav}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to='about' smooth={true} duration={500} onClick={handleNav}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to='service' smooth={true} duration={500} onClick={handleNav}>
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to='contact' smooth={true} duration={500} onClick={handleNav}>
                  Contact
                </ScrollLink>
              </li>
              {/* <li>
                <RouterLink to='/IntranetPage' smooth={true} duration={500} onClick={handleNav}>
                  Intranet
                </RouterLink>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <RouterLink to='/'><IoChevronBackSharp size={40} style={{ color: 'green' }} /></RouterLink>
              </li>
              {/* <li>
                <RouterLink to='/services' onClick={scrollToTop}>
                  Services
                </RouterLink>
              </li> */}
            </>
          )}
        </ul>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? <FaBars className='icon' /> : <FaTimes className='icon' />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
