import { Link } from "react-router-dom";
import "../assets/styles/components/CurrencyCard.scss";

const CurrencyCard = ({ currency }) => {
  return (
    <div className="currency-card">
      <p>
        <Link to={`/details/${currency[0].split("t")[1].toLowerCase()}`}>
          {currency[0].split("t")[1]}
        </Link>
      </p>
      <p>{currency[7].toFixed(2)}</p>
      <p>{currency[5].toFixed(2)}</p>
      <p>{`${(currency[6] * 100).toFixed(2)}%`}</p>
      <p>{currency[9].toFixed(2)}</p>
      <p>{currency[10].toFixed(2)}</p>
    </div>
  );
};

export default CurrencyCard;
