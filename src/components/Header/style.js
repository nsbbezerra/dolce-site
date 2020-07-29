import styled from "styled-components";
import { Link } from "react-router-dom";
import general from "../../configs/general";

export const Menu = styled.nav`
  display: ${(props) => (props.active === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3px;
  padding-top: 10px;
  padding-bottom: 5px;
  border-top: 1px solid ${general.colors.goldVariation};
  transition: all 0.3s;
  @media (max-width: 950px) {
    display: flex;
    margin-left: ${(props) => (props.active === true ? -120 : 0)}%;
    flex-direction: column;
    top: 46px;
    justify-content: flex-start;
    align-items: baseline;
    width: 100%;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border: 1.5px solid ${general.colors.gold};
    position: fixed;
    left: 0;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    padding-top: 0;
    padding-bottom: 0;
    overflow: auto;
  }
`;

export const SubMenu = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border: 1.5px solid ${general.colors.gold};
  display: none;
  flex-direction: column;
  position: absolute;
  width: 90%;
  left: 5%;
  right: 5%;
  top: 105px;
  height: 75vh;
  padding: 15px;
  transition: all 0.3s;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  overflow: auto;
  border-bottom-left-radius: ${general.cssDefault.radius}px;
  border-bottom-right-radius: ${general.cssDefault.radius}px;
  @media (max-width: 950px) {
    width: 100%;
    grid-template-columns: 1fr;
    height: 85vh;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: -2px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    overflow: auto;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 0px;
  }
`;

export const SubMenuTitle = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${general.colors.dark};
  margin-bottom: 10px;
  @media (max-width: 950px) {
    padding: 20px;
  }
`;

export const SubMenuLink = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  height: 30px;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 950px) {
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SubMenuItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: 0;
  }
  @media (max-width: 950px) {
    border-right: 0;
  }
`;

export const MenuItems = styled.li`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const MenuItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  color: #222;
  padding-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${general.colors.light};
    border-bottom: 3px solid ${general.colors.light};
  }
  @media (max-width: 950px) {
    height: 45px;
    font-size: 1.7rem;
    border-bottom: 1px solid ${general.colors.gray};
    &:hover {
      border: 0;
      background: ${general.colors.dark};
      color: ${general.colors.light};
    }
  }
`;

export const MenuItemExtra = styled.span`
  display: none;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  background: ${general.colors.gold};
  cursor: pointer;
  transition: all 0.3s;
  color: ${general.colors.dark};
  padding-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${general.colors.light};
    border-bottom: 3px solid ${general.colors.light};
  }
  @media (max-width: 690px) {
    display: flex;
    height: 45px;
    font-size: 1.7rem;
    border-bottom: 1px solid ${general.colors.gray};
    &:hover {
      border: 0;
      background: ${general.colors.goldVariation};
      color: ${general.colors.dark};
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const MenuItemMenu = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 0.5px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${general.colors.dark};
  padding-bottom: 5px;
  user-select: none;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${general.colors.light};
    border-bottom: 3px solid ${general.colors.light};
    ${SubMenu} {
      display: flex;
    }
  }
  @media (max-width: 950px) {
    height: 45px;
    font-size: 1.7rem;
    border-bottom: 1px solid ${general.colors.gray};
    &:hover {
      border: 0;
      background: ${general.colors.gold};
      color: ${general.colors.light};
    }
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  color: #222;
  padding-bottom: 5px;
  user-select: none;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${general.colors.light};
    border-bottom: 3px solid ${general.colors.light};
  }
`;

export const MenuBarButtom = styled.button`
  display: flex;
  border: 0;
  background: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  color: ${general.colors.dark};
  @media (min-width: 950px) {
    display: none;
  }
`;

export const ContainerOfCarrousel = styled.div`
  width: 100%;
  height: max-content;
  border-bottom: 2px solid ${general.colors.gold};
  padding-bottom: 5px;
`;

export const CarrouselContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  transition: all 0.3s;
  border-radius: ${general.cssDefault.radius}px;
  &:hover {
    background: ${general.colors.gray};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const AvatarImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

export const CarrouselDescritpion = styled.span`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${general.colors.dark};
`;

export const ContainerContentMenu = styled.div`
  width: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-gap: 15px;
  justify-content: center;
  justify-items: center;
`;

export const ContainerInfoMenu = styled.div`
  width: 100%;
`;
