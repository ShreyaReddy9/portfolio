import React from "react";
import { FaGithub, FaFolder , FaExternalLinkAlt } from "react-icons/fa"; // Import Icons
import Carousel from "react-bootstrap/Carousel"; // Bootstrap Carousel
import projectsData from "../../data/projects.json"; // Import JSON Data
import styles from "./Projects.module.css"; // Import CSS
import "bootstrap/dist/css/bootstrap.min.css";

export const Projects = () => {
  const { spotlightProjects, normalProjects } = projectsData; // Get projects from JSON

  return (
    <section className={styles.container} id="projects">
      <section id="projects" className={styles.projects}>
        <h2 className={styles.title}>PROJECTS</h2>

        {/* Spotlight Carousel */}
        <Carousel interval={3000} className={styles.carousel}>
          {spotlightProjects.map((project, index) => (
            <Carousel.Item key={index} className={styles.carouselItem}>
              <img className="d-block w-100" src={project.image} alt={project.title} />
              <div className={styles.captionBg}>
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className={styles.techStack}>{project.skills.join(", ")}</p>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.githubIcon}>
                    <FaGithub />
                  </a>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Normal Projects Grid */}
        <div className={styles.projectsGrid}>
          {normalProjects.map((project, id) => (
            <div key={id} className={styles.projectsCard}>
              {/* Icons in Corners */}
              <div className={styles.cardIcons}>
                <FaFolder className={styles.folderIcon} /> {/* Folder Icon on Left */}
                <div className={styles.iconsRight}>
                <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.githubIcon}>
                  <FaGithub /> {/* GitHub Icon on Right */}
                </a>
                {project.open && (
            <a href={project.open} target="_blank" rel="noopener noreferrer" className={styles.openIcon}>
              <FaExternalLinkAlt />
            </a>
          )}
                </div>
              </div>

              {/* Project Title Below Icons */}
              <div className={styles.cardTitleContainer}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>

              {/* Project Description */}
              <p className={styles.cardDesc}>{project.description}</p>

              {/* Tech Stack */}
              <ul className={styles.cardTech}>
                {project.skills.map((skill, index) => (
                  <li key={index} className={styles.techBadge}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
