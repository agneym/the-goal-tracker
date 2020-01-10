import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.boxShadows.md};
`;

function Goal() {
  return (
    <Container>
      <Checkbox id="123" labelText="This is the name of things" />
    </Container>
  );
}

export default Goal;
