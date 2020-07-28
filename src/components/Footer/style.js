import styled from "styled-components";
import general from "../../configs/general";

export const Footer = styled.footer`
  width: 100%;
  background-color: ${general.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FooterFixed = styled.div`
  width: 100%;
  max-width: 1380px;
`;

export const GridInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-gap: 15px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #777;
`;

export const ContainterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Saira Condensed", sans-serif;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 15px;
  color: ${general.colors.dark};
`;

export const GridFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-gap: 15px;
  justify-content: center;
  justify-items: center;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const TitleFooter = styled.span`
  display: block;
  color: ${general.colors.dark};
  font-family: "Anton", sans-serif;
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

export const ContainerMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterCopy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${general.colors.gold};
  color: ${general.colors.dark};
  padding: 18px;

  span {
    display: block;
    font-size: 2rem;
    font-family: "Saira Condensed", sans-serif;
  }
`;
