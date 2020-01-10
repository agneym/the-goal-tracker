import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";

const InnerContainer = styled.div`
  margin: 1.4rem 0;
`;

function Goal() {
  return (
    <InnerContainer>
      <Checkbox id="123" labelText="This is the name of things" />
    </InnerContainer>
  );
}

export default Goal;
