import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import Logo from "../../assets/Greig_Tech_Variation_B-removebg-edited.png"



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                {/* <SiDatabricks className='icon' />
                <h1>Logo</h1> */}
                <div className="logoImg">
                    <img src={Logo} alt="" />
                </div>
                {/* <img src="../../assets/logo.jpg" alt="" /> */}
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link >Services</Link></li>
                <li><Link >About</Link></li>
                <li><Link >Contact</Link></li>
                {/* <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                <button>Sign in</button> */}
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
            </div>
        </div>
        
        
    </div>
  )
}

export default Navbar