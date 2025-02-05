import { useState, useEffect } from "react";
import { Button } from "@/components/Atoms/Button";
import Link from "next/link";
import styles from "./styles.module.css";
import "./type";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        window.location.href = "/materials"; // Redirect upon login
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <form
      className={styles["login-container"]}
      onSubmit={(e) => {
      e.preventDefault();
      handleLogin();
      }}
    >
      <p className="bold">Email</p>
      <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      ></input>
      <p className="bold">Password</p>
      <input
      type="password"
      className={`p-font ${styles["password"]}`}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      ></input>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button label="Login" type="submit" onClick={handleLogin}/>
      <p className="p-size-small">
      Not a member? <Link href="/signup">Sign up</Link>
      </p>
    </form>
  );
};
