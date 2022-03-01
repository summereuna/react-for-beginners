import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/hey" element={<h1>BTS</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
