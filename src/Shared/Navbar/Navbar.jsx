import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [carts]= useCart();
  console.log(carts);
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Our Order</Link>
      </li>
      <li>
        <Link>
          <div className="">
            <button className="mr-2">Cart</button>
            <span className="badge badge-secondary">{carts.length}</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        Swal.fire("User logout successful!");
        navigate("/");
      });
  };
  return (
    <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-black text-white bg-opacity-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-0">
          <h2 className="text-xl font-bold">Bistro Boss</h2>
          <h3 className="text-base font-normal">R e s t a u r a n t</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="btn bg-black text-white mr-3 uppercase border-0">
              {user.email.slice(0, 2)}
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-outline bg-amber-500 border-0 text-white hover:bg-amber-400"
            >
              Log Out
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
