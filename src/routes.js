import React from "react";
import { Route, BrowserRouter, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import Marginalia from "./components/Marginalia";
import Charts from "./components/Charts";
import LoginPage from "./components/forms/loginPage/LoginPage";
import SignupPage from "./components/forms/signupPage/SignupPage";
import Design from "./components/Design";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";

import { Router } from "@reach/router";

export default () => (
  <BrowserRouter>
    <Switch>
      {/* <Header /> */}
      <Route exact path="/" component={Main} />
      <Route exact path="/marginalia" component={Marginalia} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      {/* <StickyFooter /> */}
    </Switch>
  </BrowserRouter>

// {/* <Router>
// <Marginalia path="/marginalia" />
// </Router> */}
);
