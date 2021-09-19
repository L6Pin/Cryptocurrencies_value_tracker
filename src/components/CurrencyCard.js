import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/CurrencyCard.scss";

const CurrencyCard = ({ symbol }) => {
  const [lastPrice, setLastPrice] = useState("");
  const [dailyChange, setDailyChange] = useState("");
  const [dailyChangePercent, setDailyChangePercent] = useState("");
  const [dailyHigh, setDailyHigh] = useState("");
  const [dailyLow, setDailyLow] = useState("");

  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        symbol: `t${symbol.toUpperCase()}`,
      })
    );
  };

  ws.onmessage = (msg) => {
    let response = JSON.parse(msg.data);
    let hb = response[1];
    if (hb !== "hb") {
      let hbArray = [];
      for (let index in hb) {
        hbArray.push(hb[index]);
      }
      if (hbArray.length) {
        setLastPrice(hbArray[6]);
        setDailyChange(hbArray[4]);
        setDailyChangePercent(hbArray[5]);
        setDailyHigh(hbArray[8]);
        setDailyLow(hbArray[9]);
      }
    }
  };

  return (
    <div className="currency-card">
      <p>
        <Link to={`/details/${symbol}`}>{symbol.toUpperCase()}</Link>
      </p>
      <p>{lastPrice.toLocaleString("en-US")}</p>
      <p>{dailyChange.toLocaleString("en-US")}</p>
      <p>{`${(dailyChangePercent * 100).toFixed(2)}%`}</p>
      <p>{dailyHigh.toLocaleString("en-US")}</p>
      <p>{dailyLow.toLocaleString("en-US")}</p>
    </div>
  );
};

export default CurrencyCard;
