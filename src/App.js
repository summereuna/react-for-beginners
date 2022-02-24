import { useState } from "react";

function App() {
  //1. input value 값으로 toDo 받아오기
  const [toDo, setToDo] = useState("");
  //2. 여러개의 toDo 담는 array, 디폴트 값은 비어 있는 array로 작성
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  //form의 button 클릭시 submit 되는데 그 때 자동 새고 되는 거 막기 위해 아래 코드 작성
  const onSubmit = (event) => {
    event.preventDefault();
    //toTo 비어 있으면 submit 되지 않도록 return 시키자.
    if (toDo === "") {
      return;
    }
    //이전값 받아오기
    // 첫 번째 인자로 현재 state 받아오는 함수 적어주자.
    //그리고 새로운 array 받아와서 return해주자. 이 부분이 상당히 중요하다. state는 항상 새로운 거여야 한다.
    //그리고 그 새로운 []에는 방금 적은 toDo와, toDos를 넣어주면 된다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    //그리고 submit되고 나서는 input 값 비워주자. 그러려면 모디파이어에 빈 값 주면 된다.
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
