import React, { Component } from 'react'

import './Navbar.css';

class Navbar extends Component {
  render(){
    return(
      <div className='navbar'>
        <h2>Viktor.</h2>
        <ul>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar