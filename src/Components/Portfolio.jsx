/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/deepmind.jpg";

const imageAltText = "Deepmind";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "University Project - Creation of APIs",
    description:
      "Development of APIs to facilitate efficient and secure communication between different web systems, promoting effective integration and data exchange.",
    url: "https://1drv.ms/u/s!Aq_vuQ_HpBazgaQrQaYTTmlIK7loaA?e=5QEYCy",
  },
  {
    title: "Workshop on Microsoft SQL Server databases",
    description:
      "I have organized an academic workshop focused on exploring the fundamental concepts of Microsoft SQL Server and its relevance to systems engineering, with an emphasis on integration with cloud storage services.",
    url: "https://www.linkedin.com/posts/jcarlosper_ingenieraedadesistemas-utpchimbote-activity-7134180633802596352-zhrD?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Winner of the Internal Programming Contest at my University",
    description:
      "I triumphed in an internal programming contest at my university by innovatively solving a product management problem, using a practical case based on a museum, using the Java programming language.",
    url: "https://1drv.ms/b/s!AsTJRf1_cs5YkEB5GVcMj3biPdJr?e=NaeCmk",
  },
  {
    title: "Learn about my Skills on GitHub",
    description:
      "Explore my GitHub profile to learn more about me and my management skills. I invite you to discover more about me and my work!",
    url: "https://github.com/jcarlosper",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
