import React, { Fragment } from "react";

import Navbar from "./Navbar";
import GoalSection from "./GoalSection";

function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <GoalSection />
    </Fragment>
  );
}

export default Dashboard;
