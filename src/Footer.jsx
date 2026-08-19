import "./Footer.css"
import FooterMenu from "./FooterMenu";
import FooterNewsletterForm from "./FooterNewsletterForm";
const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-container-1">
                <FooterMenu />
                <FooterNewsletterForm />
            </div>
            <div id="copyright"><span>©2026 Supercuts®, a division of Regis Corporation</span></div>
        </div>
    );
}
export default Footer;