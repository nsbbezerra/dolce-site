import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/Index/index";
import Products from "../pages/Products/products";

export default function RoutesApp() {
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/produtos">
        <Products />
      </Route>
    </Switch>
  );
}
