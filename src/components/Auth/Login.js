import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import cogoToast from "cogo-toast";

import storage from "../../utils/storage";
import Input from "../Input";
import Button from "../Button";
import LOGIN_USER from "./loginUser";

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

function Login() {
  const [loginUser, { data }] = useMutation(LOGIN_USER);
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    try {
      const response = await loginUser({
        variables: {
          username,
          password,
        },
      });
      if (response.data) {
        storage.set("token", response.data?.loginUser);
        form.reset();
        cogoToast.success("Login successfull");
      }
    } catch (err) {
      cogoToast.error(err?.message);
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
        <ActionContainer>
          <Button variant="primary" fullWidth type="submit">
            LOGIN
          </Button>
          <p>OR</p>
          <Link to="/auth/register">REGISTER</Link>
        </ActionContainer>
      </form>
      {data?.loginUser && <Redirect to="/" />}
    </Container>
  );
}

export default Login;
