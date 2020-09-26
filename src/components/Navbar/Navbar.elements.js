import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  background: lightblue;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
`;

export const NavIcon = styled(FaMagento)`
  font-size: 2rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  color: ${({ bgLightMenu }) => (bgLightMenu ? "white" : "black")};
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid transparent;
  padding: 0px 10px;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    &:hover {
      border: none;
    }
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
