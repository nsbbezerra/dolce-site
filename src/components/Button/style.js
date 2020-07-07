import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.full === true ? "100%" : "")};
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  width: ${(props) => (props.small === true ? "30px" : "40px")};
  height: ${(props) => (props.small === true ? "30px" : "40px")};
  background: ${(props) =>
    props.outlined === true ? "transparent" : props.background};
  filter: brightness(0.97);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
`;
