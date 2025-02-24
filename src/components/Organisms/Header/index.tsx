"use client";

// Components
import Link from "next/link";

// Styles
import styles from "./Header.module.css";

// Images
import Image from "next/image";
import { btnIcon } from "@/img/index";

// Fonts
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

// Typescript
import { HeaderProps } from "./type";
import { ThemeSwitch } from "../ThemeSwitch";

export const Header = ({ show, toggleShow }: HeaderProps) => {
  return (
    <div className={styles["header-container"]}>
        <Image
          src={btnIcon}
          alt="Button icon"
          className={styles["btn-menu"]}
          onClick={() => toggleShow()}
        />
      <div className={styles["header-inner-container"]}>
        <Link href="/materials">
          <p className={styles["logo-name"]}>
            <b className={lato.className}>DAILY BASIS ENGLISH COURSE</b>
          </p>
        </Link>
      <ThemeSwitch />
      </div>
    </div>
  );
};
