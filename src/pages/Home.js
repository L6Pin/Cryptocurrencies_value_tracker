import "../assets/styles/pages/Home.scss"
import {CurrencyCard} from "../components"

const Home = () => {

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
                <CurrencyCard />
                <CurrencyCard />
                <CurrencyCard />
                <CurrencyCard />
                <CurrencyCard />
            </div>
        </div>
    )
};

export default Home;
