import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/getCoins';
import Coincard from '../Coincard/Coincard';
import Loading from '../Loading/Loading';
import "./Cointags.css";
export default function Cointags() {
    const [coins,setCoins] = useState([]);
    const [coinDetail,setCoinDetail] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=> {
      
      setLoading(true);
        
      getCoins("https://api.coinlore.net/api/tickers/")
        .then(data => {
            console.log(data);
            setCoins(data['data']);
            setCoinDetail(data['data'][0]);
            setLoading(false);
        })
    },[])

    const setCoinNameHandler = (coinname) => {
        const coinDetail = coins.find(coin => {
            return coin.name === coinname;
        })
        setCoinDetail(coinDetail);
    }

    return (

        <div className="container">

        { loading ? <Loading></Loading> : <Coincard coin={coinDetail}/> }

        
        <div className="cointag_container">   

            {
                coins 
                &&
                coins.map(coin => {
                    return <li key={coin.id} onClick={()=> { setCoinNameHandler(coin.name) }}  className="cointag"><span>#{coin.rank}</span> {coin.name}</li>
                }) 
            }
        </div>)
        
        </div>
    )
}
