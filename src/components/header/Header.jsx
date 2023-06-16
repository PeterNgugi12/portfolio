import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me4.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
        <h5>Hello I'M</h5> 
        <h1>Peter Ngugi</h1>
        <h5 className='text-light'>
            Fullstack Developer
        </h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
            <img src={ME} alt="me2"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header