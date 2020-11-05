import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/pokeball-input-02.png";
import { connect } from "react-redux";
import { fetchPokemon } from "../store/actions";

const StyledSearch = styled.div`
  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-top: 3%;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 15%;
    padding: 0.5%;
  }

  button {
    width: 38px;
    height: 38px;
    margin: 0 1%;
  }
`;

function SearchBox(props) {
  const [formValue, setFormValue] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setFormValue(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchPokemon(name);
    setFormValue("");
  };

  return (
    <StyledSearch>
      <h2>Search for a Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemon"
          value={formValue}
          onChange={handleChange}
        />
        <button type="submit">
          <img src={img} />
        </button>
      </form>
    </StyledSearch>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchPokemon })(SearchBox);
