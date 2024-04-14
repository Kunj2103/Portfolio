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
          <a
            href={project.siteUrl}
            target="_blank"
            className="text-decoration-none"
          >
            <div
              key={index}
              className="card shadow mb-5 bg-white rounded"
              style={{ width: "80%", textAlign: "center" }}
            >
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
