import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/web-logo.png";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, signout } = use(AuthContext);
 
  const handlesignout = (e) => {
    e.preventDefault();
    signout();
  };
  const navItems = (
    <>
      <NavLink className="m-3 cursor-pointer text-[16px] " to={"/"}>
        Home
      </NavLink>
      <NavLink className="m-3 cursor-pointer text-[16px]" to={"/profile"}>
        My Profile
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm p-3 md:px-7">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-[100px] h-[80px] " src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {user ? (
        <div className="navbar-end gap-3">
          <div className="tooltip tooltip-bottom"
            data-tip={user.displayName}>
            <img
              alt=""
              src={user.photoURL}
              className=" w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
          </div>

          <button
            onClick={handlesignout}
            className="btn btn-primary text-white"
          >
            SignOut
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <Link to={"/login"} className="btn btn-secondary text-white">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-primary text-white">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
