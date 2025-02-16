import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/law.png';
import profile from '../../assets/profile.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='sticky top-0 z-1 flex justify-between text-2xl p-6 pl-8 pr-8'>
            <div className="brand flex gap-2">
                <img src={logo} alt="Logo" />
                <h1 className="brand-name text-3xl">NyayBot</h1>
            </div>
            <div className="nav-items flex gap-5 text-1xl justify-center">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/conversation" className="nav-item">Chatbot</Link>
                <Link to="/signup" className="nav-item">Appointment</Link>
                <img src={profile} alt="profile" />
            </div>
        </nav>
    </>
  )
}

export default Navbar