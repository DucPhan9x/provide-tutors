import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import { withLayout } from "./HOCS";
import LogIn from "./containers/LogIn";

function App() {
  return (
    <Router>
      <Switch>
        {/* Homepage */}
        <Route path="/login" exact component={withLayout(LogIn)} />
        <Route path="/" component={withLayout(HomePage)} />
      </Switch>
    </Router>
  );
}

export default App;
