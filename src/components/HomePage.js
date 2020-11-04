import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import img from "../assets/pikachu.gif";

const StyledHomePage = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <h1>A PokeAPI Project</h1>
      <SearchBox />
      <img src={img} />
    </StyledHomePage>
  );
}
