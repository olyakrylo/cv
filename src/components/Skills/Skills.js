import React from "react";
import "./Skills.css";
import { skills, softSkills } from "../../info";
import SkillsItem from "./Item";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.items = [...skills, ...softSkills].map(() => React.createRef());
    this.skills = React.createRef();
  }

  componentDidMount() {
    const show = () => {
      if (window.pageYOffset + window.innerHeight - this.skills.current.offsetTop > 100) {
        let i = 0;
        const interval = setInterval(() => {
          this.items[i].current.classList.add("skills__animation-container_end");
          i++;
          if (i === this.items.length) {
            clearInterval(interval);
          }
        }, 100);
        document.removeEventListener("scroll", show);
      }
    };
    document.addEventListener("scroll", show);
  }

  render() {
    return (
      <div className="skills" ref={this.skills}>
        {skills.map((item, i) => (
          <div className="skills__item-container" key={i}>
            <div ref={this.items[i]} className="skills__animation-container">
              <SkillsItem info={item} />
            </div>
          </div>
        ))}
        <br />
        {softSkills.map((item, i) => (
          <div className="skills__item-container" key={i}>
            <div ref={this.items[skills.length + i]} className="skills__animation-container">
              <SkillsItem info={item} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
