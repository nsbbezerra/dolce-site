import React, { useState } from "react";
import "./style.css";
import {
  CenterContainer,
  FixedLayout,
  BtnGhost,
  LabelButton,
} from "../../styles/style";
import {
  Menu,
  MenuContainer,
  MenuItem,
  MenuItems,
  SubMenu,
  MenuItemExtra,
  SubMenuLink,
  SubMenuTitle,
  MenuBarButtom,
  MenuItemMenu,
  CarrouselContainer,
  CarrouselDescritpion,
  AvatarImg,
  ContainerOfCarrousel,
  ContainerContentMenu,
  ContainerInfoMenu,
  DropdownUser,
  DropdownMenu,
  DropdownItems,
  DropdownItem,
  BtnLogin,
} from "./style";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineProfile,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBag, BsBagFill } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import general from "../../configs/general";
import { useHistory } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import breakpoints from "../../configs/sliderConfig";

import icone from "../../assets/icon-black.svg";
import logo from "../../assets/name-slug.svg";

export default function Header() {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  function goToHome() {
    history.push("/");
  }

  function goToProducts(rt) {
    history.push(`/${rt}`);
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
            <Menu active={open}>
              <MenuContainer>
                <MenuItems>
                  <MenuItemMenu>
                    <FaBars style={{ marginRight: 10 }} />
                    DEPARTAMENTOS
                    <SubMenu>
                      <ContainerOfCarrousel>
                        <Carousel
                          slidesPerPage={7}
                          arrows
                          arrowLeft={
                            <MdKeyboardArrowLeft
                              color="#333"
                              size={"3rem"}
                              style={{ cursor: "pointer" }}
                            />
                          }
                          arrowLeftDisabled={
                            <MdKeyboardArrowLeft
                              color="#ddd"
                              size={"3rem"}
                              style={{ cursor: "not-allowed" }}
                            />
                          }
                          arrowRight={
                            <MdKeyboardArrowRight
                              color="#333"
                              size={"3rem"}
                              style={{ cursor: "pointer" }}
                            />
                          }
                          arrowRightDisabled={
                            <MdKeyboardArrowRight
                              color="#ddd"
                              size={"3rem"}
                              style={{ cursor: "not-allowed" }}
                            />
                          }
                          addArrowClickHandler
                          breakpoints={breakpoints.products}
                          style={{ background: "red" }}
                        >
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                          <CarrouselContainer>
                            <AvatarImg
                              image={
                                "https://4.bp.blogspot.com/-gEldIT9Lj40/WQFK9_z92dI/AAAAAAAABpU/xl_s-Z-Raj0SmlC-jjAI7Jf9YvYYYLiuQCLcB/s1600/blusa%2Bbranca%2Bmoda%2Bmeio%2Bque%2Btipo%2Bassim.png"
                              }
                            />
                            <CarrouselDescritpion>
                              MODA MASCULINA
                            </CarrouselDescritpion>
                          </CarrouselContainer>
                        </Carousel>
                      </ContainerOfCarrousel>
                      <ContainerContentMenu>
                        <ContainerInfoMenu>
                          <SubMenuTitle>CALÇADOS</SubMenuTitle>
                          <SubMenuLink>Botas</SubMenuLink>
                          <SubMenuLink>Chinelos</SubMenuLink>
                          <SubMenuLink>Linha Conforto</SubMenuLink>
                          <SubMenuLink>Sandálias</SubMenuLink>
                          <SubMenuLink>Scarpin</SubMenuLink>
                          <SubMenuLink>Peep Tools</SubMenuLink>
                          <SubMenuLink>Rasteiras</SubMenuLink>
                          <SubMenuLink>Sapatilhas</SubMenuLink>
                        </ContainerInfoMenu>
                        <ContainerInfoMenu>
                          <SubMenuTitle>CALÇADOS</SubMenuTitle>
                          <SubMenuLink>Botas</SubMenuLink>
                          <SubMenuLink>Chinelos</SubMenuLink>
                          <SubMenuLink>Linha Conforto</SubMenuLink>
                          <SubMenuLink>Sandálias</SubMenuLink>
                          <SubMenuLink>Scarpin</SubMenuLink>
                          <SubMenuLink>Peep Tools</SubMenuLink>
                          <SubMenuLink>Rasteiras</SubMenuLink>
                          <SubMenuLink>Sapatilhas</SubMenuLink>
                        </ContainerInfoMenu>
                        <ContainerInfoMenu>
                          <SubMenuTitle>CALÇADOS</SubMenuTitle>
                          <SubMenuLink>Botas</SubMenuLink>
                          <SubMenuLink>Chinelos</SubMenuLink>
                          <SubMenuLink>Linha Conforto</SubMenuLink>
                          <SubMenuLink>Sandálias</SubMenuLink>
                          <SubMenuLink>Scarpin</SubMenuLink>
                          <SubMenuLink>Peep Tools</SubMenuLink>
                          <SubMenuLink>Rasteiras</SubMenuLink>
                          <SubMenuLink>Sapatilhas</SubMenuLink>
                        </ContainerInfoMenu>
                        <ContainerInfoMenu>
                          <SubMenuTitle>CALÇADOS</SubMenuTitle>
                          <SubMenuLink>Botas</SubMenuLink>
                          <SubMenuLink>Chinelos</SubMenuLink>
                          <SubMenuLink>Linha Conforto</SubMenuLink>
                          <SubMenuLink>Sandálias</SubMenuLink>
                          <SubMenuLink>Scarpin</SubMenuLink>
                          <SubMenuLink>Peep Tools</SubMenuLink>
                          <SubMenuLink>Rasteiras</SubMenuLink>
                          <SubMenuLink>Sapatilhas</SubMenuLink>
                        </ContainerInfoMenu>
                      </ContainerContentMenu>
                    </SubMenu>
                  </MenuItemMenu>
                </MenuItems>
                <MenuItems>
                  <MenuItem onClick={() => goToProducts("produtos")}>
                    NOVIDADES
                  </MenuItem>
                </MenuItems>
                <MenuItems>
                  <MenuItem>FEMININO</MenuItem>
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
                <MenuItemExtra>ENTRE OU CADASTRE-SE</MenuItemExtra>
                <MenuItemExtra>MEUS DADOS</MenuItemExtra>
              </MenuContainer>
            </Menu>
            <div className="right-header">
              <BtnLogin style={{ marginRight: 20 }}>
                <AiOutlineUser />
                <DropdownUser>
                  <DropdownMenu>
                    <DropdownItems>
                      <DropdownItem to="/dados">
                        <AiOutlineProfile style={{ marginRight: 15 }} /> MEUS
                        DADOS
                      </DropdownItem>
                    </DropdownItems>
                    <DropdownItems>
                      <DropdownItem to="/pedidos">
                        <FiPackage style={{ marginRight: 15 }} /> MEUS PEDIDOS
                      </DropdownItem>
                    </DropdownItems>
                  </DropdownMenu>
                </DropdownUser>
              </BtnLogin>

              <BtnGhost onClick={() => goToProducts("carrinho")}>
                <LabelButton>0</LabelButton>
                <BsBag />
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
                {!open ? <FaTimes fontSize={27} /> : <FaBars fontSize={27} />}
              </MenuBarButtom>
            </div>
          </div>
        </FixedLayout>
      </CenterContainer>
    </header>
  );
}
