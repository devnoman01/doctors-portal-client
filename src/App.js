import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
