import { useState } from 'react';
import { FiCalendar, FiStar, FiSettings, FiMessageSquare } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item">
            <FiCalendar className="navi-icon" />
            {isExpanded && <span className="nav-text">Today</span>}
          </li>
          <li className="sidebar-item">
            <FiStar className="navi-icon" />
            {isExpanded && <span className="nav-text">Important</span>}
          </li>
          <li className="sidebar-item">
            <FiSettings className="navi-icon" />
            {isExpanded && <span className="nav-text">Settings</span>}
          </li>
          <li className="sidebar-item">
            <FiMessageSquare className="navi-icon" />
            {isExpanded && <span className="nav-text">Live Chat</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;