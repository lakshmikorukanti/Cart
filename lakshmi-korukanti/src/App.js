import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "../src/Components/NavBar";
import Router from "../src/Router/Route";
import Footer from "../src/Components/Footer";
import Home from "../src/Router/Home";
import Advertisment from "../src/Router/Advertisment";
function App() {
  return (
    <div className="App">
      <Advertisment />
      <NavBar />

      <Router />
      <Footer />
    </div>
  );
}

export default App;
