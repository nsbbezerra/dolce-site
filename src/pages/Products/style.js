import styled from "styled-components";
import general from "../../configs/general";

export const ContainerBreadCrumb = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
`;

export const BreadCrumb = styled.span`
  display: block;
  font-family: "Saira Condensed", sans-serif;
  color: #222;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const GridProducts = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-gap: 20px;
`;

export const MenuLateral = styled.nav`
  width: 100%;
  background: ${general.colors.gray};
  padding: 10px;
  height: max-content;
`;

export const CollapseContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Trigger = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.7rem;
  font-weight: 500;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  user-select: none;
`;

export const MenuTitle = styled.h2`
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${general.colors.dark};
`;

export const MenuDesc = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.6rem;
  margin-top: 5x;
  color: #222;
  &:first-child {
    margin-top: 15px;
  }
  &:last-child {
    margin-bottom: 15px;
  }
`;

export const MenuDescButtom = styled.button`
  border: 0;
  background: none;
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.4rem;
  color: #444;
  text-decoration: underline;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const BtnClearFilter = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`;

export const ContainerSectionProducts = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  color: ${general.colors.dark};
  font-family: "Anton", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 30px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid ${general.colors.gold};
`;
