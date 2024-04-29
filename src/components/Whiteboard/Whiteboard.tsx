import React from "react";
import whiteboard from "./Whiteboard.module.css";

interface IWhiteboard {
  title: string;
  subtitle?: string;
  descriptions?: string[];
}

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
}: IWhiteboard) => {
  return (
    <div className={whiteboard.container}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {descriptions.map((description, index) => (
        <p key={index}><b>{description}</b></p>
      ))}
    </div>
  );
};
