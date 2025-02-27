"use client";

import { useState } from "react";
import { Header, NavBar } from "@/components/index";

export default function NavigationWrapper() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      <Header toggleShow={toggleShow} show={show} />
      <NavBar show={show} toggleShow={toggleShow} width={""} />
    </>
  );
}
