import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Goal from "../components/Goal";

function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <Goal />
    </Fragment>
  );
}

export default Dashboard;
