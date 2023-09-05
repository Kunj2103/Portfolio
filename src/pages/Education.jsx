import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-auto">
        <h2 className="mb-5">{t("educationDegrees.title")}</h2>
        {t("educationDegrees.degrees", {
          returnObjects: true,
        }).map((degree, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row mb-5"
          >
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{degree.collage}</h3>
              <div className="subheading mb-3">{degree.name}</div>
              {degree.itemList.map((item, index) => (
                <div className="mb-3" key={index}>{item}</div>
              ))}
              {degree.descriptions.map((description, index) => (
                <div key={index}>- {description}</div>
              ))}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{degree.startEndDate}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
