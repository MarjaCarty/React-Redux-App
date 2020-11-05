import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function PokeCardContainer({ pokemonData }) {
  return (
    <StyledContainer>
      <div className="top">
        <img src={pokemonData.sprites.front_default} />
        <div className="name">
          <h2>{pokemonData.name}</h2>
          <hr />
          <h4>
            {pokemonData.types[0].type.name}
            {pokemonData.types[1] ? "/" + pokemonData.types[1].type.name : null}
          </h4>
        </div>
      </div>
      <hr />
      <div className="basic">
        <h2>Basic Info</h2>
        <hr />
        <div>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Base EXP: {pokemonData.base_experience}</p>
        </div>
      </div>
      <div className="abilities">
        <h2>Abilities</h2>
        <hr />
        <div>
          {pokemonData.abilities[0] ? (
            <p>{pokemonData.abilities[0].ability.name}</p>
          ) : null}
          {pokemonData.abilities[1] ? (
            <p>{pokemonData.abilities[1].ability.name}</p>
          ) : null}
          {pokemonData.abilities[2] ? (
            <p>{pokemonData.abilities[2].ability.name}</p>
          ) : null}
        </div>
      </div>
      <div className="base-stats">
        <h2>Base Stats</h2>
        <hr />
        <div className="stats">
          <div>
            <p>Hit Points: {pokemonData.stats[0]["base_stat"]}</p>
            <p>Attack: {pokemonData.stats[1]["base_stat"]}</p>
            <p>Defense {pokemonData.stats[2]["base_stat"]}</p>
          </div>
          <div>
            <p>Speed: {pokemonData.stats[5]["base_stat"]}</p>
            <p>Special Attack: {pokemonData.stats[3]["base_stat"]}</p>
            <p>Special Defense: {pokemonData.stats[4]["base_stat"]}</p>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default PokeCardContainer;
