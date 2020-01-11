import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";

const Form = styled.form`
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
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
      <Input
        id={id}
        labelText={labelText}
        visibleLabel={visibleLabel}
        {...rest}
      />
      <AsideButton loading={loading} type="submit">
        {buttonText}
      </AsideButton>
    </Form>
  );
}

export default InputButton;
