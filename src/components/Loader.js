import React from "react";
import styled from "styled-components";

import ballTriangle from "../images/ball-triangle.svg";

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%);
  width: 5rem;
  height: 5rem;
  color: ${props => props.theme.colors.indigo[500]};

  img {
    height: 100%;
    width: 100%;
  }
`;

function Loader({ className }) {
  return (
    <Container className={className}>
      <img src={ballTriangle} alt="Loading indicator" />
    </Container>
  );
}

export default Loader;
