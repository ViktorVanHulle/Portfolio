import React, { Component } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul id="footer-socials">
          <li>
            <a href="https://www.instagram.com/viktor.vanhulle/">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/viktor.vanhulle">
              <ImFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/viktor-van-hulle-8bbaab226/">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
