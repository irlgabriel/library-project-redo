import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavIcon,
  NavMenu,
  NavbarContainer,
  NavItem,
  NavLink,
  MobileIcon,
} from "./Navbar.elements";

import {
  navBarData
} from "./NavbarData"

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButon = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>
          <MobileIcon onClick={handleClick} click={click}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu bgLightMenu click={click}>
            <NavItem>
              <NavLink onClick={closeMobileMenu} to="/">
                Library
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={closeMobileMenu} to="/sign-up">
                Sign Up
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={closeMobileMenu} to="/login">
                Log In
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
