import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Details, Favorites } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
