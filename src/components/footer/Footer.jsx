import React from 'react'
import './footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' classname="footer_logo">PETER</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experince'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
       <a href='https://instagram.com'><FaInstagramSquare/></a>
       <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>
      <div className='footer_copyright'>
        <small>Ecopy: Peter Ngugi portfolio, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer