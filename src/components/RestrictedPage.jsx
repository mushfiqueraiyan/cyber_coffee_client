import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";

const RestrictedPage = ({ children }) => {
  const { user, loader } = use(AuthContext);

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default RestrictedPage;
