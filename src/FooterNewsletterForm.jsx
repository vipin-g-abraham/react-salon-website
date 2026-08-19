import { useState } from "react";
import "./FooterNewsletterForm.css"
const FooterNewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");


    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
    }
    const handleChange = (e) => {
        let newValue = e.target.value;
        setEmail(newValue);
        if (error) setError("");
    }
    return (
        <div className="footer-newsletter">
            <p>Be the first to hear about special offers and the latest style trends.</p>

            <form className="footer-newsletter-form" onSubmit={handleSubmit}>
                <div>
                    <input required name="email" type="text" value={email} onChange={handleChange} placeholder="Email Address" />
                    {error && <div className="error-message">{error}</div>}
                </div>
                <button className="primary-button-dark-bg" type="submit">Sign up</button>

            </form>
        </div>
    );
}
export default FooterNewsletterForm;;