import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  CenterContainer,
  FixedLayout,
  Banner,
  VejaMaisContainer,
} from "../../styles/style";
import { ContainerBreadCrumb, BreadCrumb } from "../Products/style";
import {
  GridProduct,
  ContainerInfo,
  Title,
  RefProduct,
  PriceAct,
  PricePromo,
  Discount,
  ColorContainer,
  SizeContainer,
  Divider,
  MaskInput,
  ContainerFrete,
  BtnCalc,
  ContainerDescription,
  TitleDesc,
  Description,
  GridDescription,
  GridAvaliation,
  AvaliationVal,
  GridCheckout,
  ColorInfoContainer,
  InfoColor,
  SizeInfoContainer,
  TextArea,
  RowQtd,
  Input,
  ContainerDescriptionTwo,
  CommentContainer,
  DateRef,
} from "./style";
import { useLocation } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Buttom from "../../components/Button/index";
import Carousel from "@brainhubeu/react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaShoppingCart, FaSearchPlus } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";

export default function ProductsInfo() {
  const { pathname } = useLocation();
  const [sliderPosition, setSliderPosition] = useState("right");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const images = [
    {
      original:
        "https://blog.keydesign.com.br/wp-content/uploads/2019/01/capa-verao-2019.jpg",
      thumbnail:
        "https://blog.keydesign.com.br/wp-content/uploads/2019/01/capa-verao-2019.jpg",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRVy3XNfXF7-4-__V_j_o0Kw41g6Y7wC-Zmg&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRVy3XNfXF7-4-__V_j_o0Kw41g6Y7wC-Zmg&usqp=CAU",
    },
    {
      original:
        "https://imgcentauro-a.akamaihd.net/900x900/94072219/camiseta-do-flamengo-date-19-masculina-img.jpg",
      thumbnail:
        "https://imgcentauro-a.akamaihd.net/900x900/94072219/camiseta-do-flamengo-date-19-masculina-img.jpg",
    },
  ];

  useEffect(() => {
    handleWidth();
  }, []);

  function handleWidth() {
    let widthWindow = window.innerWidth;
    if (widthWindow <= 450) {
      setSliderPosition("bottom");
    } else {
      setSliderPosition("right");
    }
  }

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

            <GridProduct>
              <ContainerInfo>
                <Title>
                  Kit Camiseta Básica c/ 5 Peças Masculina - Preto e Branco
                </Title>
                <RefProduct style={{ marginBottom: 15 }}>
                  Ref.: <strong>MSX-0007-006-02</strong>
                </RefProduct>
                <ImageGallery
                  items={images}
                  thumbnailPosition={sliderPosition}
                />
              </ContainerInfo>

              <ContainerInfo>
                <GridCheckout>
                  <div>
                    <PriceAct>R$ 99.00</PriceAct>
                    <PricePromo>R$ 189.90</PricePromo>
                    <Discount>
                      Desconto: <strong>20%</strong>
                    </Discount>
                    <Discount>
                      Em até: <strong>6x de R$ 20.00</strong> no Cartão de
                      Crédito
                    </Discount>
                    <Discount style={{ marginTop: 40 }}>
                      <strong>Selecione a Cor:</strong> Amarelo
                    </Discount>
                    <div style={{ width: "100%", marginTop: 8 }}>
                      <Carousel
                        slidesPerPage={4}
                        arrows
                        arrowLeft={
                          <MdKeyboardArrowLeft
                            color="#333"
                            size={"4rem"}
                            style={{ cursor: "pointer" }}
                          />
                        }
                        arrowLeftDisabled={
                          <MdKeyboardArrowLeft
                            color="#ddd"
                            size={"4rem"}
                            style={{ cursor: "not-allowed" }}
                          />
                        }
                        arrowRight={
                          <MdKeyboardArrowRight
                            color="#333"
                            size={"4rem"}
                            style={{ cursor: "pointer" }}
                          />
                        }
                        arrowRightDisabled={
                          <MdKeyboardArrowRight
                            color="#ddd"
                            size={"4rem"}
                            style={{ cursor: "not-allowed" }}
                          />
                        }
                        addArrowClickHandler
                      >
                        <ColorInfoContainer disable={true} check={false}>
                          <ColorContainer background="red" />
                        </ColorInfoContainer>
                        <ColorInfoContainer disable={false} check={false}>
                          <ColorContainer background="gray" />
                        </ColorInfoContainer>
                        <ColorInfoContainer disable={false} check={true}>
                          <ColorContainer background="green" />
                        </ColorInfoContainer>
                        <ColorInfoContainer disable={false} check={false}>
                          <ColorContainer background="yellow" />
                        </ColorInfoContainer>
                        <ColorInfoContainer disable={false} check={false}>
                          <ColorContainer background="black" />
                        </ColorInfoContainer>
                        <ColorInfoContainer disable={false} check={false}>
                          <ColorContainer background="white" />
                        </ColorInfoContainer>
                      </Carousel>
                    </div>
                    <Discount style={{ marginTop: 25 }}>
                      <strong>Selecione o Tamanho:</strong> P
                    </Discount>
                    <div
                      style={{ width: "100%", marginTop: 8, marginBottom: 40 }}
                    >
                      <Carousel
                        slidesPerPage={5}
                        arrows
                        arrowLeft={
                          <MdKeyboardArrowLeft
                            color="#333"
                            size={"4rem"}
                            style={{ cursor: "pointer" }}
                          />
                        }
                        arrowLeftDisabled={
                          <MdKeyboardArrowLeft
                            color="#ddd"
                            size={"4rem"}
                            style={{ cursor: "not-allowed" }}
                          />
                        }
                        arrowRight={
                          <MdKeyboardArrowRight
                            color="#333"
                            size={"4rem"}
                            style={{ cursor: "pointer" }}
                          />
                        }
                        arrowRightDisabled={
                          <MdKeyboardArrowRight
                            color="#ddd"
                            size={"4rem"}
                            style={{ cursor: "not-allowed" }}
                          />
                        }
                        addArrowClickHandler
                      >
                        <SizeInfoContainer disable={false} check={false}>
                          <SizeContainer>P</SizeContainer>
                          <InfoColor disponible={true}>22</InfoColor>
                        </SizeInfoContainer>
                        <SizeInfoContainer disable={true} check={false}>
                          <SizeContainer>M</SizeContainer>
                          <InfoColor disponible={true}>22</InfoColor>
                        </SizeInfoContainer>
                        <SizeInfoContainer disable={false} check={true}>
                          <SizeContainer>M</SizeContainer>
                          <InfoColor disponible={true}>22</InfoColor>
                        </SizeInfoContainer>
                      </Carousel>
                    </div>
                    <RowQtd>
                      QUANTIDADE:
                      <Input
                        type="number"
                        style={{ width: 80, marginLeft: 15 }}
                      />
                    </RowQtd>
                  </div>
                  <div>
                    <Buttom full={true}>
                      <FaShoppingCart /> COMPRAR
                    </Buttom>

                    <Divider />

                    <Discount>
                      <strong>Frete e Prazo de Entrega:</strong>
                    </Discount>
                    <ContainerFrete>
                      <MaskInput
                        mask={"99999-999"}
                        placeholder="Insira o CEP"
                      />
                      <BtnCalc>CALCULAR</BtnCalc>
                    </ContainerFrete>
                  </div>
                </GridCheckout>
              </ContainerInfo>
            </GridProduct>

            <ContainerDescription>
              <TitleDesc>DESCRIÇÃO</TitleDesc>
              <Description>
                Para complementar as combinações casuais, o Kit Camiseta Básica
                Masculina é ideal para o seu guarda-roupa. O kit apresenta 2
                camisetas pretas, 2 camisetas brancas e 1 camiseta cinza e
                possui modelagem slim para maior conforto e ajuste no seu dia a
                dia. Aposte nessa conjunto de camiseta masculina, com tecido
                macio e leve que permite liberdade de movimentos.
              </Description>
              <GridDescription>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
                <Discount>
                  <strong>Nome:</strong> Kit Camiseta Básica c/ 5 Peças
                  Masculina
                </Discount>
              </GridDescription>
            </ContainerDescription>
            <ContainerDescriptionTwo>
              <GridAvaliation>
                <div>
                  <TitleDesc>Avaliações dos Clientes</TitleDesc>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AvaliationVal>4.8</AvaliationVal>
                    <div>
                      <ReactStars
                        count={5}
                        value={4.8}
                        onChange={() => {}}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <Discount>Média entre 200 opiniões</Discount>
                    </div>
                  </div>
                </div>
                <div>
                  <TextArea rows={3} placeholder="Insira seu comentário aqui" />
                  <Buttom full={false} small={true}>
                    <FiSend /> ENVIAR COMENTÁRIO
                  </Buttom>
                </div>
              </GridAvaliation>
            </ContainerDescriptionTwo>
            <ContainerDescriptionTwo>
              <TitleDesc>Comentários</TitleDesc>
              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>

              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>
              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>
              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>
              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>
              <CommentContainer>
                <ReactStars
                  count={5}
                  value={4.8}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                />
                <Discount>Produto exelente de boa qualidade</Discount>
                <Discount>
                  <strong>Josue</strong>
                  <DateRef>10/10/1010</DateRef>
                </Discount>
              </CommentContainer>
            </ContainerDescriptionTwo>
            <VejaMaisContainer>
              <Buttom full={false} small={true} outlined={true} theme="dark">
                <FaSearchPlus /> VEJA MAIS COMENTÁRIOS
              </Buttom>
            </VejaMaisContainer>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
