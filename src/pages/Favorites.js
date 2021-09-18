import "../assets/styles/pages/Favorites.scss";
import { CurrencyCard } from "../components";

const Favorites = () => {
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
      <CurrencyCard />
      <CurrencyCard />
    </div>
  );
};

export default Favorites;
