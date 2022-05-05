import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.toggleIcon();
    this.setState({ clicked: !this.state.clicked });
  };

  toggleIcon() {
    if (document.getElementById("hamburger-icon").className !== "open") {
      document.getElementById("hamburger-icon").className += "open";
    } else {
      document.getElementById("hamburger-icon").className = "";
    }
  }

  render() {
    return (
      <div
        className={this.state.clicked ? "navbar active" : "navbar"}
        id="navbar"
      >
        <div id="hamburger-icon" onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>VVH</h2>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#about" onClick={this.handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={this.handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" onClick={this.handleClick}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={this.handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
