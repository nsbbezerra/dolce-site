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
                <AiOutlineShopping color={general.colors.light} />
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
                <MenuItemMenu>
                  <FaBars style={{ marginRight: 10 }} />
                  MENU
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
                <MenuItem>NOVIDADES</MenuItem>
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
              <MenuItems>
                <MenuItem>ESPORTIVO</MenuItem>
              </MenuItems>
              <MenuItems>
                <MenuItem>MODA ÍNTIMA</MenuItem>
              </MenuItems>
              <MenuItemExtra>ENTRE OU CADASTRE-SE</MenuItemExtra>
              <MenuItemExtra>MEUS DADOS</MenuItemExtra>
            </MenuContainer>
          </Menu>
        </FixedLayout>
      </CenterContainer>
    </header>
  );
}
