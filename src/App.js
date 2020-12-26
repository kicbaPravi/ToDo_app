import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/Admin" component={AdminPage}></Route>
    </Switch>
  );
};

export default App;
