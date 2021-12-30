import React, { useEffect, useState } from "react";

function App2() {
    const [load, setLoad] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoad(false);
        });
        
    }, [])
    return (
        <div>
           <h2>Coin Tracker {load ? "" : `(${coins.length})`}</h2>
           {load ? <strong>LOADING...</strong> : null}
           <ul>
               {coins.map( (item) => <li key={item.id}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</li>)}
           </ul>
        </div>
    );
}

export default App2;
