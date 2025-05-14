import React from "react";
import { Outlet } from "react-router";
import Navbar from "../src/components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
