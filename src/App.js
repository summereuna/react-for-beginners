import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/"
          element={<Home />}
        ></Route>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
