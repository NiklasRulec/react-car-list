import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CarsSection from "./pages/CarsSection";
import Home from "./pages/Home";
import Car from "./pages/Car";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carssection" element={<CarsSection />} />
          <Route path="/carssection/:carid" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
