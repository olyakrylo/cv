import React from "react";
import "./Skills.css";
import "./skillsList";
import skillsList from "./skillsList";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.items = skillsList.map(() => React.createRef());
    this.titles = skillsList.map(() => React.createRef());
  }

  componentDidMount() {
    const show = () => {
      if (
        window.pageYOffset +
          window.innerHeight -
          document.querySelector(".skills").offsetTop >
        100
      ) {
        let i = 0;
        const interval = setInterval(() => {
          this.items[i].current.classList.add("skills__item_show");
          i++;
          if (i === this.items.length) {
            clearInterval(interval);
          }
        }, 100);
        window.removeEventListener("scroll", show);
      }
    };
    document.addEventListener("scroll", show);
  }

  click = index => {
    const item = this.items[index];
    const title = this.titles[index];
    if (
      item.current.classList.contains("skills__item_hover") &&
      title.current.classList.contains("skills__title_hover")
    ) {
      title.current.classList.remove("skills__title_hover");
      setTimeout(() => {
        item.current.classList.remove("skills__item_hover");
      }, 300);
    } else if (
      !item.current.classList.contains("skills__item_hover") &&
      !title.current.classList.contains("skills__title_hover")
    ) {
      item.current.classList.add("skills__item_hover");
      setTimeout(() => {
        title.current.classList.add("skills__title_hover");
      }, 300);
    }
  };

  render() {
    return (
      <div className="skills">
        {skillsList.map((item, i) => (
          <div
            className="skills__item-container"
            key={i}
            onClick={() => this.click(i)}
          >
            <div className="skills__item" ref={this.items[i]}>
              <img
                className="skills__img"
                src={`${process.env.PUBLIC_URL}/icons/${item.icon}`}
                alt=""
              />
            </div>
            <div className="skills__title" ref={this.titles[i]}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
