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
            <li className=" textLink"><Link to="/" className="navLink">Search</Link></li>
            <li className=" textLink"><Link to="/saved" className="navLink textLink">Saved</Link></li>
            <li className="iconLink"><Link to="/" className="navLink" uk-icon="icon: search"></Link></li>
            <li className="iconLink"><Link to="/saved" className="navLink" uk-icon="icon: bookmark"></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
