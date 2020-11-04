import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import PokemonCardContainer from "./PokeCardContainer";

const StyledHomePage = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <h1>A PokeAPI Project</h1>
      <SearchBox />
      <PokemonCardContainer />
    </StyledHomePage>
  );
}
