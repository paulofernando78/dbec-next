"use client";

import { useState } from "react";
import { Button } from "@/components/Atoms/Button/Button";
import "./type";
import Link from "next/link";

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
    <form
      className="auth-container"
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
        required
      ></input>
      <p className="font-bold">Password</p>
      <input
        type="password"
        className="p-font auth-container-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button label="Sign in / Log in" type="submit" onClick={handleSubmit} />
      <p className="p-size-small">
        Not a member?{" "}
        <Link href="#contact-me" className="cursor-pointer underline">
          Contat me!
        </Link>
      </p>
    </form>
  );
};
