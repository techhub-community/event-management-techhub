import React, { FunctionComponent } from "react";
import codeshackLong from "../assets/image-2@2x.png";
import "./FrameA.css";

const FrameA: FunctionComponent = () => {
  return (
    <div className="frame-container">
      <div className="image-container">
        <img className="codeshack-image" alt="" src={codeshackLong} />
      </div>

      <div className="content-frame">
        <h1 className="greeting">Welcome To EMS</h1>
        
        <h3 className="description">
          <span>{`Manage upcoming `}</span>
          <span className="events">events</span>
          <span>{`, manage your digital `}</span>
          <span className="attendance">attendance</span>
          <span>{`, collect awesome `}</span>
          <span className="swags">swags</span>
          <span> all digitally at one place.</span>
        </h3>
      </div>

      <div className="navigation-frame">

        <div className="email-container">
        <span >Email:  </span>
          <a href="malto:codeshackcommunity@gmail.com"><span className="codeshack-email" >
            codeshackcommunity@gmail.com</span></a>
        </div>

        <div className="menu-items">
          <a href="/#home"><span className="menu-item FrameA-link"> Home </span></a> 
          <a href="/#faq"><span className="menu-item FrameA-link"> FAQ </span></a>
          <a href='/#about-us'><span className="menu-item FrameA-link"> About Us </span></a>
        </div>
      </div>
      
    </div>
  );
};

export default FrameA;
