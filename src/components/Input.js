import React, { Fragment } from "react";
import styled from "styled-components";

import VisuallyHidden from "../utils/VisuallyHidden";

const InputEl = styled.input`
  flex: 1;
  padding: 1.4rem 1.2rem;
  border: 1px solid ${props => props.theme.colors.gray[400]};
  font-family: inherit;
  letter-spacing: 0.03rem;
`;

const Label = styled.label`
  ${props => !props.visibleLabel && VisuallyHidden}
`;

function Input({ id, visibleLabel, labelText, ...rest }) {
  return (
    <Fragment>
      <Label htmlFor={id} visible={visibleLabel}>
        {labelText}
      </Label>
      <InputEl type="text" id={id} {...rest} />
    </Fragment>
  );
}

export default Input;
