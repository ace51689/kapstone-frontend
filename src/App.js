import "./App.css";
import { Switch, Route } from "react-router-dom"
import Home from "./views/Home"
import EntertainmentList from "./views/EntertainmentList";
import MoviePage from "./views/MoviePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={EntertainmentList} />
        <Route path="/movie" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
