import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardPage } from "../Pages";

function index() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={DashboardPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default index;
