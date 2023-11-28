import React from 'react'
import './Iridium.css'
import Irid from '../../assets/iridium.webp'


const Iridium = () => {
  return (
    <div className='iridium'>
      <div className="iridiumcontainer">
        <div className="iridiumcontent">
          <h1>Iridi<span>um</span></h1>
          <hr />
          
​
          <img src={Irid} alt="" />
​
<div className='below'>
            <div className="belowLeft">
              <p>
              With Iridium Certus onboard, your vessels benefit from oceanwide L-based connectivity. It is designed for reliable and high-speed connectivity for a wide range of maritime, IoT and other applications. Integration with your existing maritime IT infrastructure is easy, even seamless and it combines lightweight solutions with the speed and power of a strong satellite network.

              Iridium Certus offers connectivity independent of weather or              location. And did you know it also brings you reliable voice              connectivity for ship-to-shore or ship-to-ship communication?             Navigation, data collection, even regulatory compliance with            (safety-related) communications mandated by regulatory bodies; it           all becomes easier with Iridium Certus.


              </p>
            </div>
            <div className="belowRight">
              <h1>Key Benefits Oneweb</h1>
              <ul>
                <li><span style={{marginRight:'.7rem'}}> > </span> Ideal for ships of all sizes and data requirements</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Stand-alone or in combination with VSAT</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Suited for use in all weather conditions</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Supports bandwidth-intensive applications</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Reliable & resilient Multi-service platform</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> High definition voice lines</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> High speed IP data and streaming</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Optimal coverage to even the most remote locations on Earth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Iridium