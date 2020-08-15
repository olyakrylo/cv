import React from "react";
import "./Projects.css";
import "./projectsList";
import Item from "./Item";
import projectsList from "./projectsList";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__odd">
        {projectsList
          .filter((_, i) => i % 2 === 0)
          .map(item => (
            <Item
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              linkTitle={item.linkTitle}
              techs={item.techs}
              description={item.description}
              type="odd"
            />
          ))}
      </div>
      <div className="projects__divider"></div>
      <div className="projects__even">
        {projectsList
          .filter((_, i) => i % 2 !== 0)
          .map(item => (
            <Item
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              linkTitle={item.linkTitle}
              techs={item.techs}
              description={item.description}
              type="even"
            />
          ))}
      </div>
    </div>
  );
}
