import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutAs";
import ContectAs from "./Components/ContectAs";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutAs" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContectAs" element={<ContectAs />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
    </div>
    </>
  );
};

export default App;
