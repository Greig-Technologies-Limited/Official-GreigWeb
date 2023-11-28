import React from 'react';
import { AiFillThunderbolt, AiFillTool } from 'react-icons/ai';
import { GiBinoculars } from 'react-icons/gi';
import './Major.css';

const Major = () => {
  return (
    <div className='major'>
        <div className="majorContainer">
            <div className="childHolder">
                <div className="child">
                    <AiFillThunderbolt size={40} style={{ color: 'green' }} />
                    <h1>Maritime</h1>
                    <p>
                        We provide secure Oil &Gas
                        satellite communications – from
                        point-to-point SCPC links to Mesh
                        networks delivering single-hop
                        access between multiple remote
                        sites.
                    </p>
                </div>
                <div className="child">
                    <AiFillTool size={40} style={{ color: 'green' }} />
                    <h1>Satellite Equipment</h1>
                    <p>
                        We currently provide satellite
                        communications technology to
                        onshore and offshore sites and is
                        propelling itself as the leading
                        provider of premium networks.
                    </p>
                </div>
                <div className="child">
                    <GiBinoculars size={40} style={{ color: 'green' }} />
                    <h1>Navigation & Security</h1>
                    <p>
                        Our ERP systems can collect and
                        send more information between
                        ship and shore in real-time to
                        provide valuable insight into
                        operations.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Major