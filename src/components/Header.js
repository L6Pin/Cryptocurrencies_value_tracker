import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import { loginUser } from "../redux/actions/loginUserAction";

const Header = ({ userLoggedIn, loginUser }) => {
  return (
    <div className="header">
      <div className="navigation-container">
        <div className="navigation">
          <NavLink exact to="/" activeClassName="selected">
            <p>Home</p>
          </NavLink>
          {userLoggedIn && (
            <NavLink to="/favorites" activeClassName="selected">
              <p>Favorites</p>
            </NavLink>
          )}
        </div>
      </div>
      {!userLoggedIn && (
        <p className="login-button" onClick={loginUser}>
          Login
        </p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userLoggedIn: state.loginUserReducer,
  };
}

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
