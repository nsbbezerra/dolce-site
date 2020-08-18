import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/Index/index";
import Products from "../pages/Products/products";
import ProductsInfo from "../pages/ProductInfo/index";
import Chart from "../pages/Chart/index";
import Checkout from "../pages/Checkout/index";
import MyData from "../pages/MyData/index";
import MyPackages from "../pages/MyPackages/index";

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
      <Route path="/carrinho">
        <Chart />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/dados">
        <MyData />
      </Route>
      <Route path="/pedidos">
        <MyPackages />
      </Route>
    </Switch>
  );
}
