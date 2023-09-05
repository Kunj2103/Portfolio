import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCheck);

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-auto">
        <h2 className="mb-5">{t("skills.title")}</h2>

        <div className="subheading mb-3">{t("skills.iconsTitle")}</div>
        <ul className="list-inline list-icons" style={{ textAlign: "center" }}>
          {t("skills.devIcons", {
            returnObjects: true,
          }).map((icon, index) => (
            <li key={index} className="list-inline-item">
              <i className={`fa ${icon}`}></i>
            </li>
          ))}
        </ul>

        <div className="subheading mb-3">{t("skills.workflow")}</div>
        <ul className="fa-ul mb-0">
          {t("skills.itemList", {
            returnObjects: true,
          }).map((item, index) => (
            <li key={index}>
              <i className={item}></i>
              <FontAwesomeIcon className="fa-li" icon="fa-solid fa-check" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
