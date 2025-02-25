"use client";

// Components
import { Header } from "../Organisms/Header";
import { NavBar } from "../Organisms/NavBar";

// Hooks
import React, { useState } from "react";

// CSS
import styles from "./HeaderNavBar.module.css";

export default function HeaderNavBar() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      <div className={styles["margin-bottom"]}>
        <Header toggleShow={toggleShow} />
      </div>
      <NavBar show={show} toggleShow={toggleShow} width={""} />
    </>
  );
}
