import React from "react";
import styles from "./Whiteboard.module.css";

interface IWhiteboard {
  title: string;
  subtitle: string;
  descriptions: string[];
}

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
}: IWhiteboard) => {
  return (
    <div className={styles.containerWhiteboard}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {descriptions.map((description, index) => (
        <p key={index}><b>{description}</b></p>
      ))}
    </div>
  );
};
