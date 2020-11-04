import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { connect } from "react-redux";

function App({ isLoading, error, pokemonData }) {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    pokemonData: state.pokemonData,
  };
};

export default connect(mapStateToProps, {})(App);
