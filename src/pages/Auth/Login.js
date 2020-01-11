import React from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 2.5rem 5rem;
  width: 40%;
  max-width: 800px;
  min-width: 500px;
`;

const StyledInput = styled(Input)`
  margin: 2rem 0;
`;

function Login() {
  return (
    <Container>
      <form>
        <StyledInput
          fullWidth
          name="email"
          id="email"
          type="email"
          labelText="Email Address"
          placeholder="johndoe@email.com"
          autoComplete="email"
        />
        <StyledInput
          fullWidth
          name="password"
          id="password"
          type="password"
          labelText="Password"
          placeholder="******"
          autoComplete="current-password"
        />
        <Button variant="primary" fullWidth>
          LOGIN
        </Button>
      </form>
    </Container>
  );
}

export default Login;
