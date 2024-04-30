import React from "react";
import Image from "next/image";

// CSS
import header from "@/components/Header/Header.module.css";

// Images
import usaUkIcon from "../../assets/img/header-usa-uk-icon.png"
import btnIcon from "../../assets/img/icon/btn-menu.png"

export const Header = () => {
  return (
    <div className={header["header-content"]}>
      <Image src={usaUkIcon} alt="Flag icon" className={header["usa-uk-flag-icon"]} />
      <Image src={btnIcon} alt="Button icon" className={header["btn-menu"]} />
      <p className={header["logo-name"]}><b>DAILY BASIS ENGLISH COURSE</b></p>
    </div>
  );
};
