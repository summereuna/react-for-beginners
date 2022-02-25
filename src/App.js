import { useEffect, useState } from "react";

function App() {
  //2가지 state
  //🌟 1. 로딩, 기본 값 true
  const [loading, setLoading] = useState(true);
  //🌟 2. 코인 API의 데이터, 즉 코인 리스트 가지고 있는 state, 기본 값 빈 array(코인 리스트 배열이라서)
  const [coins, setCoins] = useState([]);
  //🌟 3. usd 인풋 state
  const [usd, setUsd] = useState(0);
  //🌟 4. 선택한 코인 state
  const [pick, setPick] = useState(0);
  // usd 인풋에 입력한 값 받아와 usd 업데이트
  const usdChange = (event) => setUsd(event.target.value);
  // 픽한 코인 value(코인의 usd가격) 받아와 pick 업데이트
  const onSelect = (event) => {
    setPick(event.target.value);
  };
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
  return (
    <div>
      <h3>USD to Coins! {loading ? "" : `(${coins.length})개의 코인`}</h3>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            value={usd}
            type="number"
            placeholder="USD"
            onChange={usdChange}
            min="0"
          ></input>
          $ 가 있으면{" "}
          <select onChange={onSelect}>
            <option>코인을 고르세요!</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol})
              </option>
            ))}
          </select>
          코인 <b>{pick ? `${usd / pick}` : "-"}</b>개를 살 수 있습니다.
        </div>
      )}
    </div>
  );
}

export default App;
