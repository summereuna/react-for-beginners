import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  //👉1. counter
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  //👉2. 검색 API
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  //🔥그냥 코드 재실행 될때 마다 찍히는 로그
  console.log("I run all the time.");

  //🔥처음 렌더 때만 찍히는 로그
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  //🔥검색 API state 변할 때 마다 찍히는 로그
  useEffect(() => {
    if (keyword !== "") {
      console.log("SEARCH", keyword);
    }
  }, [keyword]);
  //🔥counter, keyword 둘 중 하나라도 state 바뀌면 찍히는 로그
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>Counter: {counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
