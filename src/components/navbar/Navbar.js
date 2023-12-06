import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo from '../../assets/Greig_Tech_Variation_B-removebg-edited.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // eslint-disable-next-line
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <div className='logoImg'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <ScrollLink
              to='slider'
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='about'
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='service'
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? <FaBars className='icon' /> : <FaTimes className='icon' />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
