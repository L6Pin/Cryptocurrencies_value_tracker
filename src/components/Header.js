import { NavLink } from "react-router-dom";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation-container">
        <div className="navigation">
          <NavLink exact to="/" activeClassName="selected"><p>Home</p></NavLink>
          <NavLink to="/favorites"activeClassName="selected"><p>Favorites</p></NavLink>
        </div>
      </div>
      <p className="login-button">Login</p>
    </div>
  );
};

export default Header;
