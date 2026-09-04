import "./Sidebar.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/github.png";
import Resume from "../../assets/resume.png";

import { links } from "../../data/data";

export default function LeftSidebar() {
  return (
    <div className="left sidebar">
      <div className="links">
        <a className="link" target={"_blank"} rel="noreferrer" href={links.resume}>
          <img className="resume-logo" src={Resume} alt="resume" />
        </a>
        <a target={"_blank"} rel="noreferrer" className="link" href={links.linkedin}>
          <img className="linkedin-logo" src={Linkedin} alt="linkedin" />
        </a>
        <a target={"_blank"} rel="noreferrer" className="link" href={links.twitter}>
          <img className="twitter-logo" src={Twitter} alt="twitter" />
        </a>
        <a target={"_blank"} rel="noreferrer" className="link" href={links.github}>
          <img className="github-logo" src={Github} alt="github" />
        </a>
      </div>
    </div>
  );
}
