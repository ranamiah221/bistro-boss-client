import React, { useEffect, useState } from "react";
import "./Login.css";
import loginImg from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {signIn}= useAuth();
    useEffect(()=>{
        loadCaptchaEnginge(6);   
    },[])
    const handleCaptcha =(e)=>{
     const user_captcha_value= e.target.value;
     if(validateCaptcha(user_captcha_value)=== true){
        setDisabled(false)
     }
     else{
        setDisabled(true)
     }
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(err=>{
          console.log(err.message);
        })
    }
  return (
    <div className="authBg min-h-screen flex items-center">
      <div className="flex justify-between items-center border-4 p-5 border-blue-300 shadow-lg shadow-blue-700 rounded-lg m-10">
        <img className="w-1/2" src={loginImg} alt="" />
      <div className="w-1/2">
      <form onSubmit={handleLogin} className="card-body">
           <h2 className="text-4xl font-bold text-center underline my-3">Please Login</h2>
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
          <div className="form-control">
            <label className="label">
               <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleCaptcha}
              type="text"
              placeholder="Write valid captcha"
              className="input input-bordered"
              required
            />
            
          </div>
          <div className="form-control mt-6">
            <button type="submit" disabled={disabled} className="btn bg-[#D1A054] text-white">Login</button>
          </div>
          <p>New here to please <span className='text-xl font-bold underline'><Link to='/signup'>Sign up</Link></span></p>
        </form>
      </div>
        
      </div>
    </div>
  );
};

export default Login;
