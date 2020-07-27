import React, { useState } from "react";
import "./style.css";
import {
  CenterContainer,
  FixedLayout,
  BtnGhost,
  LabelButton,
  BtnLogin,
} from "../../styles/style";
import {
  Menu,
  MenuContainer,
  MenuItem,
  MenuItems,
  SubMenu,
  SubMenuItemsContainer,
  SubMenuLink,
  SubMenuTitle,
  MenuBarButtom,
} from "./style";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLogin,
  AiOutlineShopping,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import general from "../../configs/general";
import { useHistory } from "react-router-dom";

import icone from "../../assets/icon-gold.svg";
import logo from "../../assets/name-slug.svg";

export default function Header() {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  function goToHome() {
    history.push("/");
  }
  return (
    <header className="header-app">
      <CenterContainer>
        <FixedLayout>
          <div className="company-info">
            <div className="container-logo">
              <img
                alt="Logo Dolce Encanto"
                src={icone}
                className="icone-app"
                onClick={() => goToHome()}
              />
              <img
                alt="Logo Dolce Encanto"
                src={logo}
                className="logo-app"
                onClick={() => goToHome()}
              />
            </div>
            <div className="right-header">
              <BtnLogin style={{ marginRight: 40 }}>
                <AiOutlineLogin style={{ marginRight: 10 }} />
                Entre ou Cadastre-se
              </BtnLogin>

              <BtnGhost>
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
              <MenuBarButtom onClick={() => setOpen(!open)}>
                <FaBars fontSize={27} />
              </MenuBarButtom>
            </div>
          </div>
          <Menu active={open}>
            <MenuContainer>
              <MenuItems>
                <MenuItem>NOVIDADES</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>
                  FEMININO
                  <SubMenu>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink to="/produtos">SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                  </SubMenu>
                </MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>MASCULINO</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>INFANTIL</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>BELEZA</MenuItem>
              </MenuItems>

              <MenuItems>
                <MenuItem>CALÇADOS</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>RELÓGIOS</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>ESPORTIVO</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>
                  MODA ÍNTIMA
                  <SubMenu>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                    <SubMenuItemsContainer>
                      <SubMenuTitle>CALÇADOS</SubMenuTitle>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                      <SubMenuLink>SANDÁLIAS</SubMenuLink>
                    </SubMenuItemsContainer>
                  </SubMenu>
                </MenuItem>
              </MenuItems>
            </MenuContainer>
          </Menu>
        </FixedLayout>
      </CenterContainer>
    </header>
  );
}
