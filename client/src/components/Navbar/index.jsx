import React from "react";
import { Logo } from "../Logo";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        classes="nav__logo"
      />
    </div>
  );
};
