import styled from "styled-components";
import general from "../../configs/general";
import InputMask from "react-input-mask";

export const Trigger = styled.div`
  display: flex;
  height: 60px;
  padding: 15px;
  align-items: center;
  background: ${general.colors.gray};
  border-radius: ${general.cssDefault.radius}px;
  font-weight: 600;
  font-family: "Saira Condensed", sans-serif;
  font-size: 2rem;
  color: ${general.colors.dark};
  cursor: pointer;
`;

export const ContainerCheckbox = styled.div`
  border: 1px solid ${general.colors.gray};
  border-radius: ${general.cssDefault.radius}px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  border: 1px solid ${general.colors.gray};
  border-radius: ${general.cssDefault.radius}px;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  height: max-content;
  align-items: center;
  border: 1px solid ${general.colors.gray};
  border-radius: ${general.cssDefault.radius}px;
  padding: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CreditCardImage = styled.img`
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Label = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  line-height: 30px;
`;

export const MaskInput = styled(InputMask)`
  width: 100%;
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
`;

export const Input = styled.input`
  width: 100%;
  border-radius: ${general.cssDefault.radius}px;
  padding: 7px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 16px;
  border: 1px solid ${general.colors.dark};
`;

export const GridLogradouro = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 10px;
`;

export const GridCity = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px 100px;
  grid-gap: 10px;
  @media (max-width: 710px) {
    grid-template-columns: 1fr 100px 60px;
  }
  @media (max-width: 390px) {
    grid-template-columns: 1fr 80px 40px;
  }
`;

export const GridCardNumber = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const GridTransfer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const TitleCard = styled.span`
  color: #333;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
`;

export const DescCart = styled.span`
  color: #555;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
`;

export const GridCreditCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  grid-gap: 15px;
  justify-content: center;
  justify-items: center;
  @media (max-width: 765px) {
    margin-bottom: 10px;
  }
`;

export const HeaderTransfer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${general.colors.gray};
`;

export const ImgBank = styled.img`
  height: 40px;
  @media (max-width: 800px) {
    height: inherit;
    width: 80%;
  }
`;
