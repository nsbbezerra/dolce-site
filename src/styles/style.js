import styled from "styled-components";
import general from "../configs/general";

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FixedLayout = styled.div`
  display: block;
  width: 100%;
  max-width: 1380px;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 62px;
`;

export const BtnGhost = styled.button`
  border: 0;
  background: 0;
  font-size: 2.9rem;
  transition: all 0.3s;
  margin-right: 20px;
  margin-top: 2px;
  color: ${general.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${general.colors.darkVariation};
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 875px) {
    margin-right: 0px;
  }
  @media (max-width: 395px) {
    display: none;
  }
`;

export const BtnLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: 0;
  font-size: 3rem;
  font-weight: 500;
  transition: all 0.3s;
  color: ${general.colors.dark};
  font-family: "Roboto", sans-serif;
  color: ${general.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${general.colors.darkVariation};
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 690px) {
    display: none;
  }
`;

export const LabelButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  width: max-content;
  height: 18px;
  background-color: ${general.colors.light};
  color: ${general.colors.dark};
  border-radius: 100%;
  font-size: 9px;
  padding: 2px;
  position: absolute;
  margin-left: -10px;
  margin-top: -3px;
`;

export const Title = styled.h1`
  color: ${general.colors.dark};
  font-family: "Anton", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${general.colors.gold};
`;

export const TitleJumbotron = styled.h1`
  color: ${general.colors.dark};
  font-family: "Saira Condensed", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 660px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 400px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 360px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const CardAvatar = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`;

export const CardMark = styled.div`
  width: 150px;
  height: 110px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`;

export const AvatarImg = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid ${general.colors.dark};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const CardAvatarDescritpion = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Spaced = styled.div`
  width: 100%;
  height: 60px;
`;

export const VejaMaisContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
