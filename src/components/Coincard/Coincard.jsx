import React, { useState } from 'react'
import "./Coincard.css";
export default function Coincard(props) {
    const [count,setCount] = useState(0);
    const {coin} = props;
    const coinChanges= ["percent_change_24h","percent_change_1h","percent_change_7d"]
    const coinChangeColor = coin[coinChanges[count]] < 0 ? "danger" : "success";
    const coinHours = coinChanges[count].split("_")[2];

    const coinChangesHandler = () => {
        if(count>=coinChanges.length-1){
            setCount(0)
            return;
        }
        setCount(count+1);
    }

    return (
        <div className="container">
    
        <div className="coin_card">
            <div className="coin__aside">
                <span onClick={()=> { coinChangesHandler() }} className={`coin__change ${coinChangeColor}`}>{coinChangeColor==="danger" ? "" : "+"} {coin[ coinChanges[count] ]} ({coinHours})</span>
            </div>
            <div className="coin__header">
                <h2 className="coin__title">   <span className="coin__rank">#{coin.rank}</span> {coin.name} <span className="coin__symbol">{coin.symbol}</span></h2>
                <p className="coin__price"><span className="coin__highlight">${coin.price_usd}</span></p>
            </div>

            <div className="coin__body">
                <h3 className="coin__supply">Supply : {coin.csupply || "NULL"} <span className="coin__status"></span></h3>
                <h3 className="coin__max">Max-supply : {coin.msupply || "NULL" } <span className="coin__status"></span></h3>
            </div>

            <div className="coin__footer">
                <h3 className="coin__market">MarketCap ✨</h3>
                <p className="coin__market_">{coin.market_cap_usd || "NULL" }</p>   
            </div>

        </div> 
           
        </div>
    )
}
