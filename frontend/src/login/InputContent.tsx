import { FunctionComponent } from "react";
import githubIcon from "../assets/github.svg";
import googleIcon from "../assets/google@2x.png";
import "./InputContent.css";

const InputContent: FunctionComponent = () => {
  return (
    <form className="input-form">
      <button className="frame-i">
        <div className="subheading" />
        <div className="login-yourself">
          Login To Continue
        </div>
      </button>
      <div className="checkbox-agree">
        <div className="google-input">
          <button className="github-google-inputs">
            <div className="github-btn" />
            <img className="github-icon" alt="GitHub Icon" src={githubIcon} />
            <div className="continue-with-github">Continue with Github</div>
          </button>
          <button className="github-google-inputs1">
            <div className="google-btn" />
            <img className="google-icon" alt="Google Icon" src={googleIcon} />
            <div className="continue-with-google">Continue with Google</div>
          </button>
        </div>
        <div className="login-to-continue">
          <div className="seperator" /></div>

        <div className="email-input">
          <div className="inputField">Your Email Address</div>
            <input className="email-tb" placeholder="" type="text" />
        </div>
       
        <div className="frame-parent">
          <div className="password-parent">
            <div className="inputField" >Password</div>
            <input className="email-tb" placeholder="" type="password" />
          </div>

        </div>
      </div>
      <div className="frame-group">
        <button className="rectangle-parent">
          <div className="frame-child" />

          <div className="login">Log In</div>

        </button>
        <div className="sign-up-button">
          <div className="no-account">Don't have an account?</div>
          <a href="/register"><div className="sign-up FrameA-link">Register</div></a>
        </div>
      </div>
    </form>
  );
};

export default InputContent;
