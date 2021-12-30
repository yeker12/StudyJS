import React, { useEffect, useState } from "react";

function App2() {
    const [load, setLoad] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState("");
    const [coinPrice, setCoinPrice] = useState(0)
    const onChange = (event) => setMoney(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        setMoney("");
    }
    const onSelect = (event) => setCoinPrice(event.target.value);
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
            <h2>Coin Tracker {load ? "" : `(Total coins: ${coins.length})`}</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="number" placeholder="write your USD" value={money}></input>
                <button>Reset</button>
            </form>
            {load ? <strong>LOADING...</strong> : 
            <select onChange={onSelect}>
                <option key="0">Select the coin</option>
                {coins.map( (item) => <option key={item.id} value={item.quotes.USD.price}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</option>)}
            </select>
           }
           
           {(money !=="" && coinPrice !== 0) ? <h3>Available to change : {money / coinPrice} </h3> : ""}
           
           
        </div>
    );
}

export default App2;
