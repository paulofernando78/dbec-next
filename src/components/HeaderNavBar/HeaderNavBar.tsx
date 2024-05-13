"use client"
import React, { useState } from "react";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";

export default function HeaderNavBar() {
    const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      <Header toggleShow={toggleShow} />
      <NavBar show={show} toggleShow={toggleShow}/>
    </>
  );
}
