import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavLogo from "../../assets/logos/salogolongwhite.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky w-screen h-full top-0 z-10">
      <div className="bg-[#13517D] bg-opacity-100 shadow-md px-2 flex justify-between items-center w-full h-full ">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-[30px] p-2 mt-2 md:h-[60px] pl-6 "
              src={NavLogo}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden text-white md:flex  md:pr-4 md:text-sm lg:text-lg">
          <ul className="space-x-4 :bg-black hidden md:flex md:space-x-2 ">
            <li className="relative inline-block  hover:block">
              <div className="relative inline-block  hover:block"></div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/agiletransformation">Agile Transformation</Link>
            </li>
            <li>
              <Link to="/agilecoaching">Agile Coaching</Link>
            </li>
            <li>
              <Link to="/agiletraining">Agile Training</Link>
            </li>

            {/* <li>
              <Link to="/skills">Skills Development</Link>
            </li> */}
            {/* <li>
              <span className="pr-1">
                <PhoneIcon />
              </span>
              1 (800) 421-6864
            </li> */}
          </ul>
          {/* <ProfileMenu/> */}
        </div>
        <div className="flex md:hidden flex-row" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-white right-3 mr-6" />
          ) : (
            <MenuOpenIcon className="w-5 text-white right-3 mr-6" />
          )}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-10 right-0 w-sm text-center items-center justify-center px-8"
          }
        >
          <li
            onClick={handleClick}
            className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full"
          >
            <Link to="/userprofile">User Profile</Link>
          </li>

          <li
            onClick={handleClick}
            className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full"
          >
            <Link to="/agiletransformation">Agile Transformation</Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full"
          >
            <Link to="/agilecoaching">Agile Coaching</Link>
          </li>
          <li
            onClick={handleClick}
            className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full"
          >
            <Link to="/agiletraining">Agile Training</Link>
          </li>
          {/* <li className="border-b-2 bg-[#13517D] m-1 text-white border-zinc-300 w-full">
            <Link to="/skills">Skills Development</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
