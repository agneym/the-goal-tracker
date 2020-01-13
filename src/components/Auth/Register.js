import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 2.5rem 5rem;
  width: 100%;
  max-width: 800px;
`;

const StyledInput = styled(Input)`
  margin: 2rem 0;
`;

function Register() {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <StyledInput
          fullWidth
          name="name"
          id="name"
          required
          type="text"
          labelText="Name"
          placeholder="John Doe"
          autoComplete="name"
        />
        <StyledInput
          fullWidth
          name="username"
          id="username"
          required
          type="text"
          labelText="Username"
          placeholder="johndoe"
          autoComplete="username"
        />
        <StyledInput
          fullWidth
          name="password"
          id="password"
          required
          type="password"
          labelText="Password"
          placeholder="******"
          autoComplete="current-password"
        />
        <div>
          <Button variant="primary" fullWidth type="submit">
            REGISTER
          </Button>
          <p>OR</p>
          <Link to="/auth/login">LOGIN</Link>
        </div>
      </form>
    </Container>
  );
}

export default Register;
