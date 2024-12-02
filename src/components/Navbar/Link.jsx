import React from "react";
import { NavLink } from "react-router-dom";
function Link({ item, nav }) {
  return (
    <li className={`${nav ? "py-1" : ""}`}>
      <NavLink
        className={`${
          nav ||
          "inline-block px-4  hover:text-primary duration-200 active:text-primary"
        } ${
          nav
            ? "inline-block hover:bg-primary/20 w-full rounded-md p-2 active:text-primary"
            : ""
        }`}
        to={`${item.link}`}
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default Link;
