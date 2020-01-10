import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import InputButton from "./InputButton";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.boxShadows.md};
  width: 100%;
  max-width: 700px;
  margin: 4rem auto;
`;

const InnerContainer = styled.div`
  margin: 1.4rem 0;
`;

function GoalSection() {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <Container>
      <InputButton
        buttonText="Add"
        onSubmit={handleSubmit}
        labelText="Add Goal"
        visibleLabel={false}
        id="addGoal"
        placeholder="Get the Product ready in time for Holidays"
        required
      />
      <InnerContainer>
        <Checkbox id="123" labelText="This is the name of things" />
      </InnerContainer>
    </Container>
  );
}

export default GoalSection;
