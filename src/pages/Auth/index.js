import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import Login from "./Login";

function Auth() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/login`}>
        <Login />
      </Route>
      <Redirect to={`${match.url}/login`} />
    </Switch>
  );
}

export default Auth;
