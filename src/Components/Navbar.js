import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../Components/Styles/Navbar.css'
import { useState } from 'react'

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to='/' className='title'>Fun & Feasts </Link>
        <div className='Menu' onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
        <li>
               <NavLink to='/'>Home</NavLink>
            </li>
            <li>
               <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to ='/signup'>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}
