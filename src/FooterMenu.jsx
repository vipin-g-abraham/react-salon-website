import { Link } from "react-router";
import "./FooterMenu.css"
const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <div className='menu-link'>
                <Link to="/">Home</Link>
            </div>
            <div className='menu-link'>
                <Link to="/about">About Us</Link>
            </div>
            <div className='menu-link'>
                <Link to="/services">Services</Link>
            </div>
            <div className='menu-link'>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>

    );
}
export default FooterMenu;