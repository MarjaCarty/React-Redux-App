import React from "react";
import img from "../assets/pokeapi_256.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0;
  padding: 2%;
  max-width: 100%;
  background-color: #252d95;

  img {
    display: block;
    margin: 0 auto;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={img} />
    </StyledHeader>
  );
}
