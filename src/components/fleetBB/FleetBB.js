import React from 'react'
import './FleetBB.css'
import FB from '../../assets/fleetB.jpeg'

const FleetBB = () => {
  return (
    <div className='fleetB'>
      <div className="fleetcontainer">
        <div className="fleetcontent">
          <h1>Fleet <span>Broadband</span> </h1>
          <hr />
          
​
          <img src={FB} alt="" />
​
<div className='below'>
            <div className="belowLeft">
              <p>
              You want your connectivity to be seamless and flawless. Inmarsat is a backup service for maritime VSAT services that is both globally available and dependable. Our FleetBroadband (FB) package provides a reliable L-band connection, enabling internet connectivity in areas not reached by Ku Band, crew communication via email, access to weather information, reporting capabilities and more.

              Fleet Broadband enables users to connect via their laptop to their corporate network at speeds up to half a megabit per second. You can remotely access all your desktop applications including e-mail and the Internet via a secure virtual private network (VPN) connection. You can also make telephone calls at the same time. The FBB service is accessed via a small, lightweight satellite terminal -, quick to set up and simple to use, its superior performance, portability and ease of use make it a compelling proposition for many vessels sailing in locations with unreliable or non-existent terrestrial telecoms networks.


              </p>
            </div>
            <div className="belowRight">
              <h1>Key Benefits Oneweb</h1>
              <ul>
                <li><span style={{marginRight:'.7rem'}}> > </span> Always-on service providing internet access</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Always-on service providing communication capabilitie</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Direct landline high-quality voice service</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> SMS and GSM calls</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> SMS and GSM calls</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Streaming function (FB250 and FB500)</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Fax services for reporting</li>
              </ul>
            </div>
          </div>
​
​
        </div>
​
    </div>
      
    </div>
  )
}

export default FleetBB