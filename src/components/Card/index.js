import React from "react";
import {
  Card,
  CardContent,
  CardImage,
  CartTitle,
  Price,
  PricePromo,
  ContainerPrice,
  PaymentOpt,
  CardAction,
  ButtonCard,
  ContainerButton,
  ButtonCardFull,
} from "./style";

import general from "../../configs/general";
import { FaSearch, FaCartPlus, FaShoppingBag } from "react-icons/fa";

const CardApp = React.forwardRef((props, ref, ...rest) => (
  <Card ref={ref} {...rest}>
    <CardAction>
      <ContainerButton>
        <ButtonCardFull
          background={general.colors.gold}
          color={general.colors.dark}
          hover={general.colors.goldVariation}
        >
          <FaSearch style={{ marginRight: 5 }} />
          VISUALIZAR
        </ButtonCardFull>
        <ButtonCard
          background={general.colors.dark}
          color={general.colors.light}
          hover={general.colors.darkVariation}
        >
          <FaShoppingBag style={{ marginRight: 5 }} />
          COMPRAR AGORA
        </ButtonCard>
        <ButtonCard
          background={general.colors.dark}
          color={general.colors.light}
          hover={general.colors.darkVariation}
        >
          <FaCartPlus style={{ marginRight: 5 }} />
          ADD AO CARRINHO
        </ButtonCard>
      </ContainerButton>
    </CardAction>
    <CardImage image={props.image} />
    <CardContent>
      {props.title || props.title !== "" ? (
        <CartTitle>{props.title}</CartTitle>
      ) : (
        ""
      )}
      <ContainerPrice>
        {props.discountPrice > 0 ? (
          <>
            <PricePromo>
              {props.discountPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </PricePromo>
            <p style={{ marginLeft: 5, marginRight: 5 }}>-</p>
          </>
        ) : (
          ""
        )}
        {props.price > 0 ? (
          <Price>
            {props.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
        ) : (
          ""
        )}
      </ContainerPrice>
      {props.payOpt || props.payOpt !== "" ? (
        <PaymentOpt>{props.payOpt}</PaymentOpt>
      ) : (
        ""
      )}
    </CardContent>
  </Card>
));

export default CardApp;
