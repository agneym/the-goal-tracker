import React from "react";
import styled from "styled-components";

import InputButton from "./InputButton";
import Goal from "./Goal";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.boxShadows.md};
  width: 100%;
  max-width: 700px;
  margin: 4rem auto;
`;

function GoalSection() {
  const handleSubmit = event => {
    event.preventDefault();
    const goalText = event.target.addGoal.value;
  };
  return (
    <Container>
      <InputButton
        buttonText="Add"
        onSubmit={handleSubmit}
        labelText="Add Goal"
        visibleLabel={false}
        id="addGoal"
        name="addGoal"
        placeholder="Get the Product ready in time for Holidays"
        required
      />
      <Goal />
    </Container>
  );
}

export default GoalSection;
