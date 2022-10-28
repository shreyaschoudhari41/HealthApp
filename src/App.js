import "./App.css";
import About from "./Components/About";
import Forms from "./Components/Forms";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/news" element={<News />}/>
          <Route exact path="/emergency" element={<Emergency/>}/>
          <Route exact path="/" element={<Forms />}/>
        </Routes>
      </Router>
    </>
  );
}

function Emergency() {

  <div>
  <Link to={{pathname : "https://www.who.int/emergencies/situations"}}></Link>
  </div>
}
export default App;
