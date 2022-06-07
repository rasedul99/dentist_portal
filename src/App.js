import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Appoinment from "./pages/Appoinment/Appoinment";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;
