import React from "react";
import "./style.css";
import {
  CenterContainer,
  FixedLayout,
  BtnGhost,
  LabelButton,
  BtnLogin,
} from "../../styles/style";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLogin,
  AiOutlineShopping,
} from "react-icons/ai";
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
            <div className="right-header">
              <BtnLogin style={{ marginRight: 40 }}>
                <AiOutlineLogin style={{ marginRight: 10 }} />
                Entre ou Cadastre-se
              </BtnLogin>

              <BtnGhost style={{ marginRight: 40 }}>
                <LabelButton>1</LabelButton>
                <AiOutlineShopping color={general.colors.gold} />
              </BtnGhost>

              <a href="/" className="social-media-header">
                <AiOutlineFacebook color={general.colors.dark} />
              </a>
              <a href="/" className="social-media-header">
                <AiOutlineInstagram color={general.colors.dark} />
              </a>
              <a href="/" className="social-media-header">
                <AiOutlineTwitter color={general.colors.dark} />
              </a>
            </div>
          </div>
          <nav id="menu-app" className="menu-app">
            <ul>
              <li>
                <span>NOVIDADES</span>
              </li>
              <li>
                <span>FEMENINO</span>
              </li>
              <li>
                <span>MASCULINO</span>
              </li>
              <li>
                <span>INFANTIL</span>
              </li>
              <li>
                <span>BELEZA</span>
              </li>
              <li>
                <span>BOLSAS E ACESSÓRIOS</span>
              </li>
              <li>
                <span>CALÇADOS</span>
              </li>
              <li>
                <span>RELÓGIOS</span>
              </li>
              <li>
                <span>ESPORTIVO</span>
              </li>
              <li>
                <span>MODA ÍNTIMA</span>
              </li>
              <li>
                <span>OFERTAS</span>
              </li>
            </ul>
          </nav>
        </FixedLayout>
      </CenterContainer>
    </header>
  );
}
