import "./About.css";
import Image from "../../assets/1.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="left-about">
        <p className="about-name">
          I'm <span className="">Sumrender Singh.</span>
        </p>
        <div className="about-content">
          <div className="">
            <p>
              I have been coding<span className="emoji">👨‍💻</span> for nearly 3
              years, learning something new each day. I love to delve into new
              technologies and learn more about them.
            </p>
            <p className="">
              When I am not coding, I like to play basketball
              <span className="emoji">🏀</span>, badminton
              <span className="emoji">🏸</span>and read web novels.
              <span className="emoji">📖.</span>
            </p>
            <p className="">
              My New Year's resolution is to start going to Gym 💪.
            </p>
            <p className="m-top">
              My preferred weapons of choice <span className="emoji">👇.</span>
            </p>
          </div>
          <div className="button-grid-container m-top">
            <button className="grid-button">React</button>
            <button className="grid-button">Express</button>
            <button className="grid-button">MongoDB</button>
            <button className="grid-button">Node</button>
          </div>
        </div>
        <div className="github-container">
          <button className="github">
            <a target={"_blank"} rel="noreferrer" href="https://www.github.com/sumrender">
              <span className="emoji">🔗</span> My Github
            </a>
          </button>
        </div>
      </div>
      <div className="image right-about">
        <img className="about-image" src={Image} alt="hogwarts" />
      </div>
    </div>
  );
}
