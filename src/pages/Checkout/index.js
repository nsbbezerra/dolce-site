import React, { useState, useEffect } from "react";
import {
  Container,
  CenterContainer,
  FixedLayout,
  Spaced,
  Content,
} from "../../styles/style";
import {
  Trigger,
  ContainerCheckbox,
  ContentContainer,
  InfoContainer,
  Label,
  Input,
  GridLogradouro,
  MaskInput,
  GridCity,
  RowContainer,
  CreditCardImage,
  TitleCard,
  DescCart,
  GridCreditCard,
  GridCardNumber,
  GridTransfer,
  HeaderTransfer,
  ImgBank,
} from "./style";
import {
  GridChart,
  TitleChart,
  ContainerChart,
  ContainerResume,
  ContainerResumeInfo,
  ResumeInfo,
  Price,
} from "../Chart/style";
import Collapse from "react-collapsible";
import Checkbox from "../../components/Checkbox/index";
import { FaCreditCard, FaMapMarkerAlt, FaSave, FaCheck } from "react-icons/fa";
import { AiFillBank, AiOutlinePlus } from "react-icons/ai";
import Buttom from "../../components/Button/index";
import { useLocation } from "react-router-dom";

import card from "../../assets/card.png";
import bb from "../../assets/bb.svg";
import ba from "../../assets/ba.svg";
import bradesco from "../../assets/bradesco.svg";
import caixa from "../../assets/caixa.svg";
import sicredi from "../../assets/sicredi.svg";
import creditCard from "../../assets/credit-card.svg";

export default function CheckoutApp() {
  const [payOpt, setPayOpt] = useState("");

  function handlePayOpt(opt) {
    setPayOpt(opt);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <CenterContainer>
        <FixedLayout>
          <Content>
            <Spaced />
            <GridChart>
              <ContainerChart>
                <TitleChart>Forma de Pagamento</TitleChart>
                <ContainerCheckbox>
                  <Collapse
                    trigger={
                      <Trigger onClick={() => handlePayOpt("card")}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Checkbox
                            onChange={() => {}}
                            checked={payOpt === "card" ? true : false}
                          />
                          <FaCreditCard
                            fontSize={30}
                            style={{ marginLeft: 30, marginRight: 15 }}
                          />
                          CARTÃO DE CRÉDITO
                        </div>
                      </Trigger>
                    }
                    open={payOpt === "card" ? true : false}
                  >
                    <ContentContainer>
                      <GridCreditCard>
                        <RowContainer>
                          <Checkbox />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CreditCardImage
                              alt="Credit Card"
                              src={creditCard}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <TitleCard>MASTERCARD</TitleCard>
                              <DescCart>**** **** **** 1234</DescCart>
                            </div>
                          </div>
                        </RowContainer>
                        <RowContainer>
                          <Checkbox />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CreditCardImage
                              alt="Credit Card"
                              src={creditCard}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <TitleCard>MASTERCARD</TitleCard>
                              <DescCart>**** **** **** 1234</DescCart>
                            </div>
                          </div>
                        </RowContainer>
                      </GridCreditCard>
                      <Buttom small={true}>
                        <AiOutlinePlus /> ADICIONAR NOVO CARTÃO
                      </Buttom>

                      <InfoContainer style={{ marginTop: 10 }}>
                        <Label>Número do Cartão de Crédito</Label>
                        <MaskInput
                          mask="9999 - 9999 - 9999 - 9999"
                          value="9999999999999999"
                        />
                        <GridCardNumber>
                          <div>
                            <Label>Mês</Label>
                            <Input value="300" type="number" />
                          </div>
                          <div>
                            <Label>Ano</Label>
                            <Input value="300" type="number" />
                          </div>
                          <div>
                            <Label>Cod. Segurança</Label>
                            <Input value="300" type="number" />
                          </div>
                        </GridCardNumber>
                        <Buttom small={true}>
                          <FaSave /> SALVAR
                        </Buttom>
                      </InfoContainer>
                    </ContentContainer>
                  </Collapse>
                </ContainerCheckbox>

                <ContainerCheckbox>
                  <Collapse
                    trigger={
                      <Trigger onClick={() => handlePayOpt("transfer")}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Checkbox
                            onChange={() => {}}
                            checked={payOpt === "transfer" ? true : false}
                          />
                          <AiFillBank
                            fontSize={30}
                            style={{ marginLeft: 30, marginRight: 15 }}
                          />
                          TRANSFERÊNCIA BANCÁRIA
                        </div>
                      </Trigger>
                    }
                    open={payOpt === "transfer" ? true : false}
                  >
                    <ContentContainer>
                      <GridTransfer>
                        <InfoContainer>
                          <HeaderTransfer>
                            <ImgBank alt="Dolce Encanto" src={bb} />
                          </HeaderTransfer>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <DescCart>
                              <strong>Agência:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Conta Corrente:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Dolce Encanto</strong>
                            </DescCart>
                          </div>
                        </InfoContainer>
                        <InfoContainer>
                          <HeaderTransfer>
                            <ImgBank alt="Dolce Encanto" src={bradesco} />
                          </HeaderTransfer>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <DescCart>
                              <strong>Agência:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Conta Corrente:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Dolce Encanto</strong>
                            </DescCart>
                          </div>
                        </InfoContainer>
                        <InfoContainer>
                          <HeaderTransfer>
                            <ImgBank alt="Dolce Encanto" src={ba} />
                          </HeaderTransfer>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <DescCart>
                              <strong>Agência:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Conta Corrente:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Dolce Encanto</strong>
                            </DescCart>
                          </div>
                        </InfoContainer>
                        <InfoContainer>
                          <HeaderTransfer>
                            <ImgBank alt="Dolce Encanto" src={caixa} />
                          </HeaderTransfer>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <DescCart>
                              <strong>Agência:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Conta Corrente:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Dolce Encanto</strong>
                            </DescCart>
                          </div>
                        </InfoContainer>
                        <InfoContainer>
                          <HeaderTransfer>
                            <ImgBank alt="Dolce Encanto" src={sicredi} />
                          </HeaderTransfer>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <DescCart>
                              <strong>Agência:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Conta Corrente:</strong> 9999-9
                            </DescCart>
                            <DescCart>
                              <strong>Dolce Encanto</strong>
                            </DescCart>
                          </div>
                        </InfoContainer>
                      </GridTransfer>
                    </ContentContainer>
                  </Collapse>
                </ContainerCheckbox>

                <ContainerCheckbox>
                  <Collapse
                    trigger={
                      <Trigger>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaMapMarkerAlt
                            fontSize={30}
                            style={{ marginRight: 15 }}
                          />
                          ENDEREÇO DE ENTREGA
                        </div>
                      </Trigger>
                    }
                    open={true}
                  >
                    <ContentContainer>
                      <InfoContainer>
                        <Checkbox checked={true}>Usar este endereço</Checkbox>
                        <GridLogradouro>
                          <div>
                            <Label>Logradouro</Label>
                            <Input value="Av. Espírito Santo" />
                          </div>
                          <div>
                            <Label>Número</Label>
                            <Input value="300" />
                          </div>
                        </GridLogradouro>
                        <Label>Complemento</Label>
                        <Input value="300" />
                        <GridCity>
                          <div>
                            <Label>Cidade</Label>
                            <Input value="Pedro Afonso" />
                          </div>
                          <div>
                            <Label>CEP</Label>
                            <MaskInput mask="99.999-999" value="77710000" />
                          </div>
                          <div>
                            <Label>UF</Label>
                            <Input value="TO" maxLength={2} />
                          </div>
                        </GridCity>
                      </InfoContainer>
                      <InfoContainer>
                        <Checkbox checked={true}>Usar este endereço</Checkbox>
                        <GridLogradouro>
                          <div>
                            <Label>Logradouro</Label>
                            <Input value="Av. Espírito Santo" />
                          </div>
                          <div>
                            <Label>Número</Label>
                            <Input value="300" />
                          </div>
                        </GridLogradouro>
                        <Label>Complemento</Label>
                        <Input value="300" />
                        <GridCity>
                          <div>
                            <Label>Cidade</Label>
                            <Input value="Pedro Afonso" />
                          </div>
                          <div>
                            <Label>CEP</Label>
                            <MaskInput mask="99.999-999" value="77710000" />
                          </div>
                          <div>
                            <Label>UF</Label>
                            <Input value="TO" maxLength={2} />
                          </div>
                        </GridCity>
                      </InfoContainer>
                      <Buttom small={true}>
                        <AiOutlinePlus /> ADICIONAR NOVO ENDEREÇO
                      </Buttom>
                    </ContentContainer>
                  </Collapse>
                </ContainerCheckbox>
              </ContainerChart>

              <ContainerChart>
                <TitleChart>Resumo da Compra</TitleChart>
                <ContainerResume>
                  <ContainerResumeInfo>
                    <ResumeInfo>VALOR DA COMPRA</ResumeInfo>
                    <Price>R$ 100,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <ResumeInfo>ENVIO</ResumeInfo>
                    <Price>R$ 0,00</Price>
                  </ContainerResumeInfo>
                  <ContainerResumeInfo>
                    <ResumeInfo>TOTAL</ResumeInfo>
                    <Price>R$ 100,00</Price>
                  </ContainerResumeInfo>
                  <Spaced />
                  <Buttom full={true} theme="success">
                    <FaCheck />
                    FINALIZAR COMPRA
                  </Buttom>
                </ContainerResume>
              </ContainerChart>
            </GridChart>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
