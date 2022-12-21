import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
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
          <li className="navlink">
            <Link to="/characters">Characters</Link>
          </li>
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
              <Link to="/gearcalc">
                <li>Gear Materials</li>
              </Link>
              <Link to="/charfragcalc">
                <li>Character Fragments</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-right" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaBars /> : <GrClose />}
      </div>
    </nav>
  );
};

export default Navbar;
