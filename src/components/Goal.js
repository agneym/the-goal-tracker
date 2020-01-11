import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";

const InnerContainer = styled.div`
  margin: 1.4rem 0;
`;

function Goal({ id, labelText, completionStatus }) {
  return (
    <InnerContainer>
      <Checkbox
        id={id}
        labelText={labelText}
        completionStatus={completionStatus}
      />
    </InnerContainer>
  );
}

export default Goal;
