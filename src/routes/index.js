import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/Index/index";

export default function RoutesApp() {
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
    </Switch>
  );
}
