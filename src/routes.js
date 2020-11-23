import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Charts from "./components/Charts";
import LoginPage from "./components/forms/loginPage/LoginPage";
import SignupPage from "./components/forms/signupPage/SignupPage";


export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
    </Switch>
  </HashRouter>
);
