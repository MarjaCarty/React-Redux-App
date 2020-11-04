import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PokeCardContainer() {
  return (
    <StyledContainer>
      <div className="top">
        <img src={} />
        <div className="name"></div>
      </div>
      <hr />
      <div className="basic">
        <h2>Basic Info</h2>
        <hr />
        <div>
          <p>Height:</p>
          <p>Weight:</p>
          <p>Base EXP:</p>
        </div>
      </div>
      <div className="abilities">
        <h2>Abilities</h2>
        <hr />
        <div></div>
      </div>
      <div className="base-stats">
        <h2>Base Stats</h2>
        <hr />
        <div className="stats">
          <div>
            <p>Hit Points:</p>
            <p>Attack:</p>
            <p>Defense</p>
          </div>
          <div>
            <p>Speed:</p>
            <p>Special Attack:</p>
            <p>Special Defense:</p>
          </div>
        </div>
      </div>
      <div className="forms">
        <h2>Forms</h2>
        <hr />
        <div className="forms-inner">
          <span>----&gt;</span>
          <span>----&gt;</span>
        </div>
      </div>
    </StyledContainer>
  );
}
