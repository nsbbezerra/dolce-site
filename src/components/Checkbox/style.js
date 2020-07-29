import styled from "styled-components";
import general from "../../configs/general";

export const Label = styled.label`
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.5rem;
  color: #222;
  user-select: none;
  &::before {
    content: "✓";
    font-size: 15px;
    border-radius: ${general.cssDefault.radius}px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid ${general.colors.gold};
    background: ${(props) =>
      props.checked === true ? general.colors.gold : ""};
    margin-right: 7px;
    margin-bottom: -4px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    color: ${(props) =>
      props.checked === true ? general.colors.dark : "transparent"};
  }
`;

export const Checkbox = styled.input`
  display: none;
`;
