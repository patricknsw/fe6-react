import React from 'react'
import logo from '../assets/logo.png'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import { useState } from 'react'

const Navbar = () => {

        const [isToggled, setToggle] = useState(false);
        const handleToggle = () => {
            setToggle(!isToggled);
        }
    return (
        <div className="navbar">
        <div className="container navbar-flex">
            
            <img src={logo} alt="logo" className="logo"/>
            
            {/* <!-- main menu --> */}
            <div className="main-menu">
                <PageLinks groupClass="main-menu-list" />

                <SocialLinks groupClass="nav-icons"  listItemClass="nav-icon"/>

                {/* <ul className="nav-icons">
                    <li><a href="#" className="nav-icon"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="nav-icon"><i className="fa-brands fa-threads"></i></a></li>
                    <li><a href="#" className="nav-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                </ul> */}
            </div>
    
            {/* <!-- mobile menu --> */}
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">

                    <button onClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    
                    <div className={isToggled ? "mobile-menu-items active" : "mobile-menu-items"}>

                    <PageLinks groupClass="mobile-menu-list" />
                
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}


export default Navbar