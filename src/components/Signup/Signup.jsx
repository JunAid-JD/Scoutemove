import "../Login/Login.css";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container signup">
      <div className="left">
        <h1>Create Account</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis quam
          leo nec.
        </p> */}
        <form>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Example@gmail.com" />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="At least 8 character" />
          <label htmlFor="Password">Confirm Password</label>
          <input type="password" placeholder="At least 8 character" />
          <p className="forget">Forget Password?</p>
          <button>Register Now</button>
          <div className="or">
            <div className="line"></div>
            <p>Or</p>
            <div className="line"></div>
          </div>
          <div className="socialbtn">
            <img src="/img/Google.svg" alt="" />
            <p>Sign in with Google</p>
          </div>
          <div className="socialbtn">
            <img src="/img/Facebook.svg" alt="" />
            <p>Sign in with Facebook</p>
          </div>
          <p className="link">
            Already you have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="right">
        <img src="/img/signup.png" alt="bg" />
      </div>
    </div>
  );
};

export default Signup;
