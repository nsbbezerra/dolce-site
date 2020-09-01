import React, { useEffect } from "react";
import {
  Container,
  CenterContainer,
  FixedLayout,
  Spaced,
  Content,
} from "../../styles/style";
import { TitleCard, ContainerCheckbox, DescCart } from "../Checkout/style";
import { TitleChart } from "../Chart/style";
import { useLocation } from "react-router-dom";
import Collapse from "react-collapsible";
import { FiPackage } from "react-icons/fi";
import {
  Trigger,
  GridTrigger,
  GridContainer,
  BtnMore,
  SendCode,
  ContainerSteps,
} from "./style";
import Steps, { Step } from "@wenmu/react-steps";

export default function MyPackagesApp() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <CenterContainer>
        <FixedLayout>
          <Spaced />
          <Content>
            <TitleChart>MEUS PEDIDOS</TitleChart>
            <ContainerCheckbox>
              <Collapse
                trigger={
                  <Trigger>
                    <GridTrigger>
                      <div>
                        <FiPackage fontSize={50} />
                      </div>
                      <GridContainer>
                        <TitleCard>NÚMERO DO PEDIDO</TitleCard>
                        <DescCart>V1928329012389</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>DATA DO PEDIDO</TitleCard>
                        <DescCart>10/10/1010</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>VALOR DO PEDIDO</TitleCard>
                        <DescCart>R$ 100,00</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>STATUS DO PEDIDO</TitleCard>
                        <DescCart>Em Separação</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <BtnMore>MAIS DETALHES</BtnMore>
                      </GridContainer>
                    </GridTrigger>
                  </Trigger>
                }
              >
                <ContainerSteps>
                  <Steps current={0}>
                    <Step
                      title={<TitleCard>PAGAMENTO</TitleCard>}
                      description={<DescCart>Confirmado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>SEPARAÇÃO</TitleCard>}
                      description={<DescCart>Separado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>ENVIO</TitleCard>}
                      description={<SendCode>PX91019283BR</SendCode>}
                    />
                    <Step title={<TitleCard>CONCLUÍDO</TitleCard>} />
                  </Steps>
                </ContainerSteps>
              </Collapse>
            </ContainerCheckbox>

            <ContainerCheckbox>
              <Collapse
                trigger={
                  <Trigger>
                    <GridTrigger>
                      <div>
                        <FiPackage fontSize={50} />
                      </div>
                      <GridContainer>
                        <TitleCard>NÚMERO DO PEDIDO</TitleCard>
                        <DescCart>V1928329012389</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>DATA DO PEDIDO</TitleCard>
                        <DescCart>10/10/1010</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>VALOR DO PEDIDO</TitleCard>
                        <DescCart>R$ 100,00</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>STATUS DO PEDIDO</TitleCard>
                        <DescCart>Em Separação</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <BtnMore>MAIS DETALHES</BtnMore>
                      </GridContainer>
                    </GridTrigger>
                  </Trigger>
                }
              >
                <ContainerSteps>
                  <Steps current={1}>
                    <Step
                      title={<TitleCard>PAGAMENTO</TitleCard>}
                      description={<DescCart>Confirmado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>SEPARAÇÃO</TitleCard>}
                      description={<DescCart>Cancelado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>ENVIO</TitleCard>}
                      description={<SendCode>PX91019283BR</SendCode>}
                    />
                    <Step title={<TitleCard>CONCLUÍDO</TitleCard>} />
                  </Steps>
                </ContainerSteps>
              </Collapse>
            </ContainerCheckbox>

            <ContainerCheckbox>
              <Collapse
                trigger={
                  <Trigger>
                    <GridTrigger>
                      <div>
                        <FiPackage fontSize={50} />
                      </div>
                      <GridContainer>
                        <TitleCard>NÚMERO DO PEDIDO</TitleCard>
                        <DescCart>V1928329012389</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>DATA DO PEDIDO</TitleCard>
                        <DescCart>10/10/1010</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>VALOR DO PEDIDO</TitleCard>
                        <DescCart>R$ 100,00</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <TitleCard>STATUS DO PEDIDO</TitleCard>
                        <DescCart>Em Separação</DescCart>
                      </GridContainer>
                      <GridContainer>
                        <BtnMore>MAIS DETALHES</BtnMore>
                      </GridContainer>
                    </GridTrigger>
                  </Trigger>
                }
              >
                <ContainerSteps>
                  <Steps current={3}>
                    <Step
                      title={<TitleCard>PAGAMENTO</TitleCard>}
                      description={<DescCart>Confirmado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>SEPARAÇÃO</TitleCard>}
                      description={<DescCart>Separado</DescCart>}
                    />
                    <Step
                      title={<TitleCard>ENVIO</TitleCard>}
                      description={<SendCode>PX91019283BR</SendCode>}
                    />
                    <Step title={<TitleCard>CONCLUÍDO</TitleCard>} />
                  </Steps>
                </ContainerSteps>
              </Collapse>
            </ContainerCheckbox>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
