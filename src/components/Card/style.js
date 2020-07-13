import styled from "styled-components";
import colors from "../../configs/general";

export const Card = styled.div`
  width: 250px;
  height: 365px;
  border: 1px solid #ddd;
  border-radius: ${colors.cssDefault.radius}px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  border-top-left-radius: ${colors.cssDefault.radius}px;
  border-top-right-radius: ${colors.cssDefault.radius}px;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 83px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const CartTitle = styled.span`
  display: block;
  color: ${colors.colors.dark};
  font-weight: 500;
  font-size: 1.6rem;
  font-family: "Anton", sans-serif;
`;

export const ContainerPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricePromo = styled.span`
  display: block;
  color: #777;
  text-decoration: line-through;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
`;

export const Price = styled.span`
  display: block;
  color: ${colors.colors.dark};
  text-decoration: unset;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
`;

export const PaymentOpt = styled.span`
  font-size: 1.4rem;
  color: ${colors.colors.dark};
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
`;
