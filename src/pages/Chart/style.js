import styled from "styled-components";
import general from "../../configs/general";

export const GridChart = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 450px;
  grid-gap: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 350px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerChart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerResume = styled.div`
  width: 100%;
  border-radius: ${general.cssDefault.radius}px;
  background: ${general.colors.gray};
  padding: 10px;
`;

export const TitleChart = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${general.colors.dark};
  margin-bottom: 20px;
`;

export const ChartCard = styled.div`
  width: 100%;
  border-radius: ${general.cssDefault.radius}px;
  border: 1px solid ${general.colors.gold};
  padding: 15px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridChartCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-gap: 15px;
  border-bottom: 1.5px solid ${general.colors.gray};
  padding-bottom: 15px;
`;

export const CardImage = styled.div`
  width: 130px;
  height: 130px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const CardInfo = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${general.colors.dark};
`;

export const InfoDesc = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.3rem;
  color: #555;
  margin-right: 5px;
`;

export const SizeRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CheckColor = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  background: ${(props) => props.background || ""};
  border-radius: ${general.cssDefault.radius}px;
  margin-right: 5px;
  border-width: ${(props) => (props.checked === true ? 1.5 : 1)}px;
  border-style: ${(props) => (props.checked === true ? "solid" : "dashed")};
  border-color: ${(props) =>
    props.checked === true ? general.colors.gold : general.colors.dark};
  cursor: pointer;
  &:hover {
    border-width: 1.5px;
    border-style: solid;
    border-color: ${general.colors.dark};
  }
`;

export const CheckSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Saira Condensed", sans-serif;
  font-size: 12px;
  color: #555;
  width: 25px;
  height: 25px;
  background: ${(props) => props.background || ""};
  border-radius: ${general.cssDefault.radius}px;
  margin-right: 5px;
  border-width: ${(props) => (props.checked === true ? 1.5 : 1)}px;
  border-style: ${(props) => (props.checked === true ? "solid" : "dashed")};
  border-color: ${(props) =>
    props.checked === true ? general.colors.gold : general.colors.dark};
  cursor: pointer;
  &:hover {
    border-width: 1.5px;
    border-style: solid;
    border-color: ${general.colors.dark};
  }
`;

export const QtdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

export const QtdInfo = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  &:last-child {
    justify-content: flex-end;
  }
`;

export const PricePromo = styled.span`
  display: block;
  color: #777;
  text-decoration: line-through;
  font-size: 20px;
  font-weight: 400;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
  margin-right: 15px;
`;

export const Price = styled.span`
  display: block;
  color: ${general.colors.dark};
  text-decoration: unset;
  font-size: 20px;
  font-weight: 600;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
`;

export const ResumeInfo = styled.span`
  display: block;
  color: #333;
  text-decoration: unset;
  font-size: 20px;
  font-weight: 400;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
`;

export const Input = styled.input`
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
`;

export const BtnAct = styled.button`
  border: 0;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 10px;
  margin-right: 10px;
  &:active {
    transform: scale(0.97);
  }
`;

export const ContainerResumeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1.5px solid #ccc;
  font-weight: 400;
  font-size: 20px;
  font-family: "Saira Condensed", sans-serif;
  line-height: 25px;
  &:last-child {
    border-bottom: 0;
  }
`;

export const SpaceBtn = styled.div`
  width: 100%;
  height: 15px;
`;
