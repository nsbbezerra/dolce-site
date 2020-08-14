import styled from "styled-components";
import general from "../../configs/general";
import InputMask from "react-input-mask";

export const GridProduct = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-gap: 50px;
  @media (max-width: 1085px) {
    grid-template-columns: 1fr 300px;
  }
  @media (max-width: 915px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const GridCheckout = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  @media (max-width: 915px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-gap: 15px;
    justify-content: center;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Saira Condensed", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${general.colors.dark};
`;

export const TitleDesc = styled.h1`
  font-family: "Saira Condensed", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${general.colors.dark};
`;

export const RefProduct = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.3rem;
  color: #555;
`;

export const Description = styled.span`
  display: block;
  width: 100%;
  text-align: justify;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.5rem;
  color: #444;
`;

export const ImgProduct = styled.div`
  width: 75vw;
  height: 70vh;
  background-image: url(${(props) => props.image || ""});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImgProductDot = styled.div`
  width: 50px;
  height: 40px;
  background-image: url(${(props) => props.image || ""});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PriceAct = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: ${general.colors.dark};
`;

export const PricePromo = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #555;
  text-decoration: line-through;
`;

export const Discount = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #555;
  user-select: none;
`;

export const DateRef = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #555;
  user-select: none;
`;

export const ColorContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${(props) => props.background || ""};
  border: 1px solid ${general.colors.dark};
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorInfoContainer = styled.div`
  width: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: ${general.cssDefault.radius}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: ${(props) => (props.disable === true ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disable === true ? 0.5 : 1)};
  background: ${(props) => (props.check === true ? general.colors.gray : "")};
  &:hover {
    transform: ${(props) =>
      props.disable === true ? "scale(1)" : "scale(1.02)"};
  }
  &:active {
    transform: scale(1);
  }
`;

export const InfoColor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.5rem;
  color: ${(props) =>
    props.disponible === true ? general.colors.dark : general.colors.error};
`;

export const SizeInfoContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  border-radius: ${general.cssDefault.radius}px;
  padding-bottom: 5px;
  flex-direction: column;
  cursor: ${(props) => (props.disable === true ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disable === true ? 0.5 : 1)};
  background: ${(props) => (props.check === true ? general.colors.gray : "")};
  &:hover {
    transform: ${(props) =>
      props.disable === true ? "scale(1)" : "scale(1.02)"};
  }
  &:active {
    transform: scale(1);
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid ${general.colors.dark};
  color: #222;
  transition: all 0.3s;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.5rem;
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  width: 100%;
  background-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MaskInput = styled(InputMask)`
  width: 60%;
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
`;

export const Input = styled.input`
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
  resize: none;
`;

export const BtnCalc = styled.button`
  width: 38%;
  border: none;
  background: none;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${general.cssDefault.radius}px;
  background-color: ${general.colors.dark};
  color: ${general.colors.light};
  font-family: "Saira Condensed", sans-serif;
  font-size: 17.5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${general.colors.darkVariation};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const ContainerFrete = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #ccc;
  margin-top: 40px;
`;

export const ContainerDescriptionTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #ccc;
`;

export const GridDescription = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const GridAvaliation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-gap: 15px;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const AvaliationVal = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 4rem;
  color: ${general.colors.dark};
  margin-right: 10px;
`;

export const RowQtd = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const CommentContainer = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 15px;
  border-radius: ${general.cssDefault.radius}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;
