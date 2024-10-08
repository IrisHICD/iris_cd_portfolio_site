import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookCover.scss";

function BookCover() {
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
      <div className="book">
        <div className="book__main">
          <div>
            <img className="book__logo" src={logo} />
          </div>
          <div className="book__title">
            <h1 className="book__name">Iris Cheang-Deis</h1>
            <h2 className="book__job">Web Developer</h2>
          </div>
        </div>

        <div className="navbar">
          <div>
            <img className="navbar__logo" src={logo} />
          </div>
          <div
            className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
          >
            <a className="navbar__dropdown navbar__a" href="about">
              About
            </a>
            <a className="navbar__dropdown navbar__b" href="projects">
              Projects
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

export default BookCover;
