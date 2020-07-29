import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  FixedLayout,
  Banner,
  CenterContainer,
  Spaced,
} from "../../styles/style";
import {
  Title,
  ContainerBreadCrumb,
  BreadCrumb,
  GridProducts,
  MenuLateral,
  CollapseContainer,
  Trigger,
  MenuTitle,
  MenuDesc,
  MenuDescButtom,
  BtnClearFilter,
  ContainerSectionProducts,
  CollapseContent,
  MenuBarButtom,
} from "./style";
import Collapsible from "react-collapsible";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Grid from "../../components/Grid/index";
import Card from "../../components/Card/index";
import Checkbox from "../../components/Checkbox/index";
import { useLocation } from "react-router-dom";
import breakpoints from "../../configs/sliderConfig";
import Carousel from "@brainhubeu/react-carousel";

export default function Products() {
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <CenterContainer>
        <FixedLayout>
          <Banner
            src={
              "https://feiravip.com/wp-content/uploads/2019/04/1550581280-banner-home-pv19-v3.jpg"
            }
          />
          <Content>
            <ContainerBreadCrumb>
              <BreadCrumb>HOME / CAMISETAS</BreadCrumb>
              <MenuBarButtom onClick={() => setOpen(!open)}>
                {open ? <FaTimes /> : <FaBars />}
              </MenuBarButtom>
            </ContainerBreadCrumb>

            <GridProducts>
              <MenuLateral open={open}>
                <MenuTitle>Filtros Selecionados</MenuTitle>
                <MenuDesc>
                  Camisetas
                  <BtnClearFilter>
                    <FaTimes />
                  </BtnClearFilter>
                </MenuDesc>
                <MenuDesc>
                  Camisetas
                  <BtnClearFilter>
                    <FaTimes />
                  </BtnClearFilter>
                </MenuDesc>
                <MenuDescButtom>Limpar Todos</MenuDescButtom>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        TAMANHO <IoMdArrowDropdown />
                      </Trigger>
                    }
                    open={true}
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        P
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        M
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        G
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        GG
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        EXG
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        GÊNERO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Masculino
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Feminino
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Menino
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Menina
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Bebê Menino
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Bebê Menina
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        TIPO DE PRODUTO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Abajus
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Acessórios
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Acessórios de Amamentação
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Acessórios de Passeio
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Acessórios para Banho
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Agasalhos
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        MARCA <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        1mais1
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        3 e Já
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        4 Folhas
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        4 Ás
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        ABQM
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        AES 1975
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        COR <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Amarelo
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Azul
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Preto
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Vermelho
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Marsala
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Rosa
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        PREÇO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Menos de R$ 40
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 40 a R$ 90
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 90 a R$ 140
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 140 a R$ 210
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 210 a R$ 350
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 350 a R$ 530
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        DESCONTO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Menos de R$ 40
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 40 a R$ 90
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 90 a R$ 140
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 140 a R$ 210
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 210 a R$ 350
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        R$ 350 a R$ 530
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        DEPARTAMENTO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    <CollapseContent>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Casual
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Basquete
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Futebol
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Esportes
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Vôlei
                      </Checkbox>
                      <Checkbox checked={checked} onChange={setChecked}>
                        Tênis
                      </Checkbox>
                    </CollapseContent>
                  </Collapsible>
                </CollapseContainer>
              </MenuLateral>

              <ContainerSectionProducts>
                <Title>CAMISETAS</Title>
                <Grid min={250} max={250} gap={30}>
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                  <Card
                    title="Camiseta Femenina Santa Lolla"
                    image={
                      "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                    }
                    discountPrice={250}
                    price={250}
                    payOpt={"6x de R$35,00"}
                  />
                </Grid>
              </ContainerSectionProducts>
            </GridProducts>
          </Content>

          <Spaced />

          <Content>
            <Title>Ofertas Imperdíveis</Title>
            <Carousel
              slidesPerPage={4}
              arrows
              arrowLeft={
                <MdKeyboardArrowLeft
                  color="#333"
                  size={"5em"}
                  style={{ cursor: "pointer" }}
                />
              }
              arrowLeftDisabled={
                <MdKeyboardArrowLeft
                  color="#ddd"
                  size={"5em"}
                  style={{ cursor: "not-allowed" }}
                />
              }
              arrowRight={
                <MdKeyboardArrowRight
                  color="#333"
                  size={"5em"}
                  style={{ cursor: "pointer" }}
                />
              }
              arrowRightDisabled={
                <MdKeyboardArrowRight
                  color="#ddd"
                  size={"5em"}
                  style={{ cursor: "not-allowed" }}
                />
              }
              addArrowClickHandler
              breakpoints={breakpoints.cards}
            >
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
            </Carousel>
          </Content>

          <Spaced />

          <Content>
            <Title>Novidades</Title>
            <Carousel
              slidesPerPage={4}
              arrows
              arrowLeft={
                <MdKeyboardArrowLeft
                  color="#333"
                  size={"5em"}
                  style={{ cursor: "pointer" }}
                />
              }
              arrowLeftDisabled={
                <MdKeyboardArrowLeft
                  color="#ddd"
                  size={"5em"}
                  style={{ cursor: "not-allowed" }}
                />
              }
              arrowRight={
                <MdKeyboardArrowRight
                  color="#333"
                  size={"5em"}
                  style={{ cursor: "pointer" }}
                />
              }
              arrowRightDisabled={
                <MdKeyboardArrowRight
                  color="#ddd"
                  size={"5em"}
                  style={{ cursor: "not-allowed" }}
                />
              }
              addArrowClickHandler
              breakpoints={breakpoints.cards}
            >
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
              />
            </Carousel>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
