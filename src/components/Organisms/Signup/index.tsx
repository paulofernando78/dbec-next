"use client"

import { useState } from "react";
import { Button } from "@components/index"
import "./type";

export const SignUp = ({ handleFlipAction }: SignUpProps) => {
  const [username, setusername] = useState("");
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
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <p className="font-bold">Password</p>
      <input
        type="password"
        className="p-font auth-container-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button label="Sign Up" type="submit" onClick={handleSubmit} />
      <p className="p-size-small">
        Already a member?{" "}
        <span onClick={handleFlipAction} className="cursor-pointer">
          Sign in / Log in
        </span>
      </p>
    </form>
  );
};
