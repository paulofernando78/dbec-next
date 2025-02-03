import { Button } from "@/components/Atoms/Button";
import Link from "next/link";
import styles from "./styles.module.css";
import "./type";

export const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={styles["login-container"]}>
        <p className="bold">Email</p>
        <input type="text"></input>
        <p className="bold">Password</p>
        <input type="password" className={`p-font ${styles["password"]}`}></input>
        <span className={styles["login-close-btn"]}>
        <Button
          label="Login"
          onClick={() => (window.location.href = "/materials")}
        ></Button>
        <Button label="✖" onClick={() => setIsOpen(false)} />
        </span>
        <p className="p-size-small">
          Not a member? <Link href="#contact-me">Contact me!</Link>
        </p>
      </div>
    </>
  );
};
