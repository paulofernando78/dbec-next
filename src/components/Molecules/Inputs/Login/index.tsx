import { Button } from "@/components/Atoms/Button";
import Link from "next/link";
import styles from "./styles.module.css";
import "./type";
import { useState, useEffect } from "react";

export const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) setClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setIsOpen(false), 500); // Match the duration of the slide-up animation
  };

  if (!isOpen && !closing) return null;

  return (
    <>
      <div className={`${styles["login-container"]} ${closing ? styles["slide-up"] : ""}`}>
        <p className="bold">Email</p>
        <input type="text"></input>
        <p className="bold">Password</p>
        <input type="password" className={`p-font ${styles["password"]}`}></input>
        <span className={styles["login-close-btn"]}>
        <Button
          label="Login"
          onClick={() => (window.location.href = "/materials")}
        ></Button>
        <Button label="✖" onClick={handleClose} />
        </span>
        <p className="p-size-small">
          Not a member? <Link href="#contact-me">Contact me!</Link>
        </p>
      </div>
    </>
  );
};
