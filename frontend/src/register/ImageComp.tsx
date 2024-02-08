import React, { FunctionComponent } from "react";
import "./ImageComp.css";
import glugIcon from "../assets/glug@2x.png";
import techubIcon from "../assets/techhub@2x.png";
import codeshackIcon from "../assets/codeshack@2x.png";

const ImageComp: FunctionComponent = () => {
  return (
    <div className="rectangle-glug">
      <img className="glug-icon" alt="" src={glugIcon} />
      <img className="techhub-icon" alt="" src={techubIcon} />
      <img className="codeshack-icon" alt="" src={codeshackIcon} />
    </div>
  );
};

export default ImageComp;
