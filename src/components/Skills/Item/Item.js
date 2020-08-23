import React from "react";
import "./Item.css";

export default class SkillsItem extends React.Component {
  state = {
    showTitle: false,
  };

  turnOver = event => {
    const item = event.currentTarget;
    item.classList.add("skills__item_hidden");
    setTimeout(() => {
      this.setState({ showTitle: !this.state.showTitle });
      item.classList.remove("skills__item_hidden");
    }, 300);
  };

  render() {
    const { info } = this.props;
    return (
      <div className="skills__item" onClick={this.turnOver}>
        {!this.state.showTitle && (
          <img
            className="skills__img"
            src={`${process.env.PUBLIC_URL}/icons/${info.icon}`}
            alt=""
          />
        )}
        {this.state.showTitle && info.text}
      </div>
    );
  }
}
