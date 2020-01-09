import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./utils/Global";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/">
          <Dashboard />
        </Route>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
