import React from "react";
import styled, { keyframes } from "styled-components";

const Field = styled.div``;

const wave = keyframes`
  50% {
    transform: scale(0.9);
  }
`;

const Label = styled.label`
  margin: auto;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #506eec;
  }
`;

const Input = styled.input`
  display: none;
`;

const LabelText = styled.span`
  padding-left: 1rem;

  ${Input}:checked + ${Label}>& {
    text-decoration: line-through;
  }
`;

const TickContainer = styled.span`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);  

  svg {
    height: 1.2rem;
    width: 1rem;
    position: absolute;
    top: 0.3rem;
    left: 0.2rem;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 1.6rem;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.indigo[500]};
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }

  ${Input}:checked + ${Label}>& {
    background-color: ${props => props.theme.colors.indigo[500]};
    border-color: ${props => props.theme.colors.indigo[500]};
    animation: ${wave} 0.4s ease;

    svg {
      stroke-dashoffset: 0;
    }

    &::before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }
`;

function Checkbox({ id, labelText, ...rest }) {
  return (
    <Field>
      <Input type="checkbox" id={id} {...rest} />
      <Label for={id}>
        <TickContainer>
          <svg viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </TickContainer>
        <LabelText>{labelText}</LabelText>
      </Label>
    </Field>
  );
}

export default Checkbox;
