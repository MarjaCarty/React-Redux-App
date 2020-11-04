import React from "react";
import img from "../assets/pikachu2.gif";
import styled from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Loading() {
  return (
    <StyledLoading>
      <h1>Loading...</h1>
      <img src={img} />
    </StyledLoading>
  );
}

export default Loading;
