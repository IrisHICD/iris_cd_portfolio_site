import logo from "../../assets/images/logo.png";
import waterfall from "../../assets/images/waterfall.mp4";
import { useState } from "react";
import "./BookCover.scss";

function BookCover() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="book">
        <div className="book__main">
          <video autoPlay muted loop className="book__video">
            <source src={waterfall} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            <a className="navbar__a" href="#about">
              About
            </a>
            <a className="navbar__a" href="#services">
              Projects
            </a>
            <a className="navbar__a" href="#contact">
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

        <div className="book__1">
          <h2 className="book__text">About</h2>
        </div>
        <div className="book__2">
          <h2 className="book__text">Projects</h2>
        </div>
        <div className="book__3">
          <h2 className="book__text">Contact</h2>
        </div>
      </div>
    </>
  );
}

export default BookCover;
