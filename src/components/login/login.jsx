import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
function Login(props) {
  let navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={`row ${styles.head}`}>
        <div className="col-6">
          <img
            src="https://academia.srmist.edu.in/49910842/academia-academic-services/downloadPortalImage?type=3&imageName=1519210955371_Untitled-1.jpg"
            alt="SRM Logo"
          />
        </div>
        <div className="col-6">
          <img
            src="https://academia.srmist.edu.in/49910842/academia-academic-services/downloadPortalImage?type=3&imageName=1512045054267_Untitled-1.png"
            alt="SRM Application Development Centre"
          />
        </div>
      </div>
      <h2>Academia - Student Portal</h2>
      <div className={styles.form}>
        <h5>Sign In</h5>
        <div>
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="password"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-block" onClick={()=>{
            navigate('/dashboard')
        }}>
          Sign In
        </button>
        <Link to="/">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
