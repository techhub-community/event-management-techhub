import { useState } from "react";
import Sidebar from "./Sidebar";
function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    
    <div className='navbar'>
        <div className="navlogo"></div>
       
        <div className="app-container">
      <button className="menubutton"onClick={handleMenuClick}>
      
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="main-content">
       
      </div>
    </div>
    </div>
  )
}

export default Nav