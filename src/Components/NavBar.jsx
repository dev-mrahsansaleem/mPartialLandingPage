import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  // const [haveButton, setHaveButton] = useState(true);
  // const [navbarToggle, setNavBarToggle] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setHaveButton(false);
  //   } else {
  //     setHaveButton(true);
  //   }
  // };
  // const changeBG = () => {
  //   if (window.scrollY >= 80) {
  //     setNavBarToggle(true);
  //   } else {
  //     setNavBarToggle(false);
  //   }
  // };
  // useEffect(showButton(), []);
  // window.addEventListener("resize", showButton);
  // window.addEventListener("scroll", changeBG);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="assets/logo.png" alt="logo" width="210" />
          </Link>
          <div className="menu-icon" onClick={handleClicked}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <Button btnStyle="btn--round">SignUp</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
