import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
    <a href='https://github.com' target='_blank'><AiFillGithub/></a>
    <a href='https://instagram.com' target='_blank'><FaInstagramSquare/></a>

    </div>
  )
}

export default HeaderSocials