import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import heroImg from "../../assets/cover/heroImg.jpg";

function Nav(props) {
  const { navCategories = [], setNavCategory, currentNavCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentNavCategory.name);
  }, [currentNavCategory]);

  return (
    <header>
      <h1>
        <a data-testid="link" href="/">
          Tieso
        </a>
      </h1>
      <nav>
        <ul>
          {navCategories.map((navCategory) => (
            <li key={navCategory.name}>
              <h2>
                <a
                  className={`${
                    currentNavCategory.name === navCategory.name && "navActive"
                  }`}
                  onClick={() => {
                    setNavCategory(navCategory);
                  }}
                  data-testid={navCategory.name}
                  href={`#${navCategory.name}`}
                >
                  {capitalizeFirstLetter(navCategory.name)}
                </a>
              </h2>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
