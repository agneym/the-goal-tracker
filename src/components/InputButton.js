import React from "react";
import styled from "styled-components";

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
`;

const Label = styled.label`
  ${props => !props.visibleLabel && VisuallyHidden}
`;

const Button = styled.button`
  padding: 1.4rem 2rem;
  box-shadow: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.indigo[500]};
  border: none;
  cursor: pointer;
  letter-spacing: 0.15rem;
  text-transform: uppercase;

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
  ...rest
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor={id} visible={visibleLabel}>
        {labelText}
      </Label>
      <Input type="text" id={id} {...rest} />
      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}

export default InputButton;
