import React from "react";
import { Header } from "../components/layout";

const withLayoutDashboard = (Component) => (props) => {
  return (
    <div className="app">
      <Header />
      <Component {...props} />
    </div>
  );
};

export default withLayoutDashboard;
