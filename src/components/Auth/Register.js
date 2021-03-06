import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import CogoToast from "cogo-toast";

import Input from "../Input";
import Button from "../Button";
import CREATE_USER from "./createUser";

const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 2.5rem 5rem;
  width: 100%;
  max-width: 800px;
`;

const StyledInput = styled(Input)`
  margin: 2rem 0;
`;

const ActionContainer = styled.div`
  text-align: center;
`;

function Register() {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;
    try {
      const response = await createUser({
        variables: {
          name,
          username,
          password,
        },
      });
      if (response) {
        form.reset();
        CogoToast.success("User registered successfully.");
      }
    } catch (err) {
      CogoToast.error(err?.message);
    }
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
          autoComplete="new-password"
        />
        <ActionContainer>
          <Button variant="primary" fullWidth type="submit">
            REGISTER
          </Button>
          <p>OR</p>
          <Link to="/auth/login">LOGIN</Link>
        </ActionContainer>
      </form>
      {data?.createUser._id && <Redirect to="/auth/login" />}
    </Container>
  );
}

export default Register;
