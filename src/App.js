import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
// import Contact from "./components/Contact";
import NavComp from "./components/NavComp";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navCategories] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "resume" },
    // { name: "contact" },
  ]);

  const [currentNavCategory, setNavCategory] = useState(navCategories[0]);
  // console.log(currentNavCategory.name);

  const renderPage = () => {
    if (currentNavCategory.name === "about") {
      return <About />;
    }
    if (currentNavCategory.name === "portfolio") {
      return <Portfolio />;
    }
    // if (currentNavCategory.name === "contact") {
    //   return <Contact />;
    // }
    if (currentNavCategory.name === "resume") {
      return <Resume />;
    }
  };

  return (
    <div className="main-container">
      <NavComp
        navCategories={navCategories}
        setNavCategory={setNavCategory}
        currentNavCategory={currentNavCategory}
      ></NavComp>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
