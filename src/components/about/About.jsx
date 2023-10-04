import React from 'react'
import "./About.css";


  
import ME from '../../assets/me-about.png'
 import {FiAward} from "react-icons/fi"
 import {FiUsers} from "react-icons/fi"
 import {PiFolderSimplePlusLight} from "react-icons/pi"

  

function About() {
  return (


    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
                <img src={ME}  />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FiAward className='about_icon'/>
                <h5>Experience</h5>
                <small> 0 years working </small>
            </article>


            <article className='about_card'>
            <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small> 0+ worldwide </small>
            </article>


            <article className='about_card'>
            <PiFolderSimplePlusLight className='about_icon'/>
                <h5>Projects</h5>
                <small> 5+ Completed</small>
            </article>



          </div>

          <p>Welcome to my world of frontend development, where I bring digital ideas to life through captivating and interactive user experiences.
            <br />
          Hi, I'm <big>Rajit Kumar</big>, a creative frontend developer with a penchant for innovation and a keen eye for detail.With a strong foundation in HTML, CSS,  JavaScript and React,
            </p>
           

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About
