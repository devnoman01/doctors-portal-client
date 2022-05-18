import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-medium">
          Home
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="font-medium">
          Appointment
        </Link>
      </li>
      <li>
        <Link to="/review" className="font-medium">
          Review
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-medium">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-medium">
          About
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard" className="font-medium">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="btn btn-active btn-ghost"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="font-medium">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost drawer-button lg:hidden"
        >
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
        </label>
      </div>
    </div>
  );
};

export default Navbar;
