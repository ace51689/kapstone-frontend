import "./App.css";
import { Switch, Route } from "react-router-dom"
import Home from "./views/Home"
import EntertainmentList from "./views/EntertainmentList";
import MoviePage from "./views/MoviePage";
import TelevisionPage from "./views/TelevisionPage"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route path="/browse" component={EntertainmentList} />
        
        <Route path="/movie/:movieId" render={(routeProps) => {
          return <MoviePage {...routeProps} />
        }}/>

        <Route path="/tv/:tvId" render={(routeProps) => {
          return <TelevisionPage {...routeProps} />
        }}/>

      </Switch>
    </div>
  );
}

export default App;
