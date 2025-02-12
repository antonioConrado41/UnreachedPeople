import Logo from '../assets/language.png'
import './Header.css'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <img className='logo' src={Logo} alt=''/>
        <a href='/'> Home </a>
    </header>
  )
}


