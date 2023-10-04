import React from 'react'
import "./Header.css"
import CTA from './CTA'




import ME from "../../assets/me.jpg"

import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header> 

<div className='container header_container'>

  
  <h5> Hello I'm</h5>
      <h1>Rajit Kumar</h1>
      <h5 className='text-light'>Frontent Web Developer</h5>   
      <CTA/>   
      <HeaderSocials/>    
     
      
              
      <div className="me">
        <img  src={ME} alt=""/>
      </div> 
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>

 


    </header>
   
  )
}

export default Header
