import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  const [navCategories] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "contact" },
  ]);

  const [currentNavCategory, setNavCategory] = useState(navCategories[0]);

  return (
    <div>
      <Nav
        navCategories={navCategories}
        setNavCategory={setNavCategory}
        currentNavCategory={currentNavCategory}
      ></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
