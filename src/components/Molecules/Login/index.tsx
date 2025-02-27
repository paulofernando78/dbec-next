// Components
import Link from "next/link";
import { Button } from "@/components/Atoms/Button/Button";

// Hooks
import { useState, useEffect } from "react";

// CSS
import styles from "./styles.module.css";

// Typescript
import "./type";

export const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) setClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setIsOpen(false), 700); // Match the duration of the slide-up animation
  };

  if (!isOpen && !closing) return null;

  return (
    <>
      <div
        className={`${styles["login-container"]} ${
          closing ? styles["slide-up"] : ""
        }`}
      >
        <p className="font-bold">Email</p>
        <input type="text"></input>
        <p className="font-bold">Password</p>
        <input
          type="password"
          className={`p-font ${styles["password"]}`}
        ></input>
        <span className={styles["login-close-btn"]}>
          <Button
            label="Login"
            onClick={() => (window.location.href = "/materials")} isActive={true}
          ></Button>
          <Button label="✖" onClick={handleClose}  isActive={true}/>
        </span>
        <p className="p-size-small">
          Not a member? <Link href="#contact-me">Contact me!</Link>
        </p>
      </div>
    </>
  );
};
