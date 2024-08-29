import { SocialIcon } from "react-social-icons";
import emailIcon from "../../assets/images/jpg/email.png";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__mobile">
          <SocialIcon
            className="footer__icons"
            url="https://www.linkedin.com/"
          />
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/iris-cheang-deis/"
            target="_blank"
          >
            https://www.linkedin.com/in/iris-cheang-deis/
          </a>
        </div>
        <div className="footer__mobile">
          <SocialIcon className="footer__icons" url="https://github.com/" />
          <a
            className="footer__link"
            href="https://github.com/IrisHICD"
            target="_blank"
          >
            https://github.com/IrisHICD
          </a>
        </div>
        <div className="footer__mobile footer__email">
          <img className="footer__emailicon" src={emailIcon} alt="email icon" />
          <a
            className="footer__link"
            href="mailto:iris_hoin_cheang@hotmail.com"
            target="_blank"
          >
            iris_hoin_cheang@hotmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
