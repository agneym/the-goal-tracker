import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./utils/Global";
import theme from "./utils/theme";
import client from "./client";
import Auth from "./pages/Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
