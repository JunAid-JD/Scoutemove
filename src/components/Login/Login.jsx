import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <h1>Welcome Back 👋</h1>
        {/* <p>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p> */}
        <form>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Example@gmail.com" />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="At least 8 character" />
          <p className="forget">Forget Password?</p>
          <Link to="/">
            <button>Sign in</button>
          </Link>
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
            Don't you have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
      <div className="right">
        <img src="/img/signup.png" alt="bg" />
      </div>
    </div>
  );
};

export default Login;
