import React, { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMymoney] = useState("");
  const [money, setMoney] = useState(0);
  const [value, setValue] = useState("");
  const onChange = (event) => setMymoney(event.target.value);
  const onSelectChange = (event) => setValue(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if(myMoney === 0){
      return ;
    }
    setMoney((currentMoney) => ((myMoney === "") ? null :  parseInt(myMoney)));
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
     <h1>The Coins! {loading ? null : `(total: ${coins.length})`}</h1>
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
        {(money !== 0 && money != null && value !=="defaultValue" && value!== "") ? 
        <h3>Available to buy coins (Selected Coin) : {money} ({value})</h3> : null}
        <br></br>
        <select onChange={onSelectChange}>
          <option value="defaultValue">select the coin</option>
        {coins.map((coin) => 
            <option value = {coin.symbol} key={coin.id}>
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
