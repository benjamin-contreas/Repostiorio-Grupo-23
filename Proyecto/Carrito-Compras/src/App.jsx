import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
