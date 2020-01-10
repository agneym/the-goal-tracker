import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.boxShadows.md};
`;

function Goal() {
  return (
    <Container>
      <p>Goal</p>
    </Container>
  );
}

export default Goal;
