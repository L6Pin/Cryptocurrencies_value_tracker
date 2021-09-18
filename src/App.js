import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Details, Favorites, RouteGuard } from "./pages";
import { connect } from "react-redux";

function App({ userLoggedIn }) {
  let route = (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="*" component={RouteGuard} />
      </Switch>
    </>
  );

  if (userLoggedIn) {
    route = (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path="*" component={RouteGuard} />
        </Switch>
      </>
    );
  }

  return <Router>{route}</Router>;
}

function mapStateToProps(state) {
  return {
    userLoggedIn: state.loginUserReducer,
  };
}

export default connect(mapStateToProps)(App);
