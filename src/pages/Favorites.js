import { connect } from "react-redux";
import "../assets/styles/pages/Favorites.scss";
import { CurrencyCard } from "../components";

const Favorites = ({ favoriteCurrencies }) => {
  console.log(favoriteCurrencies);

  return (
    <div className="favorites">
      <div className="currency-info">
        <p>Name</p>
        <p>Last</p>
        <p>Change</p>
        <p>Change Percent</p>
        <p>High</p>
        <p>Low</p>
      </div>
  
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    favoriteCurrencies: state.favoriteReducers,
  };
}

export default connect(mapStateToProps)(Favorites);
