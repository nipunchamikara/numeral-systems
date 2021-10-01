import React from "react";
import Logo from "../../images/icon.webp";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="navbar-brand-img" src={Logo} alt="Website Logo" />
        <div className="navbar-brand-text">NUMERAL SYSTEMS CONVERSIONS</div>
      </div>
    </nav>
  );
};

export default Navbar;
