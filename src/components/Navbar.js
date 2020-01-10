import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadows.outline};
  height: ${props => props.theme.nav.height};
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: ${props => props.theme.colors.white};
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">
        <Heading>The Goal Tracker</Heading>
      </StyledLink>
    </Nav>
  );
}

export default Navbar;
