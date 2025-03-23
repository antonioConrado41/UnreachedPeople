import Logo from '../assets/Joshua_Project_Logo.png'
import './Header.css'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <img className='logo' src={Logo} alt=''/>
        <a href='/'> Home </a>
        <a href='/maps'>Maps</a>
    </header>
  )
}


