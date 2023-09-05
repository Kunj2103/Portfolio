import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithubAlt, faCircle, faLinkedinIn);
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="my-auto">
        <h1 className="mb-0">
          {t("personalInfo.firstName")}
          <span className="text-primary"> {t("personalInfo.lastName")}</span>
        </h1>

        <h3 className="mb-4">
          <Typewriter
            options={{
              strings: t("personalInfo.subHeadingText", {
                returnObjects: true,
              }),
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <div className="subheading mb-5">
          {t("personalInfo.city")} ·
          <a href="tel:+16135012020">{t("personalInfo.phoneNumber")}</a> ·
          <a href="mailto:name@email.com">{t("personalInfo.email")}</a>
        </div>
        <p className="mb-5">{t("personalInfo.myDescription")}</p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a target="blank" href={t("personalInfo.linkedin")}>
              <span className="fa-stack fa-lg">
                <FontAwesomeIcon
                  icon={["fas", "circle"]}
                  className="fa-stack-2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  className="fa-stack-1x fa-inverse"
                />

                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a target="blank" href={t("personalInfo.github")}>
              <span className="fa-stack fa-lg">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FontAwesomeIcon
                  icon={["fas", "circle"]}
                  className="fa-stack-2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "github-alt"]}
                  className="fa-stack-1x fa-inverse"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
