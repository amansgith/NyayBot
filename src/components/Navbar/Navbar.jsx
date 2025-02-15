import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between text-2xl p-4 shadow-lg'>
            <div className="brand flex gap-2">
                <img src="src\assets\law.png" alt="Logo" />
                <h1 className="brand-name text-3xl">NyayBot</h1>
            </div>
            <div className="nav-items flex gap-5 text-xl">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/conversation" className="nav-item">Chatbot</Link>
                <Link to="/signup" className="nav-item">Signup</Link>
                <img src="src\assets\profile.png" alt="profile" />
            </div>
        </nav>
    </>
  )
}

export default Navbar