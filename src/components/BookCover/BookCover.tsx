import logo from "../../assets/images/logo.png";
import waterfall from "../../assets/images/waterfall.mp4";
import "./BookCover.scss";

function BookCover() {
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
