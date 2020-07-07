import styled from "styled-components";
import general from "../configs/general";

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FixedLayout = styled.div`
  width: 100%;
  max-width: 1380px;
`;

export const Banner = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 106px;
`;

export const BtnGhost = styled.button`
  border: 0;
  background: 0;
  font-size: 35px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(1.075);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const BtnLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: 0;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  &:hover {
    filter: brightness(1.075);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const LabelButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  width: max-content;
  height: 18px;
  background-color: ${general.colors.dark};
  color: ${general.colors.light};
  border-radius: 100%;
  font-size: 8.5px;
  padding: 2px;
  position: absolute;
  margin-left: -8px;
`;
