import React from "react";
import whiteboard from "./Whiteboard.module.css";

interface WhiteboardProps {
  title: string;
  subtitle?: string;
  descriptions?: string[];
  subdescription?: string
}

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  subdescription
}: WhiteboardProps) => {
  return (
    <div className={whiteboard.container}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {descriptions.map((description, index) => (
        <p key={index}>
          <b>{description}</b>
        </p>
      ))}
      {subdescription && <p className="p-size-smaller">{subdescription}</p>}
    </div>
  );
};
