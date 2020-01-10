import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadows.md};
  height: ${props => props.theme.nav.height};
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`;

function Navbar() {
  return (
    <Nav>
      <Heading>The Goal Tracker</Heading>
    </Nav>
  );
}

export default Navbar;
