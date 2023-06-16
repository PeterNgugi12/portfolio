import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oq7prni', 'template_p3aq7hy', form.current, '2HMYb5JGmAuf7Y7cN')
    e.target.reset()
     };
    


  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

      <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdOutlineEmail className='.contact_option-icon'/>
          <h4>Email</h4>
          <h5>pngugi396@gmail.com</h5>
          <a href='mailto:pngugi396@gmail.com' target='_blank'>Send a Message</a>
          
        </article>
        <article className='contact_option'>
        <BsWhatsapp className='.contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+254 758276900</h5>
          <a href='https://api.whatsapp.com/send?phone+254758276900' target='_blank'>Send a Message</a>
          
        </article>
        
      </div>
       <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder=' Enter Your Email' required/>
      <textarea name='message' rows="?" placeholder='your Message' required></textarea>
      <button type='submit' className='btn btn-primary '>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact