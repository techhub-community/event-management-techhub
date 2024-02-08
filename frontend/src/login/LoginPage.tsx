import { FunctionComponent } from "react";
import FrameA from "../register/FrameA";
import ImageComp from "../register/ImageComp";
import InputContent from "./InputContent";
import "../register/AuthenticationPage.css";

const RegisterPage: FunctionComponent = (): JSX.Element => {
  return (
    <div className="authentication-page">
      <FrameA />
      <div className="frame-h">
        <div className="auth-box" />
        <ImageComp />
        <InputContent />
      </div>
    </div>
  );
};

export default RegisterPage;
