import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardPage, PreviewPage } from "../Pages";

function index() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage title="Albums" />
          </Route>
          <Route path="/preview">
            <PreviewPage title="Shared Album" /> 
          </Route>  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default index;
