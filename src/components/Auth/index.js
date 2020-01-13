import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import Login from "./Login";
import Register from "./Register";

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Auth() {
  const match = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route path={`${match.url}/login`}>
          <Login />
        </Route>
        <Route path={`${match.url}/register`}>
          <Register />
        </Route>
        <Redirect to={`${match.url}/login`} />
      </Switch>
    </Container>
  );
}

export default Auth;
