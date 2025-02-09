import React, { Children } from "react";
import styles from "./styles.module.css";

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["auth-container"]}>
    {children}
  </div>;
};
