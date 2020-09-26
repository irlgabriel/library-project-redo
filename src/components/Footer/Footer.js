import React from "react";
import { FooterContainer, FooterHeader, FooterLink } from "./Footer.elements";

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <FooterHeader>
          This project was built using{" "}
          <FooterLink href="https://reactjs.org/">React</FooterLink>
        </FooterHeader>
        <FooterLink href="https://github.com/irlgabriel">Github</FooterLink>
      </FooterContainer>
    );
  }
}
