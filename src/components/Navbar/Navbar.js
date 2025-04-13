import { FiSearch, FiHome } from 'react-icons/fi'; // Removed FiUser since we're using an image
import { useState } from 'react';
import './Navbar.css';
import profilePhoto from './profile.jpg'; // Import your profile image

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="nav-button">
          <FiHome className="nav-icon" />
        </button>
        
        <div className="nav-links">
        <a href="/about" className="nav-link">Dashboard</a>
          <a href="/about" className="nav-link">About Us</a>
          <a href="/contact" className="nav-link">Contact Us</a>
          <a href="/help" className="nav-link">Help</a>
        </div>
      </div>
      
      <form className="search-form" onSubmit={handleSearch}>
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      
      <div className="navbar-right">
        <div 
          className="profile-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="profile-button">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="profile-photo"
            />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">My Profile</div>
              <div className="dropdown-item">Explore Premium</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Appearance</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;