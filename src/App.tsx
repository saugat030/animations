import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Swiper from "./pages/Swiper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/swiper" element={<Swiper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
