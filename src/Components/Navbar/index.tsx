import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h1>
            DC LEGENDS <br />
            TOOLKIT
          </h1>
        </div>
        <ul
          className={`${mobileMenu ? "navlinks" : "navlinks open-mobile-menu"}`}
        >
          <li className="navlink">Characters</li>
          <li
            className="navlink navlink-dropdown"
            onClick={() => setDrawer(!drawer)}
          >
            Calculators
            <ul
              className={`${
                drawer
                  ? "navlink-dropdown-menu navlink-dropdown-menu-open"
                  : "navlink-dropdown-menu"
              }`}
            >
              <li>Gear Materials</li>
              <li>Character Fragments</li>
              <li>Speed</li>
              <li>Upgrade Cost</li>
            </ul>
          </li>
          <li className="navlink">Calendar</li>
        </ul>
      </div>
      <div className="navbar-right" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaBars /> : <GrClose />}
      </div>
    </nav>
  );
};

export default Navbar;
