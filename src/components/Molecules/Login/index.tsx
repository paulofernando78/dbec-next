import { useState, useEffect } from "react";
import { Button } from "@/components/Atoms/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import "./type";

export const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const [closing, setClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Start router

  useEffect(() => {
    if (!isOpen) setClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setIsOpen(false), 700); // Match the duration of the slide-up animation
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please, fill out the fields.");
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("You're in");
        router.push("/materials"); // Redirect upon login
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  if (!isOpen && !closing) return null;

  return (
    <>
      <div
        className={`${styles["login-container"]} ${
          closing ? styles["slide-up"] : ""
        }`}
      >
        <p className="bold">Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="bold">Password</p>
        <input
          type="password"
          className={`p-font ${styles["password"]}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <span className={styles["login-close-btn"]}>
          <Button label="Login" onClick={handleLogin}></Button>
          <Button label="✖" onClick={handleClose} />
        </span>
        <p className="p-size-small">
          Not a member? <Link href="#contact-me">Contact me!</Link>
        </p>
      </div>
    </>
  );
};
