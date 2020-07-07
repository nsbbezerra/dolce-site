import React from "react";
import "./style.css";
import { CenterContainer, FixedLayout } from "../../styles/style";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import general from "../../configs/general";

import icone from "../../assets/icon-gold.svg";
import logo from "../../assets/name-slug.svg";

export default function Header() {
  return (
    <header className="header-app">
      <CenterContainer>
        <FixedLayout>
          <div className="company-info">
            <div className="container-logo">
              <img alt="Logo Dolce Encanto" src={icone} className="icone-app" />
              <img alt="Logo Dolce Encanto" src={logo} className="logo-app" />
            </div>
            <div>
              <a href="/" className="social-media-header">
                <FaFacebookSquare color={general.colors.gold} />
              </a>
              <a href="/" className="social-media-header">
                <FaInstagramSquare color={general.colors.gold} />
              </a>
              <a href="/" className="social-media-header">
                <FaTwitterSquare color={general.colors.gold} />
              </a>
            </div>
          </div>
          <nav className="menu-app"></nav>
        </FixedLayout>
      </CenterContainer>
    </header>
  );
}
