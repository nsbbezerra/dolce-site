import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.min}px, ${(props) => props.max}px)
  );
  grid-gap: ${(props) => props.gap}px;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
