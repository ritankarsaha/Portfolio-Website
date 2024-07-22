import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ScrollButton from "./components/ScrollButton/ScrollButton";

function App() {
  return (
    <Router>
      <Home />
      <ScrollButton/>
    </Router>
  );
}

export default App;
