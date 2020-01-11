import React from "react";
import styled from "styled-components";

import Loader from "./Loader";

const Container = styled.button`
  padding: 1.4rem 2rem;
  box-shadow: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
`;

const Text = styled.span`
  opacity: ${props => (props.invisible ? 0 : 1)};
`;

function Button({ loading, children, ...rest }) {
  console.log(loading);
  return (
    <Container {...rest}>
      <Text invisible={loading}>{children}</Text>
      {loading && <Loader />}
    </Container>
  );
}

export default Button;
