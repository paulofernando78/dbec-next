"use client"
import React from "react";
import Image from "next/image";

// CSS
import header from "@/components/Header/Header.module.css";

// Images
import usaUkIcon from "../../../public/assets/img/header-usa-uk-icon.png"
import btnIcon from "../../../public/assets/img/icon/btn-menu.png"

interface HeaderProps {
  show?: boolean
  toggleShow:() => void 
}

export const Header = ({show, toggleShow} :HeaderProps) => {
  return (
    <div className={header["header-content"]}>
      <Image src={usaUkIcon} alt="Flag icon" className={header["usa-uk-flag-icon"]} />
      <Image src={btnIcon} alt="Button icon" className={header["btn-menu"]} onClick={() => toggleShow()}/>
      <p className={header["logo-name"]}><b>DAILY BASIS ENGLISH COURSE</b></p>
    </div>
  );
};
