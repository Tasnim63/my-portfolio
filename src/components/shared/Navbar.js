import React from "react";

import CustomLink from "../../hooks/CustomLink";

const Navbar = () => {
  return (
    <>
      <div class=" sticky top-0  z-50 navbar bg-gray-800 text-white font-serif">
        <div class="navbar ">
          <a href="/home" class="btn btn-ghost normal-case text-3xl">
            PORTFOLIO
          </a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal font-bold p-0">
            <li>
              <CustomLink to="/home">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/projects">Projects</CustomLink>
            </li>
            <li>
              <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
              <CustomLink to="/contact">Contact</CustomLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <ul class="p-2">
                <li>
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/projects">Projects</CustomLink>
                </li>
                <li>
                  <CustomLink to="/about">About</CustomLink>
                </li>
                <li>
                  <CustomLink to="/contact">Contact</CustomLink>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
