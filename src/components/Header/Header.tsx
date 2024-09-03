"use client";
import React from "react";
import Image from "next/image";

// CSS
import styles from "@/components/Header/Header.module.css";

// Images
import usaUkIcon from "../../../public/assets/img/header-usa-uk-icon.png";
import btnIcon from "../../../public/assets/img/icon/btn-menu.png";

interface HeaderProps {
  show?: boolean;
  toggleShow: () => void;
}

export const Header = ({ show, toggleShow }: HeaderProps) => {
  return (
    <div className={styles["header-content"]}>
      <Image
        src={usaUkIcon}
        alt="Flag icon"
        className={styles["usa-uk-flag-icon"]}
      />
      <Image
        src={btnIcon}
        alt="Button icon"
        className={styles["btn-menu"]}
        onClick={() => toggleShow()}
      />
      <p className={styles["logo-name"]}>
        <b>DAILY BASIS ENGLISH COURSE</b>
      </p>
    </div>
  );
};
