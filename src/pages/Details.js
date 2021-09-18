import { connect } from "react-redux";
import "../assets/styles/pages/Details.scss";
import { useParams } from "react-router";
import { getDetails } from "../redux/actions/getDetailsActions";
import {
  addFavorites,
  removeFavorites,
} from "../redux/actions/favoritesActions";

import { useEffect, useState } from "react";

const Details = ({
  userLoggedIn,
  currencyDetails,
  getDetails,
  addFavorites,
  removeFavorites,
  favorites,
}) => {
  let { id } = useParams();

  useEffect(() => {
    getDetails(id);
  }, [getDetails, id]);

  let Favorite = {
    name: id,
    ...currencyDetails,
  };

  let addNewFavorites = () => {
    addFavorites(Favorite);
  };

  let removeFavorite = () => {
    removeFavorites(Favorite);
    setContainsFavorite(false)
  };

  useEffect(()=>{
    if(favorites.length !== 0){
      favorites.map(fav => {
        if(fav.name === id){
          setContainsFavorite(true)
        }
      })
    }
  })

  const [containsFavorite, setContainsFavorite] = useState(false);

  

  return (
    <div className="details">
      <div className="currency-details">
        <p>Symbol</p>
        <p>Last Price</p>
        <p>High</p>
        <p>Low</p>
      </div>
      <div className="details-card">
        <p>{id.toUpperCase()}</p>
        <p>{currencyDetails?.last_price}</p>
        <p>{currencyDetails?.high}</p>
        <p>{currencyDetails?.low}</p>
      </div>
      {userLoggedIn && (
        <>
          {!containsFavorite && (
            <p className="button add" onClick={addNewFavorites}>
              Add to favorites
            </p>
          )}
          {containsFavorite && (
            <p className="button remove" onClick={removeFavorite}>
              Remove from favorites
            </p>
          )}
        </>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userLoggedIn: state.loginUserReducer,
    currencyDetails: state.getDetailsReducer,
    favorites: state.favoriteReducers,
  };
}

const mapDispatchToProps = {
  getDetails,
  addFavorites,
  removeFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
