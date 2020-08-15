import React from "react";
import "./Item.css";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.item = React.createRef();
    this.info = React.createRef();
    this.descr = React.createRef();
  }

  componentDidMount() {
    const height = getComputedStyle(this.item.current).height;
    this.item.current.style.height = height;
  }

  more = () => {
    this.item.current.classList.add("item_hidden");
    setTimeout(() => {
      this.item.current.classList.remove("item_hidden");
      this.info.current.classList.add("item__info_hidden");
      this.descr.current.classList.remove("item__descr_hidden");
    }, 300);
  };

  back = () => {
    this.item.current.classList.add("item_hidden");
    setTimeout(() => {
      this.item.current.classList.remove("item_hidden");
      this.info.current.classList.remove("item__info_hidden");
      this.descr.current.classList.add("item__descr_hidden");
    }, 300);
  };

  render() {
    const {
      title,
      subtitle,
      link,
      linkTitle,
      techs,
      type,
      description,
    } = this.props;
    return (
      <div className={`item item_${type}`} ref={this.item}>
        <div className="item__info" ref={this.info}>
          <div className="item__title">{title}</div>
          <div className="item__subtitle">{subtitle}</div>
          <a className="item__link" href={link}>
            {linkTitle}
          </a>
          <div className="item__bottom">
            <button className="item__more" onClick={this.more}>
              Read more
            </button>
            <div className="item__techs">
              {techs.map((tech, i) => (
                <div className="item__tech" key={i}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="item__descr item__descr_hidden" ref={this.descr}>
          <div>{description}</div>
          <button className="item__descr-back" onClick={this.back}>
            Back
          </button>
        </div>
      </div>
    );
  }
}
