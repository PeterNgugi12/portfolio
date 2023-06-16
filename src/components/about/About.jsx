import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <img src={ME} alt='About Image'></img>
        </div>
        <div className='about_content'>
           <div className='about_cards'>
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>
            <article className='about_card'>
            <FiUser className='about_icon'/>
            <h5>Client</h5>
            <small>200+ WorldWide </small>
            </article>
            <article className='about_card'>
            <VscFolder className='about_icon'/>
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
            </article>
           </div>
           <p>
           I'M a Full Stack Developer who has expertise in both front-end and back-end technologies and I'M able to develop web applications from start to end.
           <br></br>

Front-end development involves building the user interface of web applications using technologies such as HTML, CSS, and JavaScript, as well as modern front-end frameworks like Reactjs or Angular.

Back-end development involves creating the server-side application that supports the front-end, using programming languages like Python, Java, or Node.js, as well as back-end frameworks like Django or Spring. This includes creating the logic to handle user requests, interacting with databases, and managing server-side processes.

           </p>
           <a href='#contact' className='btn btn-primary'> Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About