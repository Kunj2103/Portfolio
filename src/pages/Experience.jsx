import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-auto">
        <h2 className="mb-5">{t("workExperiences.title")}</h2>
        {t("workExperiences.works", {
          returnObjects: true,
        }).map((work, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row mb-5"
          >
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{work.position}</h3>
              <div className="subheading mb-3">{work.companie}</div>
              {work.responsabilities.map((responsabilitie, index) => (
                <p className="mb-3" key={index}>
                  - {responsabilitie}
                </p>
              ))}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{work.startEndDate}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
