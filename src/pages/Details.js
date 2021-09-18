import { connect } from "react-redux";
import "../assets/styles/pages/Details.scss";
import { useParams } from "react-router";
import { getDetails } from "../redux/actions/getDetailsActions";

import { useEffect } from "react";

const Details = ({ userLoggedIn, currencyDetails, getDetails }) => {
  let { id } = useParams();

  useEffect(() => {
    getDetails(id);
  }, [getDetails]);

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
          <p className="button add">Add to favorites</p>
          {/* <p className="button remove">Remove from favorites</p> */}
        </>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userLoggedIn: state.loginUserReducer,
    currencyDetails: state.getDetailsReducer,
  };
}

const mapDispatchToProps = {
  getDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
