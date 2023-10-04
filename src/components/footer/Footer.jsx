import React from 'react'
import "./Footer.css"
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";

function Footer() {
  return (      
    <footer>
      <a href="#" className='footer_logo'>Frontend Developer</a>



      <ul className='permalinks'> 
      <li> 
        <a href="#Home">Home</a>
      </li>
      <li> 
        <a href="#about">About</a>
      </li>
      <li> 
        <a href="#experience">Experience</a>
      </li>
      <li> 
        <a href="#services">Services</a>
      </li>
      <li> 
        <a href="#portfolio"> Portfolio </a>
      </li>
      <li> 
        <a href="#testimonials">Testimonials</a>
      </li>
      <li> 
         <a href="#contact">Contact</a>
      </li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><AiOutlineWhatsApp/> </a>
        <a href="https://instagram.com"> <BsInstagram/> </a>
        <a href="https://twitter.com">  <AiFillTwitterCircle/></a>
      </div>

      <div className="footer_copyright">
        <small> &copy;2023 Rajit kumar. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer
