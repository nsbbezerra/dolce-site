import React, { useEffect } from "react";
import {
  Container,
  Banner,
  Title,
  FixedLayout,
  CenterContainer,
  Content,
  TitleJumbotron,
  CardMark,
  Spaced,
} from "../../styles/style";
import Grid from "../../components/Grid/index";
import Card from "../../components/Card/index";
import Carousel from "@brainhubeu/react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

import breakpoints from "../../configs/sliderConfig";

export default function Index() {
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
            <TitleJumbotron>Procure pelas Marcas</TitleJumbotron>
            <Carousel
              slidesPerPage={5}
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
              breakpoints={breakpoints.products}
            >
              <CardMark
                image={
                  "https://santalolla.vteximg.com.br/arquivos/logo.png?v=637191252540470000"
                }
              />
              <CardMark
                image={
                  "https://static.vecteezy.com/system/resources/previews/000/610/039/non_2x/vector-shoes-woman-logo-design-concept-template.jpg"
                }
              />
              <CardMark
                image={
                  "https://image.freepik.com/vetores-gratis/logotipo-de-sapatos-urbanos_1051-1632.jpg"
                }
              />
              <CardMark
                image={
                  "https://seeklogo.com/images/C/Converse_All_Star-logo-C1F948F2D8-seeklogo.com.png"
                }
              />
              <CardMark
                image={
                  "https://santalolla.vteximg.com.br/arquivos/logo.png?v=637191252540470000"
                }
              />
            </Carousel>
          </Content>

          <Spaced />

          <Content>
            <Grid min={250} max={250} gap={30}>
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
                route="/produto"
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
                route="/produto"
              />
              <Card
                title="Camiseta Femenina Santa Lolla"
                image={
                  "https://damyller.vteximg.com.br/arquivos/ids/498037-980-1470/Camiseta-Feminina-Branca-com-Bolso-Frente--.jpg?v=636928114521200000"
                }
                discountPrice={250}
                price={250}
                payOpt={"6x de R$35,00"}
                route="/produto"
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
      <Spaced />
    </Container>
  );
}
