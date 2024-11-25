
// 

import { Card } from "@/components";

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
