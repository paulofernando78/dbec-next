"use client";

import Link from "next/link";

// Components
import { Button } from "@/components/Atoms/Button/Button";

// Hooks
import { useState } from "react";

// CSS
import styles from "./SignIn.module.css";

// Typescript
import "./type";
import { Neumorphism } from "@/components/Atoms/Neumorphism";

export const SignIn = ({ handleFlipAction }: SignInProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!username || !password) {
      alert("Please, fill out the fields.");
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("You're in");
        window.location.href = "/materials"; // Redirect upon login
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <Neumorphism>
      <form
        className={styles["container"]}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <p className="font-bold">Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles["username-input"]}
          required
        ></input>
        <p className="font-bold">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles["password-input"]}
          required
        ></input>
  
        {error && <p className={styles["error"]}>{error}</p>}
  
        <div className={styles["login-button"]}>
          <Button label="Sign in / Log in" type="submit" onClick={handleSubmit} width="100%" isActive={true}/>
        </div>
        <p className="p-size-small">
          Not a member?{" "}
          <Link href="#contact-me" className="cursor-pointer underline">
            Contact me!
          </Link>
        </p>
      </form>
    </Neumorphism>
  );
};
