import { connect } from "react-redux";
import "../assets/styles/pages/Favorites.scss";
import { getFavoriteInfo } from "../redux/actions/getFavoriteInfoActions";
import { CurrencyCard } from "../components";
import { useEffect } from "react";
import { useState } from "react";

const Favorites = ({ favoriteCurrencies }) => {
 
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
      {favoriteCurrencies.map((symbol) => (
          <CurrencyCard symbol={symbol} />
        ))}
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    favoriteCurrencies: state.favoriteReducers,
  };
}

export default connect(mapStateToProps)(Favorites);
