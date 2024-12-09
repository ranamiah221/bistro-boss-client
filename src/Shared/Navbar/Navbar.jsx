import React from "react";

const Navbar = () => {
    const navLink=
    <>
       <li><a>Item 1</a></li>
       <li><a>Item 3</a></li>
    </>
  return (
   <div className="navbar fixed z-10 bg-black text-white bg-opacity-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
 
    <div className="flex flex-col items-center gap-0">
    <h2 className="text-xl font-bold">Bistro Boss</h2>
    <h3 className="text-base font-normal">R e s t a u r a n t</h3>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default Navbar;
