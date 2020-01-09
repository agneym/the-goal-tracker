import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Route path="/">
        <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
