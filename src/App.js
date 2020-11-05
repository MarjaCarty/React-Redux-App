import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import Error from "./components/Error";
import PokeCardContainer from "./components/PokeCardContainer";
import { connect } from "react-redux";

function App({ isLoading, error, pokemonData }) {
  if (!isLoading && pokemonData.length === 0 && !error) {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    );
  } else if (isLoading && pokemonData.length === 0 && !error) {
    return (
      <div>
        <Header />
        <Loading />
      </div>
    );
  } else if (!isLoading && pokemonData.length === 0 && error) {
    return (
      <div>
        <Header />
        <Error />
      </div>
    );
  } else if (!isLoading && pokemonData && !error) {
    console.log(pokemonData);
    return (
      <div>
        <Header />
        <PokeCardContainer pokemonData={pokemonData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    pokemonData: state.pokemonData,
  };
};

export default connect(mapStateToProps, {})(App);
