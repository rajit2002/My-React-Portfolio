import React,{useRef} from 'react'
import './Contact.css' 
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import emailjs from '@emailjs/browser';






function Contact() {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kwr8wpr', 'template_t5ilbjj', form.current, 'BwVcIZuHIX5gGk4vE')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent")
       e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section id='contact'>
       <h5>Get in touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
        <div className="contact_options">

  <article className="contact_option">
    <HiOutlineMail className='contact_option-icon '/>
    <h4>Email</h4>
    <h5>rajitgautam2002@gmail.com</h5>


  
    <a href="mailto:rajitgautam2002@gmail.com"  >Send a message</a>

  </article>
  <article className="contact_option">


    <BsMessenger  className='contact_option-icon '/>
    <h4>Messenger</h4>
    <h5>Rajit kumar</h5>
    <a href="https://www.facebook.com/profile.php?id=100075066127886" >Send a message</a>
  </article>
  <article className="contact_option">
    <HiOutlineMail className='contact_option-icon '/>
    <h4>WhatsApp</h4>
    <h5>+91 9170332230</h5>
    <a href="https://api.whatsapp.com/send>?phone+919170332230">Send a message</a>
  </article>


  
        </div>
{/* End of contact option */}
        <form  onSubmit={sendEmail}  ref={form}  action="">
          <input type="text"   name='your_name' placeholder='Your full Name'  required/>  
          <input type="text"   name='your_email' placeholder='Your Email' required/>

          <textarea name="message"  rows="7"  placeholder='"Your Message' required
           ></textarea>
           <button type='submit' value= "send" className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact
