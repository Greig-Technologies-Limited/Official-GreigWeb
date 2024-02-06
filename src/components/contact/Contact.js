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
                    <p>+234 814 7024 765</p>
                    <p>+234 020 1634 0450</p>
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
            <form action="https://formspree.io/f/xqkraplo" method="POST">
          <div className='firstRow'>
            <input type='text' placeholder='Name' name='name' required></input>
            <input type='text' placeholder='Email' name='_replyto' required></input>
          </div>
          <div className='firstRow'>
            <input type='tel' placeholder='Phone Number' name='phone' required></input>
            <input type='text' className='country' placeholder='Country' name='country'></input>
          </div>
          <textarea className='request' placeholder='Please Describe Your Request?' name='message' required></textarea>
          <button type='submit'>Send</button>
        </form>

        </div>
    </div>
  )
}

export default Contact