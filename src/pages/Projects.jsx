import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-auto">
        <h2 className="mb-5">{t("projects.title")}</h2>
        {t("projects.projectsInfo", {
          returnObjects: true,
        }).map((project, index) => (
          <div
            key={index}
            className="card shadow mb-5 bg-white rounded"
            style={{ width: "80%", textAlign: "center" }}
          >
            <a href={project.siteUrl}>
              <img
                className="card-img-top"
                src={project.image}
                alt={project.name}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
