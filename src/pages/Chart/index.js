import React from "react";
import {
  GridChart,
  ContainerChart,
  ContainerResume,
  TitleChart,
  ChartCard,
  GridChartCard,
  CardImage,
  CardInfo,
  InfoTitle,
  InfoDesc,
  SizeRow,
  CheckColor,
  CheckSize,
  QtdContainer,
  QtdInfo,
  PricePromo,
  Price,
  Input,
  BtnAct,
  ContainerResumeInfo,
  ResumeInfo,
  SpaceBtn,
} from "./style";
import {
  Container,
  CenterContainer,
  FixedLayout,
  Spaced,
  Content,
} from "../../styles/style";
import {
  RefProduct,
  ContainerFrete,
  MaskInput,
  BtnCalc,
  Discount,
} from "../ProductInfo/style";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCheck,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import Buttom from "../../components/Button/index";

export default function ChartApp() {
  return (
    <Container>
      <CenterContainer>
        <FixedLayout>
          <Content>
            <Spaced />
            <GridChart>
              <ContainerChart>
                <TitleChart>Meu Carrinho</TitleChart>

                <ChartCard>
                  <GridChartCard>
                    <CardImage image="https://static.zattini.com.br/produtos/malha-facinelli-lurex-babados-feminina/06/H37-0613-006/H37-0613-006_vitrine2.jpg?ts=1597131858" />
                    <CardInfo>
                      <InfoTitle>
                        Malha Facinelli Lurex Babados Feminina
                      </InfoTitle>
                      <RefProduct>
                        Ref: <strong># H37-0613-006-02</strong>
                      </RefProduct>
                      <SizeRow>
                        <InfoDesc>
                          <strong>COR:</strong>
                        </InfoDesc>
                        <CheckColor background="yellow" checked={true} />
                        <CheckColor background="blue" checked={false} />
                        <CheckColor background="red" checked={false} />
                        <CheckColor background="black" checked={false} />
                        <CheckColor background="white" checked={false} />
                      </SizeRow>
                      <SizeRow>
                        <InfoDesc>
                          <strong>TAMANHO:</strong>
                        </InfoDesc>
                        <CheckSize checked={true}>P</CheckSize>
                        <CheckSize checked={false}>M</CheckSize>
                        <CheckSize checked={false}>G</CheckSize>
                        <CheckSize checked={false}>EG</CheckSize>
                        <CheckSize checked={false}>EXG</CheckSize>
                      </SizeRow>
                    </CardInfo>
                  </GridChartCard>
                  <QtdContainer>
                    <QtdInfo>
                      <InfoDesc>
                        <strong>Quantidade:</strong>
                      </InfoDesc>
                      <BtnAct>
                        <AiOutlineMinusCircle />
                      </BtnAct>
                      <Input type="number" style={{ width: 50 }} value={0} />
                      <BtnAct>
                        <AiOutlinePlusCircle />
                      </BtnAct>
                    </QtdInfo>
                    <QtdInfo>
                      <PricePromo>R$ 122,00</PricePromo>
                      <Price>R$ 100,00</Price>
                    </QtdInfo>
                  </QtdContainer>
                </ChartCard>

                <ChartCard>
                  <GridChartCard>
                    <CardImage image="https://static.zattini.com.br/produtos/malha-facinelli-lurex-babados-feminina/06/H37-0613-006/H37-0613-006_vitrine2.jpg?ts=1597131858" />
                    <CardInfo>
                      <InfoTitle>
                        Malha Facinelli Lurex Babados Feminina
                      </InfoTitle>
                      <RefProduct>
                        Ref: <strong># H37-0613-006-02</strong>
                      </RefProduct>
                      <SizeRow>
                        <InfoDesc>
                          <strong>COR:</strong>
                        </InfoDesc>
                        <CheckColor background="yellow" checked={true} />
                        <CheckColor background="blue" checked={false} />
                        <CheckColor background="red" checked={false} />
                        <CheckColor background="black" checked={false} />
                        <CheckColor background="white" checked={false} />
                      </SizeRow>
                      <SizeRow>
                        <InfoDesc>
                          <strong>TAMANHO:</strong>
                        </InfoDesc>
                        <CheckSize checked={true}>P</CheckSize>
                        <CheckSize checked={false}>M</CheckSize>
                        <CheckSize checked={false}>G</CheckSize>
                        <CheckSize checked={false}>EG</CheckSize>
                        <CheckSize checked={false}>EXG</CheckSize>
                      </SizeRow>
                    </CardInfo>
                  </GridChartCard>
                  <QtdContainer>
                    <QtdInfo>
                      <InfoDesc>
                        <strong>Quantidade:</strong>
                      </InfoDesc>
                      <BtnAct>
                        <AiOutlineMinusCircle />
                      </BtnAct>
                      <Input type="number" style={{ width: 50 }} value={0} />
                      <BtnAct>
                        <AiOutlinePlusCircle />
                      </BtnAct>
                    </QtdInfo>
                    <QtdInfo>
                      <PricePromo>R$ 122,00</PricePromo>
                      <Price>R$ 100,00</Price>
                    </QtdInfo>
                  </QtdContainer>
                </ChartCard>

                <ChartCard>
                  <GridChartCard>
                    <CardImage image="https://static.zattini.com.br/produtos/malha-facinelli-lurex-babados-feminina/06/H37-0613-006/H37-0613-006_vitrine2.jpg?ts=1597131858" />
                    <CardInfo>
                      <InfoTitle>
                        Malha Facinelli Lurex Babados Feminina
                      </InfoTitle>
                      <RefProduct>
                        Ref: <strong># H37-0613-006-02</strong>
                      </RefProduct>
                      <SizeRow>
                        <InfoDesc>
                          <strong>COR:</strong>
                        </InfoDesc>
                        <CheckColor background="yellow" checked={true} />
                        <CheckColor background="blue" checked={false} />
                        <CheckColor background="red" checked={false} />
                        <CheckColor background="black" checked={false} />
                        <CheckColor background="white" checked={false} />
                      </SizeRow>
                      <SizeRow>
                        <InfoDesc>
                          <strong>TAMANHO:</strong>
                        </InfoDesc>
                        <CheckSize checked={true}>P</CheckSize>
                        <CheckSize checked={false}>M</CheckSize>
                        <CheckSize checked={false}>G</CheckSize>
                        <CheckSize checked={false}>EG</CheckSize>
                        <CheckSize checked={false}>EXG</CheckSize>
                      </SizeRow>
                    </CardInfo>
                  </GridChartCard>
                  <QtdContainer>
                    <QtdInfo>
                      <InfoDesc>
                        <strong>Quantidade:</strong>
                      </InfoDesc>
                      <BtnAct>
                        <AiOutlineMinusCircle />
                      </BtnAct>
                      <Input type="number" style={{ width: 50 }} value={0} />
                      <BtnAct>
                        <AiOutlinePlusCircle />
                      </BtnAct>
                    </QtdInfo>
                    <QtdInfo>
                      <PricePromo>R$ 122,00</PricePromo>
                      <Price>R$ 100,00</Price>
                    </QtdInfo>
                  </QtdContainer>
                </ChartCard>

                <ChartCard>
                  <GridChartCard>
                    <CardImage image="https://static.zattini.com.br/produtos/malha-facinelli-lurex-babados-feminina/06/H37-0613-006/H37-0613-006_vitrine2.jpg?ts=1597131858" />
                    <CardInfo>
                      <InfoTitle>
                        Malha Facinelli Lurex Babados Feminina
                      </InfoTitle>
                      <RefProduct>
                        Ref: <strong># H37-0613-006-02</strong>
                      </RefProduct>
                      <SizeRow>
                        <InfoDesc>
                          <strong>COR:</strong>
                        </InfoDesc>
                        <CheckColor background="yellow" checked={true} />
                        <CheckColor background="blue" checked={false} />
                        <CheckColor background="red" checked={false} />
                        <CheckColor background="black" checked={false} />
                        <CheckColor background="white" checked={false} />
                      </SizeRow>
                      <SizeRow>
                        <InfoDesc>
                          <strong>TAMANHO:</strong>
                        </InfoDesc>
                        <CheckSize checked={true}>P</CheckSize>
                        <CheckSize checked={false}>M</CheckSize>
                        <CheckSize checked={false}>G</CheckSize>
                        <CheckSize checked={false}>EG</CheckSize>
                        <CheckSize checked={false}>EXG</CheckSize>
                      </SizeRow>
                    </CardInfo>
                  </GridChartCard>
                  <QtdContainer>
                    <QtdInfo>
                      <InfoDesc>
                        <strong>Quantidade:</strong>
                      </InfoDesc>
                      <BtnAct>
                        <AiOutlineMinusCircle />
                      </BtnAct>
                      <Input type="number" style={{ width: 50 }} value={0} />
                      <BtnAct>
                        <AiOutlinePlusCircle />
                      </BtnAct>
                    </QtdInfo>
                    <QtdInfo>
                      <PricePromo>R$ 122,00</PricePromo>
                      <Price>R$ 100,00</Price>
                    </QtdInfo>
                  </QtdContainer>
                </ChartCard>
              </ContainerChart>

              <ContainerChart>
                <TitleChart>Resumo da Compra</TitleChart>
                <ContainerResume>
                  <ContainerResumeInfo>
                    <ResumeInfo>SubTotal (1 Item)</ResumeInfo>
                    <Price>R$ 100,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <ResumeInfo>Desconto</ResumeInfo>
                    <Price>R$ 0,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <ResumeInfo>Frete</ResumeInfo>
                    <Price>R$ 100,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <ResumeInfo>Valor Total</ResumeInfo>
                    <Price>R$ 100,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <FaRegCreditCard /> PAGUE EM ATÉ 6X NO CARTÃO
                  </ContainerResumeInfo>

                  <Discount style={{ marginTop: 20 }}>
                    <strong>Frete e Prazo de Entrega:</strong>
                  </Discount>
                  <ContainerFrete style={{ marginBottom: 10 }}>
                    <MaskInput mask={"99999-999"} placeholder="Insira o CEP" />
                    <BtnCalc>CALCULAR</BtnCalc>
                  </ContainerFrete>

                  <SpaceBtn />
                  <div style={{ width: "100%" }}>
                    <Buttom full={true} theme="dark">
                      <AiOutlineCheck /> FINALIZAR COMPRA
                    </Buttom>
                    <SpaceBtn />
                    <Buttom full={true} theme="gold">
                      <AiOutlineShoppingCart /> CONTINUAR COMPRANDO
                    </Buttom>
                  </div>
                </ContainerResume>
              </ContainerChart>
            </GridChart>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}