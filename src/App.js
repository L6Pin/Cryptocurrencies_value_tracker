import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Details } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/details" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
