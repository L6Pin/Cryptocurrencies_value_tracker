import { connect } from "react-redux";
import "../assets/styles/pages/Details.scss";
import { useParams } from "react-router";

const Details = ({ userLoggedIn }) => {

  let {id} = useParams()


  return (
    <div className="details">
      <div className="currency-details">
        <p>Symbol</p>
        <p>Last Price</p>
        <p>High</p>
        <p>Low</p>
      </div>
      <div className="details-card">
        <p>Name</p>
        <p>32,866.0</p>
        <p>1492.00</p>
        <p>33.639.00</p>
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
  };
}

export default connect(mapStateToProps)(Details);
