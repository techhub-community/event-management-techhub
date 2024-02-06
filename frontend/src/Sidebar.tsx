// Sidebar.tsx

import React from 'react';
 // Import sidebar styles if you have a separate CSS file

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidenav'>
      <h2>Menu</h2>
      <button className="navmenubutton"onClick={handleClick}></button>
      </div>
      <ul>
      <div className="navitem">
            <span className="navspan">Home</span>
            <span className="navspan">About</span>
            <span className="navspan">Contact</span>
            <span className="navspan">Events</span>
            <span className="navspan">FAQ</span>
        </div>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
