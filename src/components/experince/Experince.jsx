import React from 'react'
import './experince.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experince = () => {
  return (
    <section id='experince'>
    <h5>The Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience_container'>
    <div className='experience_frontend'>
        <h3>Frontend Development</h3>
       <div className='experience_content'>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Bootstramp</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>React js</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Laravel</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
       </div> 
    </div>
    <div className='experience_backend'>
    <h3>Backend Development</h3>
       <div className='experience_content'>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Node js</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Mysql</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
          </div>
         </article>
         
       </div> 
    </div>

    </div>
    </section>
  )
}

export default Experince