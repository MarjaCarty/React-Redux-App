import React from "react";
import styled from "styled-components";
import img from "../assets/pikachu.gif";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PokeCardContainer() {
  return (
    <StyledContainer>
      <img src={img} />
    </StyledContainer>
  );
}
