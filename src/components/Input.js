import React from "react";
import styled from "styled-components";

import VisuallyHidden from "../utils/VisuallyHidden";

const Container = styled.div`
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  display: ${props => (props.fullWidth ? "block" : "inline-block")};
`;

const InputEl = styled.input`
  flex: 1;
  padding: 1.4rem 1.2rem;
  border: 1px solid ${props => props.theme.colors.gray[400]};
  font-family: inherit;
  letter-spacing: 0.03rem;

  ${props => props.fullWidth && `width: 100%;`}
`;

const Label = styled.label`
  ${props =>
    !props.visible
      ? VisuallyHidden
      : `
    margin-bottom: 0.5rem;
    display: inline-block;
  `}
`;

function Input({
  id,
  visibleLabel = true,
  labelText,
  className,
  fullWidth = false,
  ...rest
}) {
  return (
    <Container fullWidth={fullWidth} className={className}>
      <Label htmlFor={id} visible={visibleLabel}>
        {labelText}
      </Label>
      <InputEl type="text" id={id} fullWidth={fullWidth} {...rest} />
    </Container>
  );
}

export default Input;
