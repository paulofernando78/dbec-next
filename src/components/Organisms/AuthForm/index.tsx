import React from "react";
import styles from "./styles.module.css";
import { Button } from "@/components/Atoms/Button";
import { AuthFormProps } from "./type";

export const AuthForm = ({ label1, label2, BtnLabel, handleFlip, switchAuth, member }: AuthFormProps) => {
  return (
    <form className={styles["auth-container"]}>
      <p className="bold">{label1}</p>
      <input type="text" />
      <p className="bold">{label2}</p>
      <input type="password" className={styles["password"]} />
      <Button label={BtnLabel} onClick={() => {}} />
      <p className="p-size-small">{member}{" "}<span onClick={handleFlip}><span className={styles["switch-auth"]}>{switchAuth}</span></span></p> 
      <span className={styles["error-message"]}>...</span>
    </form>
  );
};
