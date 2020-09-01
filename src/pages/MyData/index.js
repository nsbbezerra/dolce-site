import React, { useEffect } from "react";
import {
  Container,
  CenterContainer,
  FixedLayout,
  Spaced,
  Content,
} from "../../styles/style";
import { GridName, GridDate } from "./style";
import {
  Label,
  Input,
  MaskInput,
  InfoContainer,
  TitleCard,
  GridCity,
  GridLogradouro,
} from "../Checkout/style";
import { TitleChart } from "../Chart/style";
import { FaSave } from "react-icons/fa";
import Buttom from "../../components/Button/index";
import { useLocation } from "react-router-dom";

export default function MyDataApp() {
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
            <TitleChart>MEUS DADOS</TitleChart>
            <InfoContainer>
              <TitleCard>INFORMAÇÕES PESSOAIS</TitleCard>
              <GridName>
                <div>
                  <Label>NOME</Label>
                  <Input />
                </div>
                <div>
                  <Label>SOBRENOME</Label>
                  <Input />
                </div>
              </GridName>
              <GridDate>
                <div>
                  <Label>CPF</Label>
                  <MaskInput mask="999.999.999-99" />
                </div>
                <div>
                  <Label>RG</Label>
                  <Input />
                </div>
                <div>
                  <Label>DATA DE NASCIMENTO</Label>
                  <MaskInput mask="99/99/9999" />
                </div>
              </GridDate>
              <div style={{ height: 20 }} />
              <Buttom>
                <FaSave /> SALVAR ALTERAÇÕES
              </Buttom>
              <Spaced />
              <TitleCard>ENDEREÇO</TitleCard>
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
              <div style={{ height: 20 }} />
              <Buttom>
                <FaSave /> SALVAR ALTERAÇÕES
              </Buttom>
            </InfoContainer>
          </Content>
        </FixedLayout>
      </CenterContainer>
    </Container>
  );
}
