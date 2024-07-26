import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos"; // Import the Videos component
import ScrollButton from "./components/ScrollButton/ScrollButton";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/videos" component={Videos} />
      </Switch>
      <ScrollButton />
    </Router>
  );
}

export default App;