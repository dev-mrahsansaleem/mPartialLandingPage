import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

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
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">logo here</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
