import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import Pokemon from "./components/Pokemon/Pokemon";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
