import React from "react";
import "./Item.css";

export default function Item({
  title,
  subtitle,
  link,
  linkTitle,
  techs,
  type,
  description,
}) {
  return (
    <div className={`item item_${type}`}>
      <div className="item__info">
        <div className="item__title">{title}</div>
        <div className="item__subtitle">{subtitle}</div>
        <a className="item__link" href={link}>
          {linkTitle}
        </a>
        <div className="item__bottom">
          <button className="item__more">Read more</button>
          <div className="item__techs">
            {techs.map(tech => (
              <div className="item__tech">{tech}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="item__descr">{description}</div>
    </div>
  );
}
