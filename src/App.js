import React from "react";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/index";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes/index";
import Footer from "./components/Footer/index";
import "./styles/global.css";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  return (
    <Router>
      <Header />
      <RoutesApp />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
