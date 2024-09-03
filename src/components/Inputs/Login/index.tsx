import { Card } from "@/components/Cards/Card";
import React from "react";

export const Login = () => {
  return (
    <Card>
      <form>
        <p>email: </p>
        <input type="text" id="email" />
        <p>password: </p>
        <input type="password" id="password" />
      </form>
    </Card>
  );
};
