
import { FunctionComponent } from "react";
import githubIcon from "../assets/github.svg";
import googleIcon from "../assets/google@2x.png";
import "./InputContent.css";

const InputContent: FunctionComponent = () => {
  return (
    <form className="input-form">
      <button className="frame-i">
        <div className="subheading" />
        <div className="register-yourself">
          Register Yourself To Continue
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
        <div className="register-yourself-to-continue">
          <div className="seperator" /></div>

        <div className="email-input">
          <div className="inputField">Your Email Address</div>
            <input className="email-tb" placeholder="" type="text" />
        </div>
        
        <div className="usn">
          <div className="inputField">Your University Seat Number</div>
          <input className="email-tb" placeholder="" type="text" />
        </div>

        <div className="frame-parent">
          <div className="password-parent">
            <div className="inputField" >Password</div>
            <input className="email-tb" placeholder="" type="password" />
          </div>

          <div className="input-email-parent">
          <div className="checkbox-container">
            <input type="checkbox" id="myCheckbox" className="custom-checkbox" required />
            <label htmlFor="myCheckbox"></label>
          </div>

            <div className="i-agree-to-container">
              <span className="i-agree-to">{`I agree to the `}</span>
              <a href="/terms-and-conditions" className="InputContent-link">
              <span className="terms-conditions">{`Terms & Conditions`}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        <button className="rectangle-parent">
          <div className="frame-child" />

          <div className="register">Register</div>

        </button>
        <div className="sign-in-button">
          <div className="already-have-an">Already have an account?</div>
          <a href="/login"><div className="sign-in FrameA-link">Sign In</div></a>
        </div>
      </div>
    </form>
  );
};

export default InputContent;
