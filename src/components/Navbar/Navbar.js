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

export default function Navbar({ user }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

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
              <NavLink user={user} onClick={closeMobileMenu} to="/">
                Library
              </NavLink>
            </NavItem>
            {user ? (
              <NavItem>
              <NavLink onClick={closeMobileMenu} to="/profile">
                Profile
              </NavLink>
            </NavItem>
            ) : (
              ""
            )}
            {user ? (
              <NavItem>
                <NavLink onClick={closeMobileMenu} to="/logout">
                  Logout
                </NavLink>
              </NavItem>

            ) : (
              ""
            )}
            
            
            {!user ? (
              <NavItem>
                <NavLink onClick={closeMobileMenu} to="/login">
                  Log In
                </NavLink>
              </NavItem>
            ) : (
              ""
            )}
            
            {!user ? (
              <NavItem>
                <NavLink onClick={closeMobileMenu} to="/sign-up">
                  Sign Up
                </NavLink>
              </NavItem>
            ) : (
              ""
            )}
            
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
