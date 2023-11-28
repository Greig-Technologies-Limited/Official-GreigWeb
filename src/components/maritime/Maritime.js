import React from 'react'
import './Maritime.css'
import Mari from '../../assets/maritime.jpeg'
import M2 from '../../assets/mari2.avif'

const Maritime = () => {
  return (
    <div className='mariT'>
      <div className="maricontainer">
        <div className="maricontent">
          <h1>Mari<span>time</span> </h1>
          <hr />
            <img src={M2} alt="" />
            
​
            <p>
            Experience unlimited usage and reliable Maritime VSAT internet with Greig Technologies Limited. Our High Speed VSAT service, available in Ku-band and Thor7 Ka-band, is backed by excellent NOC and remote support. Provides secure Oil & Gas satellite communications – from point-to-point SCPC links to Mesh networks delivering single hop access between multiple remote sites and Data Backhaul Solutions. High-speed Internet access is provided via our secure teleport facilities in Europe and United States. Greig Technologies satellite solutions are designed to support data and real-time voice and HD video communications with guaranteed quality on 24/7 basis.
            </p>
            <div className="sec-div">
            <img src={Mari} alt="" />
            <div className='below'>
            <div className="belowLeft">
            <p>
              We deliver a fully managed solution that includes design, implementation and on-site maintenance and support services. In addition to satellite connectivity, we provide value-add services including WiFi networking, telephony, bandwidth management and optimization.

              Our Oil & Gas VSAT connectivity solutions are deployed with maritime stabilized antennae to support drilling rigs and ships and production locations, such as FPSO, supply and support vessels, semi-submersible rigs to maintain reliable communication regardless  off offshore conditions.
              </p>
            </div>
            <div className="belowRight">
              <h1>Key Benefits Oneweb</h1>
              <ul>
                <li><span style={{marginRight:'.7rem'}}> > </span> Flexible contracts for changing requirements</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Track operational costs in real-time</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Be in control with remote monitoring</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Run applications out at sea like you would on land</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Run system updates remotely</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Get in touch 24/7 with our service engineers in case of unforeseen maintenance</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> World-wide onboard support by our HUET and BOSIET certified engineers</li>
              </ul>
            </div>
          </div>
             
              
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Maritime