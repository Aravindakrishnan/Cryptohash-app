import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/getCoins';
import Coincard from '../Coincard/Coincard';
import Loading from '../Loading/Loading';
import "./Cointags.css";
export default function Cointags() {
    const [coins,setCoins] = useState([]);
    const [coinsBackup,setCoinsBackup] = useState([]); 
    const [coinDetail,setCoinDetail] = useState({});
    const [loading,setLoading] = useState(false);
    useEffect(()=> {
      
      setLoading(true);
      const getData = () => {
        getCoins("https://api.coinlore.net/api/tickers/")
        .then(data => {
            setCoins(data['data']);
            setCoinDetail(data['data'][0]);
            setCoinsBackup(data['data']);
            setLoading(false);
        })
      }
      getData();
        
    },[])

    const setCoinNameHandler = (coinname) => {
        const coinDetail = coins.find(coin => {
            return coin.name === coinname;
        })
        setCoinDetail(coinDetail);
    }

    const compare = (input,value) => {
        const isValid =  input.toUpperCase().includes(value.toUpperCase());
        return isValid;
    }

    const searchHandler = (e) => {
        const inputValue = e.target.value;
        if(!inputValue){
            setCoins(coinsBackup)
            return;
        }
        const coinx = coinsBackup.filter(coin => { return compare(coin.name,inputValue) || compare(coin.symbol,inputValue)})
        setCoins(coinx); 
    }

    return (

        <div className="container">

        { loading ? <Loading></Loading> : 

            (
                <React.Fragment>
                <Coincard coin={coinDetail}/>
                <div className="search-container">
                <input onChange={ searchHandler } type="text" placeholder="Eg: bitcoin or btc " />
                </div>
    
            
            <div className="cointag_container">   
    
                {
                    coins 
                    &&
                    coins.map(coin => {
                        return (
                        <div key={coin.id} className="cointag__item">
                            <li onClick={()=> { setCoinNameHandler(coin.name) }}  className="cointag"><span>#{coin.rank}</span> {coin.name}</li>
                        </div>
                        )
                    }) 
                }
    
            
            </div>

            { ( coins.length===0) ? <div className="center danger"> <h2 >No Coins Found</h2> </div> : null }

            </React.Fragment>
            )
            
        }



        

        </div>
    )}