import { Loader, User2Icon } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, loader } = use(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start ">
          <div className="dropdown block md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Coffee Hub</Link>
              </li>
              <li>
                <Link to={"/add-coffee"}>Add Coffee</Link>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Cyber Coffee</a>
        </div>
        <div className="navbar-center gap-10 hidden md:flex">
          <Link to={"/"}>Home</Link>

          <Link to={"/"}>Coffee Hub</Link>

          <Link to={"/add-coffee"}>Add Coffee</Link>

          {loader ? (
            <Loader />
          ) : user ? (
            ""
          ) : (
            <>
              {" "}
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
        <div className="navbar-end">
          <div className="btn btn-ghost btn-circle">
            <div className="indicator">
              {loader ? (
                <Loader />
              ) : user ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="rounded-full w-full h-fit object-cover"
                />
              ) : (
                <User2Icon />
              )}
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
