import React from "react";
import {
  Footer,
  FooterFixed,
  GridInfo,
  ContainterInfo,
  GridFooter,
  ContainerFooter,
  TitleFooter,
  ContainerMedia,
  FooterCopy,
} from "./style";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaShippingFast, FaRegCreditCard } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

export default function FooterApp() {
  return (
    <>
      <Footer>
        <FooterFixed>
          <GridInfo>
            <ContainterInfo>
              <FaShippingFast fontSize={30} style={{ marginRight: 15 }} />
              ENTREGAMOS PARA TODO O BRASIL
            </ContainterInfo>
            <ContainterInfo>
              <FaRegCreditCard fontSize={30} style={{ marginRight: 15 }} />
              PARCELE EM ATÉ 6X NO CARTÃO
            </ContainterInfo>
          </GridInfo>

          <GridFooter>
            <ContainerFooter>
              <TitleFooter>INSTITUCIONAL</TitleFooter>
              <Link className="link-footer">Sobre a Dolce Encanto</Link>
              <Link className="link-footer">Seja nosso Parceiro</Link>
              <Link className="link-footer">Programa de Afiliados</Link>
              <Link className="link-footer">Trabalhe Conosco</Link>
              <Link className="link-footer">Marketplace Zattini</Link>
              <Link className="link-footer">Eventos</Link>
            </ContainerFooter>
            <ContainerFooter>
              <TitleFooter>AJUDA</TitleFooter>
              <Link className="link-footer">Entregas</Link>
              <Link className="link-footer">Pagamentos</Link>
              <Link className="link-footer">Trocas e devoluções</Link>
              <Link className="link-footer">Arrependimento</Link>
              <Link className="link-footer">Cancelamentos</Link>
              <Link className="link-footer">Meus Pedidos</Link>
            </ContainerFooter>
            <ContainerFooter>
              <TitleFooter>POLÍTICAS</TitleFooter>
              <Link className="link-footer">Regulamentos</Link>
              <Link className="link-footer">Políticas de Privacidade</Link>
            </ContainerFooter>
            <ContainerFooter>
              <TitleFooter>CONTATO</TitleFooter>
              <Link className="link-footer">WhatsApp</Link>
              <Link className="link-footer">Email</Link>
              <Link className="link-footer">Telefone</Link>
            </ContainerFooter>
            <ContainerFooter>
              <TitleFooter>REDES SOCIAIS</TitleFooter>
              <ContainerMedia>
                <a href="/" className="link-media">
                  <AiOutlineFacebook />
                </a>
                <a href="/" className="link-media">
                  <AiOutlineInstagram />
                </a>
                <a href="/" className="link-media">
                  <AiOutlineTwitter />
                </a>
              </ContainerMedia>
            </ContainerFooter>
          </GridFooter>
        </FooterFixed>
      </Footer>
      <FooterCopy>
        <span>
          <AiOutlineCopyrightCircle style={{ marginRight: 15 }} />
          Dolce Encanto 2020 - Desenvolvido por: NK Informática
        </span>
      </FooterCopy>
    </>
  );
}
