import React from "react";
import { Header } from "../components/layout";

const withLayoutDashboard = (Component) => (props) => {
  return (
    <div className="app">
      <Header isDashboard />
      <Component {...props} />
    </div>
  );
};

export default withLayoutDashboard;
