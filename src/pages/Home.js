import { useEffect } from "react";
import "../assets/styles/pages/Home.scss";
import { CurrencyCard } from "../components";
import { getSymbols } from "../redux/actions/getSymbolsActions";
import { connect } from "react-redux";
import { getDetailsReset } from "../redux/actions/getDetailsActions";

const Home = ({ symbols, getSymbols, getDetailsReset }) => {
  useEffect(() => {
    getDetailsReset();
    getSymbols();
  }, [getSymbols, getDetailsReset]);

  return (
    <div className="home">
      <div className="currency-container">
        <div className="currency-info">
          <p>Name</p>
          <p>Last</p>
          <p>Change</p>
          <p>Change Percent</p>
          <p>High</p>
          <p>Low</p>
        </div>
        {symbols.map((symbol) => (
          <CurrencyCard symbol={symbol} key={symbol} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    symbols: state.getSymbolsReducer,
  };
}

const mapDispatchToProps = {
  getSymbols,
  getDetailsReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
