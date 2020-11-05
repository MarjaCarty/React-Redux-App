import axios from "axios";

export const GET_POKEMON_START = "GET_POKEMON_START";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE";

export const fetchPokemon = (name) => (dispatch) => {
  dispatch({ type: GET_POKEMON_START });

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_POKEMON_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: GET_POKEMON_FAILURE, payload: err.message })
    );
};
