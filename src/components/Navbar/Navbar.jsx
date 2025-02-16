import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import logo from '../../assets/law.png';
import profile from '../../assets/profile.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold text-yellow-700">NyayBot</h1></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-2xl text-gray-800">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <Link to="/api/conversation" className="hover:text-yellow-600">Chatbot</Link>
          <Link to="/api/livechat" className="hover:text-yellow-600">Appointment</Link>
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center space-y-4 text-lg text-gray-800">
          <Link to="/" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/api/conversation" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>Chatbot</Link>
          <Link to="/api/livechat" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>Appointment</Link>
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
