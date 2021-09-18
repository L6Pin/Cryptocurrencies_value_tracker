import { connect } from "react-redux";
import "../assets/styles/pages/Favorites.scss";
import { getFavoriteInfo } from "../redux/actions/getFavoriteInfoActions";
import { CurrencyCard } from "../components";
import { useEffect } from "react";
import { useState } from "react";

const Favorites = ({ favoriteCurrencies, getFavoriteInfo, favoriteCurrenciesInfo }) => {
 
  const [currenciesParam, setCurrenciesParam] = useState("");

  useEffect(()=>{
    if (favoriteCurrencies.length > 0) {
      let currenciesParamString = "";
      favoriteCurrencies.forEach((symbol) => {
        currenciesParamString = currenciesParamString + `${symbol.name},`
      });     
      
      setCurrenciesParam(currenciesParamString)
      getFavoriteInfo(currenciesParam)
    }
    else{
      setCurrenciesParam("")
      getFavoriteInfo(currenciesParam)
    }
  },[currenciesParam, favoriteCurrencies, getFavoriteInfo])

  console.log(currenciesParam)
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
      {
        favoriteCurrenciesInfo.map((currency) => <CurrencyCard currency={currency} />)
      }
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    favoriteCurrencies: state.favoriteReducers,
    favoriteCurrenciesInfo: state.getFavoriteInfoReducer,
  };
}

const mapDispatchToProps = {
  getFavoriteInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
