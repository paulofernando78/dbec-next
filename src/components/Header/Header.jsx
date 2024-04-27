import React from "react";
import Image from "next/image";

// CSS
import header from "@/components/Header/Header.module.css";

// Images
import usaUkIcon from "/public/img/cat.png"

export const Header = () => {
  return (
    <div className={header.headerContent}>
      <Image src={usaUkIcon} alt="Flag icon" className="icon-general" />
      <p className={header["logo-name"]}><b>DAILY BASIS ENGLISH COURSE</b></p>
    </div>
  );
};
