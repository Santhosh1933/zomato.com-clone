import React from "react";
import { AiOutlineCoffee } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="w-full bg-transparent text-white">
      <div className="flex justify-between py-4 container">
        <div className="logo flex items-center gap-2 font-medium">
          <AiOutlineCoffee />
          <p>Get the App</p>
        </div>
        <ul className="text-lg flex items-center gap-8">
          <li>Investor Relations</li>
          <li>Add restaurant</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};
