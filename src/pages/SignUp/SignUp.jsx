import React, { useContext } from "react";
import "../Login/Login.css";
import loginImg from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from './../../Hooks/useAuth';
import Swal from "sweetalert2";


const SignUp = () => {
const {createUser, logOut}=useAuth();
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    createUser(data.email, data.password)
    .then(result=>{
        navigate('/login');
        Swal.fire("User Register successful!");
    })
    .catch(err=>{
      console.log(err.message)
    })
  } 

  return (
    <div className="authBg min-h-screen flex items-center">
      <div className="lg:flex flex-row-reverse justify-between items-center border-4 p-5 border-blue-300 shadow-lg shadow-blue-700 rounded-lg m-10">
        <img className="lg:w-1/2" src={loginImg} alt="" />
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-4xl font-bold text-center underline my-3">
              Please Sign up
            </h2>
            <label htmlFor="">Name</label>
            <input className="rounded-lg p-2"  {...register("name", {required: true})} />
            {errors.name && <span>This field is required</span>}

            <label htmlFor="">Email</label>
            <input className="rounded-lg p-2"   {...register("email", {required: true})} />
            {errors.email && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="">Password</label>
            <input className="rounded-lg p-2"  {...register("password", { required: true,
              maxLength:20, 
              minLength:6,
              pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
             })} type="password" />
            {/* errors will return when field validation fails  */}
            {errors.password?.type ==='required' && <span>This field is required</span>}
            {errors.password?.type ==='minLength' && <span>Password must be 6 character</span>}
            {errors.password?.type ==='maxLength' && <span>Password must be less than 20 character</span>}
            {errors.password?.type ==='pattern' && <span>Password must be one uppercase lowercase number and special character</span>}
            <input className="btn bg-[#D1A054] text-white" value='Sign up' type="submit" />
            <p>
              Already you have a account please{" "}
              <span className="text-xl font-bold underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
