import React, { useState } from "react";
import GitHubMark from "../../assets/icons/GitHub-Mark/PNG/GitHub-Mark-64px.png";

function Portfolio() {
  const [projects] = useState([
    {
      name: "SmartBook",
      link: "https://smartest-book.herokuapp.com/",
      github: "https://github.com/kylebreynolds/smart-book",
      image: "smart-book",
      description:
        "Team Project Built with JS, Handlebars, Express, and my MySql",
    },
    {
      name: "Campaign Blog",
      link: "https://blogged-down.herokuapp.com/",
      github: "https://github.com/tj-tieso/blogged-down",
      image: "blogged-down",
      description: "A blog for you Table Top Roll Playing game.",
    },
    // {
    //   name: "No Budge Budget",
    //   link: "https://no-budge-budget.herokuapp.com/",
    //   github: "https://github.com/tj-tieso/no-budge-budget",
    //   image: "budget",
    //   description: "An existing Mock Budget App, converted into a PWA",
    // }
    // {
    //   name: "Team Profile Generator",
    //   link: "https://github.com/tj-tieso/team-profile-gen",
    //   github: "https://github.com/tj-tieso/team-profile-gen",
    //   image: "team-profile",
    //   description: "A CLI to generate contact cards for a team",
    // },
    // {
    //   name: "Project 5",
    //   link: "https://github.com/tj-tieso",
    //   github: "https://github.com/tj-tieso",
    //   image: "project5",
    //   description: "",
    // },
    // {
    //   name: "Project 6",
    //   link: "https://github.com/tj-tieso",
    //   github: "https://github.com/tj-tieso",
    //   image: "project5",
    //   description: "",
    // },
  ]);

  return (
    <section className="portfolioBackdrop">
      {projects.map((project) => (
        <div className="projectContainer" key={project.name}>
          <img
            className="projectBackgroundImg"
            alt="project screenshot"
            src={require(`../../assets/projects/${project.image}.png`)}
          />
          <h3 className="projectTitle">
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </h3>
          <a href={project.github} target="_blank" rel="noreferrer">
            <img alt="github icon" src={GitHubMark} />
          </a>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
