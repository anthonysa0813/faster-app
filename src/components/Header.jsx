import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header-container">
      <h1>Faster</h1>
      <nav className="menu ">
        <div className="menu-item">How Fast?</div>
        <div className="menu-item">Sellers</div>
        <div className="menu-item">Store</div>
        <div className="menu-item">Docs</div>
        <div className="menu-item">Help</div>
      </nav>
      <div className="login font ">
        <button>fast Login</button>
      </div>
    </header>
  );
};

export default Header;
