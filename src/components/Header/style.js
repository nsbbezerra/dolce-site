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
  border-top: 1px solid #eee;
  transition: all 0.3s;
  @media (max-width: 860px) {
    display: flex;
    margin-left: ${(props) => (props.active === true ? -100 : 0)}%;
    flex-direction: column;
    margin-top: 0px;
    justify-content: flex-start;
    align-items: baseline;
    width: 45%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    border: 1.5px solid ${general.colors.gold};
    position: fixed;
    left: 0;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const SubMenu = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border: 1.5px solid ${general.colors.gold};
  display: none;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  grid-gap: 15px;
  justify-content: center;
  justify-items: center;
  position: absolute;
  width: 70%;
  left: 15%;
  right: 15%;
  top: 105px;
  padding: 15px;
  transition: all 0.3s;
  @media (max-width: 860px) {
    width: 100%;
    grid-template-columns: 1fr;
    max-height: 95%;
    position: fixed;
    flex-direction: column;
    left: 100%;
    top: -2px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    overflow: auto;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 0px;
  }
`;

export const SubMenuTitle = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  color: ${general.colors.dark};
  margin-bottom: 10px;
  @media (max-width: 860px) {
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
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    background: ${general.colors.gold};
    color: ${general.colors.light};
  }
  @media (max-width: 860px) {
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
  @media (max-width: 860px) {
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
  @media (max-width: 860px) {
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
    border-bottom: 3px solid ${general.colors.gold};
    ${SubMenu} {
      display: grid !important;
    }
  }
  @media (max-width: 860px) {
    height: 45px;
    font-size: 1.7rem;
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
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-bottom: 3px solid ${general.colors.gold};
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
  @media (min-width: 860px) {
    display: none;
  }
`;
