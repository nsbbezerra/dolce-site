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
} from "./style";

export default function CardApp({
  title = "",
  discountPrice = 0,
  price = 0,
  image = "",
  payOpt = "",
}) {
  return (
    <Card>
      <CardImage image={image} />
      <CardContent>
        {title || title !== "" ? <CartTitle>{title}</CartTitle> : ""}
        <ContainerPrice>
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
