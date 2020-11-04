import {
  GET_POKEMON_START,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  pokemonData: [],
  error: "",
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonData: action.payload,
      };
    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
