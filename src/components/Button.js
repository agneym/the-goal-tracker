import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";

import Loader from "./Loader";

const Container = styled.button`
  padding: 1.5rem 2rem;
  box-shadow: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  ${props => props.fullWidth && `width: 100%;`}
  ${variant({
    variants: {
      primary: {
        color: "white",
        backgroundColor: "indigo.600",
        "&:hover": {
          backgroundColor: "indigo.500",
        },
      },
    },
  })}
`;

const Text = styled.span`
  opacity: ${props => (props.invisible ? 0 : 1)};
`;

function Button({ loading, fullWidth, children, ...rest }) {
  return (
    <Container fullWidth={fullWidth} {...rest}>
      <Text invisible={loading}>{children}</Text>
      {loading && <Loader />}
    </Container>
  );
}

export default Button;
