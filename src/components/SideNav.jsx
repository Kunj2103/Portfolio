import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
const SideNav = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Kunj Jansari</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="/profile.jpg"
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="about"
                smooth={true}
                duration={500}
              >
                {t("links.about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="education"
                smooth={true}
                duration={500}
              >
                {t("links.education")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="experience"
                smooth={true}
                duration={500}
              >
                {t("links.experience")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="skills"
                smooth={true}
                duration={500}
              >
                {t("links.skills")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="projects"
                smooth={true}
                duration={500}
              >
                {t("links.projects")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
