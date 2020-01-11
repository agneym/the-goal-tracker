import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import InputButton from "../InputButton";
import Goal from "../Goal";
import GET_GOALS from "./getGoals";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.boxShadows.md};
  width: 100%;
  max-width: 700px;
  margin: 4rem auto;
`;

const ListingSection = styled.section`
  margin: 1rem 0;
`;

function GoalSection() {
  const { data, loading, error } = useQuery(GET_GOALS);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const goalText = form.addGoal.value;
    form.reset();
  };
  const goals = data?.allGoals.data ?? [];
  return (
    <Container>
      <header>
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
      </header>
      <ListingSection>
        <h2>CURRENT GOALS</h2>
        {goals.map(goal => (
          <Goal labelText={goal.title} completionStatus={goal.completed} />
        ))}
      </ListingSection>
    </Container>
  );
}

export default GoalSection;
