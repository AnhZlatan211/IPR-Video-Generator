import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import JsonToVideo from "./pages/JsonToVideo";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScrollToTop from "./pages/ScrollToTop";
import "./styles/component.css";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Nav />
      <ScrollToTop />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/json-to-video" element={<JsonToVideo />} />
          <Route path="/support" element={<Support />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
