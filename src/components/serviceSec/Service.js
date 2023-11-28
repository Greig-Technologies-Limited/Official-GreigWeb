import React from 'react'
import {Link} from 'react-router-dom'
import './Service.css'
import { IoBoatSharp } from 'react-icons/io5';

const Service = () => {
  return (
    <div className='service'>
        <div className="serviceContainer">
            <h1>Services</h1>
            <hr />
            <p>
            Empower your connectivity with our unparalleled service, delivering seamless solutions that cater to your needs, ensuring reliability, speed, and a superior user experience.
            </p>
            <div className="serviceChildHolder">
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='/OnewebPage'><h4>Oneweb</h4></Link>
                  <p>
                  With OneWeb’s we bring fibre-like speeds to maritime connectivity. With OneWeb’s low latency, connection at....
                  </p>
                </div>
              </div>
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='/StarlinkPage'><h4>Starlink</h4></Link>
                  <p>
                  Starlink Maritime is a satellite communication service specifically designed for maritime applications. It offers high-speed....
                  </p>
                </div>
              </div>
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='MaritimePage'><h4>Maritime VSAT</h4></Link>
                  <p>
                  Experience unlimited usage and reliable Maritime VSAT internet with Castor Marine. Our High Speed VSAT....
                  </p>
                </div>
              </div>
            </div>
            <div className="serviceChildHolder">
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='/IridiumPage'><h4>Iridium</h4></Link>
                  <p>
                  With Iridium Certus onboard, your vessels benefit from oceanwide L-based connectivity. It is designed for...
                  </p>
                </div>
              </div>
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='/FleetBBPage'><h4>Fleet Broadband</h4></Link>
                  <p>
                  ou want your connectivity to be seamless and flawless. Inmarsat is a backup service for maritime VSAT services that is....
                  </p>
                </div>
              </div>
              <div className="serviceChild">
                <IoBoatSharp size={40} style={{ color: 'green' }} />
                <div className="serviceChildContent">
                  <Link to='/ItconsultPage'><h4>Value Added Services</h4></Link>
                  <p>
                  In addition to managing your (hybrid) networks, Greig Technologies Limited can deliver your fleet’s onboard IT infrastructure. Let’s be honest: managing....
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service