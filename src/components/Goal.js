import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import Checkbox from "./Checkbox";
import UPDATE_GOAL from "./GoalSection/updateGoal";

const InnerContainer = styled.div`
  margin: 1.4rem 0;
`;

function Goal({ id, labelText, completionStatus }) {
  const [updateGoal] = useMutation(UPDATE_GOAL);
  const toggleCompletionStatus = event => {
    const target = event.target;
    const checkStatus = target.checked;
    updateGoal({
      variables: {
        id,
        title: labelText,
        completed: checkStatus,
      },
    });
  };
  return (
    <InnerContainer>
      <Checkbox
        id={id}
        labelText={labelText}
        checked={completionStatus}
        onChange={toggleCompletionStatus}
      />
    </InnerContainer>
  );
}

export default Goal;
