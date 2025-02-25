"use client";

import React, { useState, useEffect } from "react";
import { Whiteboard } from "@/components";
import styles from "./styles.module.css";

export default function UsersDashboard() {
  const [users, setUsers] = useState<User[]>([]);

  

  return (
    <>
      <Whiteboard title="Dashboard" />
      <h3 className="margin-bottom">Students</h3>
      <div className={styles.container}>
        <ul className={`card-border-shadow ${styles["grid"]}`}>
          <p className="font-bold">Created at</p>
          <p className="font-bold">Usernane</p>
          <p className="font-bold">Password</p>
          <div></div>
          {users.map((user: User) => (
            <React.Fragment key={user.id}>
              <li>{user.created_at}</li>
              <li>{user.username}</li>
              <li>{user.password}</li>
              {/* <Button
                label="delete"
                onClick={() => handleDeleteUser(user.id)}
                width="100px"
              /> */}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
