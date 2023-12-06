import React from 'react'
import './Contact.css'
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactContainer">
            <h1>Contact Us</h1>
            <hr />
            <div className="contactDetails">
                <div className="options">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                    </div>
                    <h4>Call Us</h4>
                    <p>+234 803 265 2425</p>
                </div>
                <div className="options">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                    </div>
                    <h4>Email</h4>
                    <p>info@greigtechnologies.com</p>
                </div>
                <div className="options">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                    </div>
                    <h4>Locate Us</h4>
                    <p>10 Anuoluwapo Close off Opebi Road Ikeja Lagos.</p>
                </div>
            </div>
            <form>
                <div className="firstRow">
                    <input type="text"  placeholder="Name" required></input>

                    <input type="text"  placeholder="Email" required></input>
                </div>

                <div className="firstRow">
                    <input type="tel" placeholder="Phone Number" required></input>

                    <input type="text" className="country" placeholder="country"></input>
                </div>
            
                <textarea className="request" placeholder="Please Describe Your Request?" required ></textarea>
            
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact