import React, { Component } from 'react'
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';

import './Navbar.css';

class Navbar extends Component {
  render(){
    return(
      <div className='navbar'>
        <h2>Viktor.</h2>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/service'>Service</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/resume'>Resume</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
        {/* <ul id='socials'>
          <li><a href='https://www.instagram.com/viktor.vanhulle/'><TiSocialInstagramCircular/></a></li>
          <li><a href='https://www.facebook.com/viktor.vanhulle'><RiFacebookBoxLine/></a></li>
          <li><a href='https://www.linkedin.com/in/viktor-van-hulle-8bbaab226/'><FiLinkedin/></a></li>
        </ul> */}
      </div>
    )
  }
}

export default Navbar