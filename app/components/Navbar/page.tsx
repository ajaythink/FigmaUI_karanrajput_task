import React from "react";

function navbar() {
  return (
    <div className="  flex justify-between py-6 px-10 z-30 bg-transparent fixed top-0 left-0 right-0 items-center backdrop-blur-sm shadow-lg">
      <div className="text-black font-extrabold text-4xl">LOGO</div>
      <div>
        <ul className="flex space-x-4 gap-3 text-md text-blue-500">
          <li className="cursor-pointer">
            Home{" "}
            <span className="inline-block -rotate-90 px-1 text-center">
              &#10094;
            </span>
          </li>
          <li className="cursor-pointer">About <span className="inline-block -rotate-90 px-1">&#10094;</span></li>
          <li className="cursor-pointer">Contact<span className="inline-block -rotate-90 px-1">&#10094;</span></li>
        </ul>
      </div>
      <div className="bg-gray-100 px-6 py-2 font-bold shadow-lg rounded-lg">
        Login
      </div>
    </div>
  );
}

export default navbar;
