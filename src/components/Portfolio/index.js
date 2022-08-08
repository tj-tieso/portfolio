import React, { useState } from "react";
import GitHubMark from "../../assets/icons/GitHub-Mark/PNG/GitHub-Mark-32px.png";
import Card from "react-bootstrap/Card";

function Portfolio() {
  const [projects] = useState([
    {
      name: "SmartBook",
      link: "https://smartest-book.herokuapp.com/",
      github: "https://github.com/kylebreynolds/smart-book",
      image: "smart-book",
      description: "Team Project Built with JS, Handlebars, Express, and MySql",
    },
    {
      name: "Campaign Blog",
      link: "https://blogged-down.herokuapp.com/",
      github: "https://github.com/tj-tieso/blogged-down",
      image: "blogged-down",
      description: "A blog for you Table Top Roll Playing game.",
    },
    {
      name: "No Budge Budget",
      link: "https://no-budge-budget.herokuapp.com/",
      github: "https://github.com/tj-tieso/no-budge-budget",
      image: "budget",
      description: "An existing Mock Budget App, converted into a PWA",
    },
    {
      name: "Readme Generator",
      link: "https://github.com/tj-tieso/readme-gen",
      github: "https://github.com/tj-tieso/readme-gen",
      image: "readme-gen",
      description: "A CLI to generate a README for your project.",
    },
    {
      name: "Weather App",
      link: "https://tj-tieso.github.io/weather-app/",
      github: "https://github.com/tj-tieso/weather-app",
      image: "weather-app",
      description: "Server-Side API project. Built with JS, HTML, and CSS",
    },
    {
      name: "Run Buddy",
      link: "https://tj-tieso.github.io/run-buddy/",
      github: "https://github.com/tj-tieso/run-buddy",
      image: "run-buddy",
      description: "My first front-end project, built with HTML and CSS",
    },
  ]);

  return (
    <section className="portfolioBackdrop">
      <h1>Projects</h1>
      {/* start mapping */}
      {projects.map((project) => (
        <Card className="projectContainer" key={project.name}>
          <Card.Body className="bg-light p-2">
            <Card.Header>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img alt="github icon" src={GitHubMark} />{" "}
                </a>
              </Card.Title>{" "}
            </Card.Header>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            className="projectBackgroundImg"
            alt="project screenshot"
            src={require(`../../assets/projects/${project.image}.png`)}
          />
        </Card>
      ))}
    </section>
  );
}

export default Portfolio;
