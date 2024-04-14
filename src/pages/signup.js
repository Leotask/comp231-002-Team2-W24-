import React from "react";
import "./register.css"; // Assuming your CSS file is in the same directory

export default function Register() {
    return (
        <div className="container-register">
            <h2>Member Registration</h2>
            <form id="registrationForm">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
    <label htmlFor="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  />
</div>

                <button type="submit" className="registerButton">Submit</button>
            </form>
        </div>
    );
}