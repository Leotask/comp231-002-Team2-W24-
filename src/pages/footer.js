import React from "react";
import emoji from "react-easy-emoji";


export default function Footer() {
  return (
      <div className="footer-div">
        <p >
          {emoji("Made with ❤️ by Team 2")}
        </p>
        <p>
          COMP 231- Software Development Project
        </p>
      </div>

  );
}
