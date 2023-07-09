import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from "../../constants/images"
import './Navbar.css'
const Nav = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='app-navbar'>
            <div className='app-navbar-logo'>
                <img src={images.gericht} alt="" />
            </div>
            <ul className='app-navbar-links'>

                <li className='p-opensans'><a href="">Home</a></li>
                <li className='p-opensans'><a href="">About Us</a></li>
                <li className='p-opensans'><a href="">Menu</a></li>
                <li className='p-opensans'> <a href="">Awards</a></li>
                <li className='p-opensans'><a href="">Contact</a></li>
            </ul>
            <div className='app-navbar-login'>
                <a href="login" className='p-opensans'>Login / Register</a>
                <a href="/" className='p-opensans'>Book Table </a>
            </div>
            <div className="app-navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
                        <ul className="app-navbar-smallscreen-links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav