import React, { useContext } from "react";
import "../Login/Login.css";
import loginImg from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data)
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
            <input className="rounded-lg p-2"  {...register("name")} />
            <label htmlFor="">Email</label>
            <input className="rounded-lg p-2"   {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="">Password</label>
            <input className="rounded-lg p-2"  {...register("password", { required: true })} type="password" />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

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
