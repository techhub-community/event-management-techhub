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
      <h2>Sidebar</h2>
      <button onClick={handleClick}>Close</button>
      {/* Add your sidebar content here */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
