"use client";

import React, { useState, useEffect } from "react";
import supabase from "@/lib/supabaseClient";
import { Button, Whiteboard } from "@/components";
import styles from "./styles.module.css";

export default function UsersDashboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.log("Error fetching users:", error.message);
      } else {
        console.log("Users fetched:", data);
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const { error } = await supabase.from("users").delete().eq("id", userId);

      if (error) {
        console.error("Error deleting user:", error.message);
      } else {
        setUsers(users.filter((user) => user.id !== userId));
      }
    }
  };

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
              <Button
                label="delete"
                onClick={() => handleDeleteUser(user.id)}
                width="100px"
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
