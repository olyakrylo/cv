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

  state = {
    showDivider: false,
    minHeight: 0,
  };

  componentDidMount() {
    this.countMinHeight();

    const show = () => {
      if (window.pageYOffset + window.innerHeight - this.skills.current.offsetTop > 100) {
        let i = 0;
        const interval = setInterval(() => {
          this.items[i].current.classList.add("skills__animation_end");
          i++;
          if (i === skills.length + 1) {
            this.setState({ showDivider: true });
          }
          if (i === this.items.length) {
            clearInterval(interval);
          }
        }, 100);
        document.removeEventListener("scroll", show);
      }
    };
    document.addEventListener("scroll", show);
  }

  countMinHeight() {
    const minWidth = 120;
    const height = 130;
    const gap = 15;
    const itemsCount = skills.length + softSkills.length + 1;

    const containerWidth = document.querySelector(".content")?.getBoundingClientRect().width;

    const columns = Math.floor(containerWidth / minWidth);
    const rows = Math.ceil(itemsCount / columns);

    const minHeight = rows * height + (rows - 1) * gap;
    this.setState({ minHeight });
  }

  render() {
    return (
      <>
        <div className="skills" ref={this.skills} style={{ minHeight: this.state.minHeight }}>
          {skills.map((item, i) => (
            <div key={i} className="skills__animation-container">
              <div ref={this.items[i]} className="skills__animation">
                <SkillsItem info={item} />
              </div>
            </div>
          ))}
          <div aria-hidden={!this.state.showDivider} className={"skills__divider"}>
            <hr />
          </div>
          {softSkills.map((item, i) => (
            <div key={i} className="skills__animation-container">
              <div ref={this.items[skills.length + i]} key={i} className="skills__animation">
                <SkillsItem info={item} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
