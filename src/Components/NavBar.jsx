import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Button } from "./Button";
import "./NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  // const [haveButton, setHaveButton] = useState(true);
  const [navbarToggle, setNavBarToggle] = useState(false);
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
  const changeBG = () => {
    if (window.scrollY >= 560) {
      setNavBarToggle(true);
    } else {
      setNavBarToggle(false);
    }
  };
  // useEffect(showButton(), []);
  // window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBG);
  return (
    <>
      <nav className={navbarToggle ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link
            to="/"
            className={navbarToggle ? "navbar-logo active" : "navbar-logo"}
            onClick={closeMobileMenu}
          >
            <img src="assets/logo.png" alt="logo" width="210" />
          </Link>
          <div className="menu-icon" onClick={handleClicked}>
            <i
              className={
                (clicked ? "fas fa-times" : "fas fa-bars") +
                (navbarToggle ? " active" : "")
              }
            />
          </div>
          <ul
            className={
              (clicked ? "nav-menu active" : "nav-menu") +
              (navbarToggle ? " white" : "")
            }
          >
            <li className="nav-item">
              <LinkS
                to="GrowthSection"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Growth-Truth Data
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="HowItWorkSection"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                How It Works
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="FeeSection"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Fee Structure
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="DeliverableSection"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Example Deliverable
              </LinkS>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Submission Portal
              </Link>
            </li>
            <li className="nav-item">
              <LinkS
                to="contactUsSection"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Contact Us
              </LinkS>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className={navbarToggle ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                <Button btnStyle="btn--round" btnSize="btn--small">
                  SignUp
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
