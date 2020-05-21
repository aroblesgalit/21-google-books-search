import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <header>
      <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo logoMark" to="/">Google Books Search</Link>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li><Link to="/" className="navLink">Search</Link></li>
            <li><Link to="/saved" className="navLink">Saved</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
