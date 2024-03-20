import React from "react";

export default function Forgetpw() {
    return (
        <div className="container-register">
        <form id="registrationForm">
            <div className="form-group">
                <label htmlFor="fullName">Email:</label>
                <input type="text" id="fullName" name="fullName" required />
            </div>
            

            <button type="submit" className="registerButton">Submit</button>
        </form>
    </div>
    )
}