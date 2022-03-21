import React from "react";
import "./Projects.css";
import Item from "./Item";
import { projects } from "../../info";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__odd">
        {projects
          .filter((_, i) => i % 2 === 0)
          .map((item, i) => (
            <Item item={item} type="odd" key={i} />
          ))}
      </div>
      <div className="projects__divider"></div>
      <div className="projects__even">
        {projects
          .filter((_, i) => i % 2 !== 0)
          .map((item, i) => (
            <Item item={item} type="even" key={i} />
          ))}
      </div>
    </div>
  );
}
