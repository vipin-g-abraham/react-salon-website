import { useState } from "react"
import "./Contact.css"
export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const handleChange = (e) => {
        let { name: fieldName, value: fieldValue } = e.target;
        setFormData({ ...formData, [fieldName]: fieldValue });
        setErrors({ ...errors, [fieldName]: validateAndSetErrors(fieldName, fieldValue) });
    }

    const validateAndSetErrors = (fieldName, fieldValue) => {
        switch (fieldName) {
            case "email": if (!validateEmail(fieldValue)) {
                return "Please enter a valid email"
            }
        }
        return "";
    }

    return <div className="contact-page">
        <div className="banner">
            <img src="/contact-landing-page-banner.jpg" />
        </div>
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label>First Name*</label>
                    <input required type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div>
                    <label>Email*</label>
                    <input required type="text" name="email" onChange={handleChange} value={formData.email} />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} />
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                </div>
                <div>
                    <label>Message*</label>
                    <textarea required name="message" onChange={handleChange} value={formData.message} />
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button className="primary-button" type="submit">Submit</button>
            </form>
        </div>
    </div>

}