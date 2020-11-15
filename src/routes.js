import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Charts from "./components/Charts";
import LoginPage from "./components/forms/loginPage/LoginPage";


export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </HashRouter>
);
