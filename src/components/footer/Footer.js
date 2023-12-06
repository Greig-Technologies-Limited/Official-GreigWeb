import React from 'react'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll';
// import MyLogo from '../../assets/10.png'
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import greig from '../../assets/Greig_Tech_Variation_B-removebg-edited.png'
import cisco from '../../assets/Cisco_Meraki_website.jpg'
import MyLogo from '../../assets/10.png'

// import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer">
        <div className="conOne">
          <div className="headingf">
            <div className="color"></div>
            <h1>G.T.L</h1>
          </div>
          <p>
          Greig Technologies Limited delivers a complete range of satellite communications solutions for the oil and gas industry – for the exploration and production sites.Our satellite services feature virtually worldwide coverage via Ku and C- Band options, enterprise class SLA’s with custom Quality of Service.
          </p>
        </div>
        <div className="conTwo">
          <h2>Useful Links</h2>
          <hr />
          <ul>
            <li><span> > </span><ScrollLink to='slider' smooth={true} duration={500}>Home</ScrollLink></li>
            <li><span> > </span><ScrollLink to='service' smooth={true} duration={500}>Service</ScrollLink></li>
            <li><span> > </span><ScrollLink to='about' smooth={true} duration={500}>About</ScrollLink></li>
            <li><span> > </span>Terms & Conditions</li>
            <li><span> > </span>Privacy</li>
          </ul>
        </div>
        <div className="conThree">
          <h2>About Us</h2>
          <hr />
          <p>10 Anuoluwapo Close off Opebi Road Ikeja Lagos.</p>
          <p>+234 803 265 2425</p>
          <p>info@greigtechnologies.com</p>

          <a href="/"><FiGithub size={20} /></a>
          <a href="/"><FaInstagram size={20} /></a>
          <a href="/"><RiFacebookBoxLine size={20} /></a>
          <a href="/"><CiLinkedin size={20} /></a>
          <a href="/"><FaXTwitter size={20} /></a>
        </div>
        <div className="conFour">
          <div className="partner">
            <img src={greig} alt="" />
            <img src={cisco} alt="" />
          </div>
        </div>
      </div>
      <hr className='line' />
      <div className="copyright">
        <p> @{new Date().getFullYear()} Shęriff & Cifra. All rights reserved.</p>
        <h3 className='mylogo'> <img src={MyLogo} style={{width: '30px'}} alt="" /> </h3>
      </div>
    </div>
  )
}

export default Footer