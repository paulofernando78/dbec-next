import React from "react";
import Image from "next/image";

// CSS
import header from "@/components/Header/Header.module.css";

// Images
import usaUkIcon from "/public/img/header-usa-uk-icon.png"

export const Header = () => {
  return (
    <div className={header["header-content"]}>
      <Image src={usaUkIcon} alt="Flag icon" className="icon-general" />
      <p className={header["logo-name"]}><b>DAILY BASIS ENGLISH COURSE</b></p>
    </div>
  );
};
