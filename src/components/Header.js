import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation-container">
        <div className="navigation">
          <p>Home</p>
          <p>Favorites</p>
        </div>
      </div>
      <p className="login-button">Login</p>
    </div>
  );
};

export default Header;
