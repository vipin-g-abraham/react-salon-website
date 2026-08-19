import { Link } from "react-router";
import "./Header.css"
import WalkInsBanner from "./WalksInsBanner";
import { useState } from "react";
export default function Header() {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsHeaderOpen(!isHeaderOpen);
    }
    return (
        <>
            <div className="header">
                <div className="primary-header">
                    <div className="branding">
                        <Link to="/"><img src="/Supercuts.svg" /></Link>
                    </div>
                    <div className="nav-menu">
                        <span className='menu-link'>
                            <Link to="/">Home</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/about">About Us</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/services">Services</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/contact">Contact Us</Link>
                        </span>
                    </div>
                    <div className="header-buttons">
                        <button className="primary-button">Book now</button>
                        <button className="secondary-button">Sign in</button>
                    </div>
                </div>
                <div className="mobile-header">
                    <div className="branding">
                        <Link to="/"><img src="/Supercuts.svg" /></Link>
                    </div>
                    {isHeaderOpen && <div className="nav-menu">
                        <span className='menu-link'>
                            <Link to="/">Home</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/about">About Us</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/services">Services</Link>
                        </span>
                        <span className='menu-link'>
                            <Link to="/contact">Contact Us</Link>
                        </span>
                    </div>}
                    <div className="header-buttons">
                        <button className="primary-button">Book now</button>
                        <button className="secondary-button">Sign in</button>

                        {!isHeaderOpen ? (<img className="menu-icon" onClick={toggleMobileMenu} src={"/menu.svg"} fill="#000" />) :
                            (<img className="close-icon" onClick={toggleMobileMenu} src={"/close.svg"} fill="#000" />)}
                    </div>

                </div>

            </div>
            <WalkInsBanner /></>
    )
}