import { motion } from "framer-motion";
import screenshot1 from "../../assets/images/jpg/screenshot1.png";
import screenshot2 from "../../assets/images/jpg/screenshot2.png";
import screenshot3 from "../../assets/images/jpg/screenshot3.png";
import arrowright from "../../assets/images/svg/angle-right.svg";

import "./Cover.scss";

type Props = {};
export const Cover = ({}: Props) => {
  const links = [
    "2024 Project Sample",
    "Work Experience",
    "Education / Certification",
  ];

  return (
    <>
      <div className="cover">
        <div className="cover__screenshots">
          <img
            className="cover__screenshot cover__ss1"
            src={screenshot1}
            alt="screenshot1"
          />
          <img
            className="cover__screenshot cover__ss2"
            src={screenshot2}
            alt="screenshot2"
          />
          <img
            className="cover__screenshot cover__ss3"
            src={screenshot3}
            alt="screenshot3"
          />
        </div>

        <div className="cover__left">
          <h3 className="cover__title">Iris Cheang-Deis / Software Engineer</h3>
          <ul className="cover__links">
            {links.map((linkText, index) => (
              <li key={index}>
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="cover__arrow"
                  src={arrowright}
                  alt="arrow"
                />
                <a className="cover__a">{linkText}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
