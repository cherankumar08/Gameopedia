import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import DataToBeDisplay from "./DataToBeDisplay";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/home/Home";
import GameList from "./GameList";
import GameDetailsMain from "./pages/detailspage/GameDetailsMain";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
