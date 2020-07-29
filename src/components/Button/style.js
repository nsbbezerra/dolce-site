import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.full === true ? "100%" : "max-content")};
  background: ${(props) =>
    props.outlined === true ? "transparent" : props.background};
  color: ${(props) => props.color || "white"};
  border: ${(props) =>
    props.outlined === true ? `1.5px solid ${props.background}` : "0"};
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    filter: brightness(1.075);
  }
  &:active {
    transform: scale(0.98);
    border: ${(props) =>
      props.outlined === true ? `1.5px solid ${props.background}` : "none"};
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: ${(props) => (props.small === true ? "40px" : "50px")};
  height: ${(props) => (props.small === true ? "40px" : "50px")};
  background: ${(props) =>
    props.outlined === true ? "transparent" : props.background};
  filter: brightness(0.97);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 500;
`;
