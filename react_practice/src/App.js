import React, { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMymoney] = useState("");
  const [money, setMoney] = useState(0);
  const onChange = (event) => setMymoney(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(myMoney === 0){
      return ;
    }
    //console.log(myMoney);
    setMoney((currentMoney) => (parseInt(myMoney)));
    //console.log(money);
    setMymoney("");
  }
  useEffect(() => {
    console.log("API");
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);})
    }, [])

  return (
   <div>
     <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
     {loading ? <strong>Loading...</strong> :
      <form onSubmit={onSubmit}>
      <div>
        <input
        onChange={onChange}
        value = {myMoney}
        type="text"
        placeholder="write your money">
        </input>
        <button>Confirm</button>
        <br></br>
        <h3>Available coins (Selected Coin) : {money} ()</h3>
        <br></br>
        <select>
          <option value="defaultValue">select the coin</option>
        {coins.map((coin) => 
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
        )}
        </select>
      </div>
      </form>
    }
   </div>
  )
}

export default App;
