import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

import Dark from "./Dark";
import Link from "./Link";
import LangSwitch from "../Lang/LangSwitch";
import { NavLink } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Sale",
    link: "topSale",
  },
  {
    id: 3,
    name: "All Products",
    link: "products",
  },
];
const Dropdown = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Sale",
    link: "topSale",
  },
  {
    id: 3,
    name: "All Products",
    link: "products",
  },
];

function Navbar({ handelOrder, home }) {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white data:text-white duration-200 relative z-40 ">
      {/* upper Nav */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center ">
          <div>
            <NavLink
              to="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10 uppercase " />
              Accure
            </NavLink>
          </div>
          {/* search bar  */}
          <div
            className="flex
          justify-between gap-4"
          >
            <div
              className="relative
             group hidden sm:block"
            >
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 transition-all rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800
                "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={handelOrder}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white  drop-shadow-sm cursor-pointer " />
            </button>
            {/* Dark Mode Switch */}
            <div>
              <Dark />
            </div>
            {/* LangSwitch */}
            <div>
              <LangSwitch />
            </div>
          </div>
        </div>
      </div>
      {/* lower Nav */}
      {home ? (
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center">
            {Menu.map((data) => (
              <Link item={data} key={data.id} />
            ))}
            {/* Simple dropdown */}
            <li className="group relative cursor-pointer">
              <p className="flex items-center gap-[2px] py-2 ">
                Trending
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </p>
              <div className="absolute z-[40] hidden group-hover:block w-[150px] bg-white p-2 text-black rounded-md text-black shadow-md">
                <ul>
                  {Dropdown.map((data) => (
                    <Link item={data} key={data.id} nav={"true"} />
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
