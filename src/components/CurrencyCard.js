import { Link } from "react-router-dom";
import "../assets/styles/components/CurrencyCard.scss";

const CurrencyCard = () => {
  return (
    <div className="currency-card">
      <p><Link to="/details">Name</Link></p>
      <p>32,866.00</p>
      <p>1492.00</p>
      <p>+0.04%</p>
      <p>33.639.00</p>
      <p>33.639.00</p>
    </div>
  );
};

export default CurrencyCard;
