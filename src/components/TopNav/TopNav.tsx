import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TopNav.scss";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="topnav">
        <div className="book__main">
          <div>
            <img className="book__logo" src={logo} />
          </div>
        </div>

        <div className="navbar">
          <div>
            <img className="navbar__logo" src={logo} />
          </div>
          <div
            className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
          >
            <a className="navbar__dropdown navbar__a" href="">
              Home
            </a>
            <a className="navbar__dropdown navbar__b" href="about">
              About
            </a>
            <a className="navbar__dropdown navbar__c" href="contact">
              Contact
            </a>
          </div>
          <div className="navbar__toggle" onClick={toggleMenu}>
            <div className="burger-icon">
              <div className="burger-icon__line"></div>
              <div className="burger-icon__line"></div>
              <div className="burger-icon__line"></div>
            </div>
          </div>
        </div>

        <div className="book__1" onClick={() => handleNavigation("/about")}>
          <h2 className="book__text">About</h2>
        </div>
        <div className="book__2" onClick={() => handleNavigation("/projects")}>
          <h2 className="book__text">Projects</h2>
        </div>
        <div className="book__3" onClick={() => handleNavigation("/contact")}>
          <h2 className="book__text">Contact</h2>
        </div>
      </div>
    </>
  );
}

export default Projects;
