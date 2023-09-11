import React, { useState } from "react";

import GreenBtn from "../Green-Btn/Btn";
import linkdin from "../Home-Page/image/linkedin.svg";
import discord from "../Home-Page/image/discord.svg";
import logo from "../Home-Page/image/logo1.png";
import "./Footer.scss";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(email); // This will log the current state of the email input field
  };

  return (
    <div className="footer">
      <div className="first-footer">
        <img className="img" src={logo} alt="" height={60} width={60} />
        <h4>
          Data visualisation and stock insights have <br /> taken a back seat.
          We bring data back to <br /> being readable.
        </h4>
        <div className="footer-logo">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin" src={linkdin} alt="" />
          </a>
          <a
            href="https://www.discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="discord" src={discord} alt="" />
          </a>
        </div>
        <h6 className="first-footer-h6-1">
          © {"<year>"} Quantera AI. All rights reserved
        </h6>
        <h6 className="first-footer-h6-2">reserved</h6>
      </div>
      <div className="second-footer">
        <h4 className=" second-footer-h4">
          Receive a free premium report by signing up
        </h4>
        <div className="email-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <GreenBtn
            buttonText={"Get Premium Report"}
            onClick={handleButtonClick}
          />
        </div>
        <h6 className=" second-footer-h6">Explore app</h6>
        <h6 className=" second-footer-h6">Investors</h6>
        <h6 className=" second-footer-h6">Contact us</h6>
      </div>
    </div>
  );
}
