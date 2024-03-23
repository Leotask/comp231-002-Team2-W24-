import React, { useState } from "react";
import "./register.css";
import handleRegistration from "../handles/registersubmit";

export default function Register() {
    const initialFormData = {
        fullName: "",
        email: "",
        phone: "",
        registrationType: "league",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await handleRegistration(formData);
            alert("Registration successful!");
            setFormData(initialFormData); // Reset form data
        } catch (error) {
            alert("Registration failed. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="container-register">
            <h2>Register for League or Tournament</h2>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="registrationType">Registration Type:</label>
                    <select
                        id="registrationType"
                        name="registrationType"
                        value={formData.registrationType}
                        onChange={handleChange}
                    >
                        <option value="league">League</option>
                        <option value="tournament">Tournament</option>
                    </select>
                </div>
                <button type="submit" className="registerButton">Submit</button>
            </form>
        </div>
    );
}

