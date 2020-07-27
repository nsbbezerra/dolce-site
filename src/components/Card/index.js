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

export default function CardApp({
  title = "",
  discountPrice = 0,
  price = 0,
  image = "",
  payOpt = "",
  ...props
}) {
  return (
    <Card {...props}>
      <CardAction {...props}>
        <ContainerButton {...props}>
          <ButtonCardFull
            background={general.colors.gold}
            color={general.colors.dark}
            {...props}
          >
            <FaSearch style={{ marginRight: 5 }} />
            VISUALIZAR
          </ButtonCardFull>
          <ButtonCard
            background={general.colors.dark}
            color={general.colors.light}
          >
            <FaShoppingBag style={{ marginRight: 5 }} />
            COMPRAR AGORA
          </ButtonCard>
          <ButtonCard
            background={general.colors.dark}
            color={general.colors.light}
            {...props}
          >
            <FaCartPlus style={{ marginRight: 5 }} />
            ADD AO CARRINHO
          </ButtonCard>
        </ContainerButton>
      </CardAction>
      <CardImage image={image} {...props} />
      <CardContent {...props}>
        {title || title !== "" ? <CartTitle>{title}</CartTitle> : ""}
        <ContainerPrice {...props}>
          {discountPrice > 0 ? (
            <>
              <PricePromo>
                {discountPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </PricePromo>
              <p style={{ marginLeft: 5, marginRight: 5 }}>-</p>
            </>
          ) : (
            ""
          )}
          {price > 0 ? (
            <Price>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>
          ) : (
            ""
          )}
        </ContainerPrice>
        {payOpt || payOpt !== "" ? <PaymentOpt>{payOpt}</PaymentOpt> : ""}
      </CardContent>
    </Card>
  );
}
