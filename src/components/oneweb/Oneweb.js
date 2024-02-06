import React from 'react'
import './Oneweb.css'
import One from '../../assets/one.jpeg'

const Oneweb = () => {
  return (
    <div className='oneWac'>
      <div className="oneWaccontainer">
        <div className="oneWacContent">
          <h1>One<span>Web</span></h1>
          <hr />
          <p>
          With OneWeb we bring fibre-like speeds to maritime connectivity. With OneWeb low latency, connection at sea is every bit as fast, flexible and secure as on land. Information becomes available in real-time supporting performance monitoring tracking and much more. In Greig Technologies Limited, OneWeb stands for improved efficiency, sustainability and profitability.
          </p>
          <img src={One} alt="" />

          <div className='below'>
            <div className="belowLeft">
              <p>
                OneWeb works with partners to extend network footprints outwards to communities in places which, for reasons to do with distance, topography, or population density, would otherwise remain unconnected (at least for the foreseeable future). Outside of maritime, aviation, and the logistics market, the highest adopters of satellite connectivity as a primary solution include public sector agencies, manufacturing groups, and healthcare facilities. National level coverage is a common requirement. Enterprise verticals are staking their interests too, with utility companies leading the way owing to their need for IoT connectivity in off-grid areas.
              </p>
            </div>
            <div className="belowRight">
              <h1>Key Benefits Oneweb</h1>
              <ul>
                <li><span style={{marginRight:'.7rem'}}> > </span> Improves crew scheduling</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Support remote operations</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Real-time data and streaming</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Improved access to performance data</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Supports environmental impact monitoring</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Unrivalled onboard connectivity experience</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Offshore and shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Oneweb