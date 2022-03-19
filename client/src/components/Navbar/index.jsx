import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          classes="nav__logo"
        />
      </Link>
      <Link to="/search" className="nav__link">
        Search
      </Link>
    </div>
  );
};
