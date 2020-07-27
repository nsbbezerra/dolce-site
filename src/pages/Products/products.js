import React from "react";
import {
  Container,
  Content,
  FixedLayout,
  Banner,
  CenterContainer,
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
} from "./style";
import Collapsible from "react-collapsible";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Grid from "../../components/Grid/index";
import Card from "../../components/Card/index";

export default function Products() {
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
            </ContainerBreadCrumb>

            <GridProducts>
              <MenuLateral>
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
                  >
                    tamanhos
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        TAMANHO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    tamanhos
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        TAMANHO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    tamanhos
                  </Collapsible>
                </CollapseContainer>

                <CollapseContainer>
                  <Collapsible
                    trigger={
                      <Trigger>
                        TAMANHO <IoMdArrowDropdown />
                      </Trigger>
                    }
                  >
                    tamanhos
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
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
