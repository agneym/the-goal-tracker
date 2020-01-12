import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import Login from "./Login";

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
        <Redirect to={`${match.url}/login`} />
      </Switch>
    </Container>
  );
}

export default Auth;
