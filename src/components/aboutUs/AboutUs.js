import React from 'react';
import './AboutUs.css';
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";




const AboutUs = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <h1>About Us</h1>
            <hr />
            <p>
                Greig Technologies Limited delivers a complete range of satellite communications solutions for the oil and gas industry – for the exploration and production sites.Our satellite services feature virtually worldwide coverage via Ku and C- Band options, enterprise class SLA’s with custom Quality of Service.
            </p>
            <div className="aboutChildHolder">
                <div className="aboutChild">
                    <div className="childTop"></div>
                    <div className="childBottom">
                        <div className="iconHold">
                            <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                        </div>
                        <h4>Our Mission</h4>
                        <p>
                        We provide innovative business and telecom solutions through consulting, integration, enhancing performance, and meeting requirements with independent, value-added services for optimal results.
                        </p>
                    </div>
                </div>
                <div className="aboutChild">
                    <div className="childTop"></div>
                    <div className="childBottom">
                        <div className="iconHold">
                            <IoSunnySharp size={30} style={{ color: 'white' }} />
                        </div>
                        <h4>Our Vision</h4>
                        <p>
                            To Become The Leading Satellite Communication Solutions And Services Firm That Empowers Business In Sub-Saharan Africa To Meet And Exceed Their Clients' Expectations.
                        </p>
                    </div>
                </div>
                <div className="aboutChild">
                    <div className="childTop"></div>
                    <div className="childBottom">
                        <div className="iconHold">
                            <FaCalendarAlt size={30} style={{ color: 'white' }} />
                        </div>
                        <h4>Our Plan</h4>
                        <p>
                            To delivers global satellite solutions for oil and gas. Ku and C-Band options, enterprise SLA’s, and custom QoS ensure reliable communication tailored to your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs