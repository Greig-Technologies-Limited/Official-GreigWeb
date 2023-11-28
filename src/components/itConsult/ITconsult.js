import React from 'react'
import './ITconsult.css'
import IT from '../../assets/consultant.webp'
import Img from '../../assets/itC.jpeg'

const ITconsult = () => {
  return (
    <div className='itC'>
      <div className="itcontainer">
        <div className="itcontent">
          <h1>IT <span>Consultant</span></h1>
          <hr />
          <p>
          We Go Above And Beyond For You
When you’re working in the world’s most isolated locations, connectivity becomes important. That is why you need a highly reliable IT SOLUTION technology and service providers with a support team that you can trust to respond quickly and efficiently.
Our world-class team of people includes more highly trained capable employees, a 24/7 service desk and a global network of service partners, meaning we can ensure better local customer care with a foundation of technical excellence and cultural understanding.

All your business applications and software will be safe, managed and monitored 24/7. If needed, we also deliver the hardware; the networking equipment to hook up each and every tool, application or piece of equipment. Wherever you are at sea, we keep you up, running and connected.
          </p>
​
          <img src={IT} alt="" />
​
<div className='below'>
            <div className="belowLeft">
              <p>
              Our Network Operation Center provide you with 1st line expert support. Greig Technologies experienced team of network engineers has the ability to accompany you through troubleshooting, performance monitoring, training and expert consultancy.


              </p>
            </div>
            <div className="belowRight">
              <h1>Key Benefits Oneweb</h1>
              <ul>
                <li><span style={{marginRight:'.7rem'}}> > </span> Troubleshooting</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Resolution Of Complex Incidents</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Problem Management</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Change Management</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Training</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Hands-On Demonstrations</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Applications Testing</li>
                <li><span style={{marginRight:'.7rem'}}> > </span> Coordination With Our 3rd Line Engineering Team,
Suppliers And Manufacturers If Needed</li>
              </ul>
            </div>
          </div>
​
          <img src={Img} alt="" />
​
          <p>
          <p>
          Our Software Engineering Operation provides 1st line expert websites and web app development and support. Greig Technologies Software Engineering practice help extended clients in building best minimal web application in promoting there services/businesses online  by utilizing the power of one of the most secured technologies ensuring maximum security, we also offer maintenance services for our clients product if requested.
          </p>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default ITconsult