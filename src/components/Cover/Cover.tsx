import { motion } from "framer-motion";
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
