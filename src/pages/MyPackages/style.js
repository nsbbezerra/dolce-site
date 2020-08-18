import styled from "styled-components";
import general from "../../configs/general";

export const Trigger = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || ""};
  overflow: hidden;
  border-radius: ${general.cssDefault.radius}px;
  height: 65px;
`;

export const GridTrigger = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  color: ${general.colors.dark};
  font-family: "Saira Condensed", sans-serif;
  @media (max-width: 1060px) {
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BtnMore = styled.span`
  display: flex;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.7rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: ${general.cssDefault.radius}px;
  background: ${general.colors.gold};
  color: ${general.colors.dark};
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: ${general.colors.goldVariation};
  }
`;

export const ContainerSteps = styled.div`
  width: 100%;
  padding: 15px;
`;

export const SendCode = styled.a`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  color: #007fff;
  font-size: 1.6rem;
  text-decoration: underline;
  cursor: pointer;
`;
