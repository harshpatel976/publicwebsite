import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo1.png'
import './Header.css'

const Header = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="epotimecircuit" className='logo'/>
    </div>
    <div className="navbar-right">
      <ul>
      
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Courses</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/placement">Placement</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className='demo-button'>
    <button className="demo-button-class">Book Demo Class</button>
    </div>
  </nav>
    </div>
  )
}

export default Header
