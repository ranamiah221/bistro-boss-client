import React from 'react';
import '../Login/Login.css'
import loginImg from "../../assets/others/authentication1.png";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="authBg min-h-screen flex items-center">
      <div className="flex justify-between items-center border-4 p-5 border-blue-300 shadow-lg shadow-blue-700 rounded-lg m-10">
        <img className="w-1/2" src={loginImg} alt="" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            
          </div>
          
          <div className="form-control mt-6">
            <button type="submit"className="btn btn-primary">Sign Up</button>
          </div>
          <p>New here to please <Link to='/signup'>Sign up</Link></p>
        </form>
        
      </div>
    </div>
    );
};

export default SignUp;