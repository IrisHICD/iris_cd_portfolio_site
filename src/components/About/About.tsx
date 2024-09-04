import "./About.scss";
import timeline from "../../assets/timeline.svg";

function About() {
  return (
    <>
      <div>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
      </div>
      <div>
        <img src={timeline} />
      </div>
    </>
  );
}

export default About;
