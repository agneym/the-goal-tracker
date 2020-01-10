import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import GoalSection from "../components/GoalSection";

function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <GoalSection />
    </Fragment>
  );
}

export default Dashboard;
