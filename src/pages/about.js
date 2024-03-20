import React from 'react';
import './about.css'
import about from './about.jpeg'
import logo from './logo.png';
export default function About() {
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
        <div className="text">
          Contact us Form
        </div>
        <form className="contact" >
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="firstName"
                required
                name="firstName"
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
              ></textarea>
              
               
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Write your message</label>
            </div>
            <button className="contactsubmitbutton">Submit</button>
          </div>
          </form>
    
    </div>
</div>
</div>
</div>
)

}

