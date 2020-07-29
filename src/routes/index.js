import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/Index/index";
import Products from "../pages/Products/products";
import ProductsInfo from "../pages/ProductInfo/index";

export default function RoutesApp() {
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/produtos">
        <Products />
      </Route>
      <Route path="/produto">
        <ProductsInfo />
      </Route>
    </Switch>
  );
}
