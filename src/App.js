import React from "react";
import './App.scss';

import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";

import Menu from "./Menu";
import Hero from "./Hero";
import HomePage from "./HomePage";
import Footer from "./Footer";
import AboutPage from "./AboutPage"
import LoginPage from "./LoginPage"

function App() {
  return (
      <Router>
        <Menu/>
        <Hero/>
        <div className="mainContainer">
          <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;