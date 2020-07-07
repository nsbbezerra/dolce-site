import React from "react";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/index";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes/index";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      <RoutesApp />
      <GlobalStyle />
    </Router>
  );
}

export default App;
