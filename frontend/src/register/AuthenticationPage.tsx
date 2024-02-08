import { FunctionComponent } from "react";
import FrameA from "./FrameA";
import ImageComp from "./ImageComp";
import InputContent from "./InputContent";
import "./AuthenticationPage.css";

const AuthenticationPage: FunctionComponent = (): JSX.Element => {
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

export default AuthenticationPage;
