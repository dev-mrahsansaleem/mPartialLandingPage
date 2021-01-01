import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [haveButton, setHaveButton] = useState(true);
  const [navbarToggle, setNavBarToggle] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setHaveButton(false);
    } else {
      setHaveButton(true);
    }
  };
  const changeBG = () => {
    if (window.scrollY >= 80) {
      setNavBarToggle(true);
    } else {
      setNavBarToggle(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBG);
  return (
    <>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
