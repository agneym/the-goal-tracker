import React from "react";
import styled from "styled-components";

import Button from "./Button";
import VisuallyHidden from "../utils/VisuallyHidden";

const Form = styled.form`
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 1.4rem 1.2rem;
  border: 1px solid ${props => props.theme.colors.gray[400]};
  font-family: inherit;
  letter-spacing: 0.03rem;
`;

const Label = styled.label`
  ${props => !props.visibleLabel && VisuallyHidden}
`;

const AsideButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.indigo[500]};

  &:hover {
    background-color: ${props => props.theme.colors.indigo[400]};
  }

  &:focus {
    box-shadow: ${props => props.theme.boxShadows.outline};
  }
`;

function InputButton({
  id,
  labelText,
  visibleLabel = true,
  buttonText,
  onSubmit,
  loading,
  ...rest
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor={id} visible={visibleLabel}>
        {labelText}
      </Label>
      <Input type="text" id={id} {...rest} />
      <AsideButton loading={loading} type="submit">
        {buttonText}
      </AsideButton>
    </Form>
  );
}

export default InputButton;
