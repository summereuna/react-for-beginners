import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path={`/movie/:id`} element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
