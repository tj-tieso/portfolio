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
  console.log(currentNavCategory.name);
  const renderPage = () => {
    if (currentNavCategory.name === "about") {
      return <About />;
    }
    if (currentNavCategory.name === "portfolio") {
      return <Portfolio />;
    }
    if (currentNavCategory.name === "contact") {
      return <Contact />;
    }
  };

  return (
    <div>
      <Nav
        navCategories={navCategories}
        setNavCategory={setNavCategory}
        currentNavCategory={currentNavCategory}
      ></Nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
