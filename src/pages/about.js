import React, { useState } from "react";
import './about.css'
import about from './about.jpeg'
import handleContact from "../handles/contactsubmit"

export default function About() {
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
};
const [formData, setFormData] = useState(initialFormData);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  const { firstName,lastName, email, mobile, message } = formData;

  setFormData(initialFormData);
  console.log(formData)
  handleContact(formData);
};

const handleCancel = () => {
  setFormData(initialFormData);
};

  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="imgContainer">
          <img className="mainImg" src={about} alt="Main visual" />

        </div>
        <div className="responsive-container-block textSide">
          <p className="text-blk heading">
            About Us
          </p>
          <p className="text-blk subHeading">
          Soccer Spirit is an innovative soccer league organizer dedicated to bringing the excitement and passion of soccer to communities everywhere. With a focus on organization and engagement, Soccer Spirit provides a comprehensive platform for managing soccer leagues, tournaments, and events of all sizes. From local youth leagues to adult recreational tournaments, Soccer Spirit caters to soccer enthusiasts of all ages and skill levels.
          </p>
 
      <div className="containercontact">
      <form className="contact" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="firstName"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="lastName"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="mobile"
                required
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            
          
              <div className="underline"></div>
              <label htmlFor="mobile">Mobile Number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                id="message"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
               
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Write your message</label>
            </div>
          </div>
          
            <button className="contactsubmitbutton"type="submit" value="submit">Submit</button>
            <br></br>
            <button className="submit-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          
          </form>
    
          </div>
    </div>
    </div>
    </div>


)

}
