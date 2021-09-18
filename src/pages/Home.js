import { useEffect } from "react";
import "../assets/styles/pages/Home.scss";
import { CurrencyCard } from "../components";
import React, { useState, useCallback, useMemo, useRef } from "react";
import useWebSocket from "react-use-websocket";
import { getSymbols } from "../redux/actions/getSymbolsActions";
import { getCurrencyInfo } from "../redux/actions/getCurrencyInfoActions";
import { connect } from "react-redux";
import { getDetailsReset } from "../redux/actions/getDetailsActions";

const Home = ({ symbols, getSymbols, currencyInfo, getCurrencyInfo, getDetailsReset }) => {
  const [socketUrl, setSocketUrl] = useState("wss://api-pub.bitfinex.com/ws/2");
  const messageHistory = useRef([]);

  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tBTCUSD",
  });

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      sendMessage(msg);
    },
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage]
  );

  //   if (lastMessage != null) console.log(JSON.parse(lastMessage.data));

  const [currenciesParam, setCurrenciesParam] = useState("");

  useEffect(() => {
    getDetailsReset()
    getSymbols();
    if (symbols.length > 0) {
      let currenciesParamString = "";
      symbols.forEach((symbol) => {
        currenciesParamString =
          currenciesParamString + `t${symbol.toUpperCase()},`;
      });
      setCurrenciesParam(currenciesParamString);
      getCurrencyInfo(currenciesParamString);
     
    }
  }, [getSymbols, symbols, getCurrencyInfo, getDetailsReset]);

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

        {currencyInfo.map((currency) => <CurrencyCard currency={currency} />)}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    symbols: state.getSymbolsReducer,
    currencyInfo: state.getCurrencyInfoReducer,
  };
}

const mapDispatchToProps = {
  getSymbols,
  getCurrencyInfo,
  getDetailsReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
