import styled from "styled-components";
import colors from "../../configs/general";

export const CardAction = styled.div`
  width: 250px;
  height: 280px;
  background: rgba(255, 255, 255, 0.3);
  display: none;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: 50;
  transition: all 0.3s;
`;

export const ContainerButton = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const ButtonCard = styled.div`
  width: 100%;
  height: 40px;
  background: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.2rem;
  transition: all 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonCardFull = styled.div`
  width: 100%;
  height: 40px;
  grid-column-start: 1;
  grid-column-end: 3;
  background: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.3rem;
  transition: all 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 365px;
  border: 1px solid #eee;
  transition: all 0.3s;
  &:hover {
    ${CardAction} {
      transition: all 0.3s;
      display: flex;
    }
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
