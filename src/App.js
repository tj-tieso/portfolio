import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
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
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
