import { useEffect, useState } from "react";

function App() {
  //2가지 state
  //🌟 1. 로딩, 기본 값 true
  const [loading, setLoading] = useState(true);
  //🌟 2. 코인 API의 데이터, 즉 코인 리스트 가지고 있는 state, 기본 값 빈 array(코인 리스트 배열이라서)
  const [coins, setCoins] = useState([]);
  //✅ 코인 API: 컴포넌트 처음 렌더되었을 때만 실행: 아무 state도 주시하지 않으면 된다.
  useEffect(() => {
    //코인 api를 fetch하고 네트워크를 확인하면 request/response가 잘되고 있는 것을 확인 할 수 있다.
    //response로부터 코인의 json을 추출해 보자.
    //- 코인 api를 페치한 후(then), response를 받아서 response.json을 return해 주면 된다.
    //- 그러고 나서(then), 그 json을 가지고 콘솔로그 해보자.
    //결과는 엄청 큰 배열 반환된다. = 코인 데이터 배열
    //- 따라서 반환되는 json의 값을 setCoins해서 coins에 값을 업뎃시키자.
    //- 그리고 동시에 loading을 false로 바꿔줘야 한다.
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [] = useState();
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.rank}. {coin.name}({coin.symbol}): {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
